ARG STDLIB=${STDLIB:-invalid}

FROM ubuntu:26.04 AS builder-glibc

RUN apt-get update \
  && apt-get -y --no-install-recommends install \
  ca-certificates=20250419build1 \
  fontconfig=2.17.1-3ubuntu1 \
  gnupg2=2.4.8-4ubuntu3 \
  perl=5.40.1-7build1 \
  unzip=6.0-29ubuntu1 \
  wget=1.25.0-2ubuntu4 \
  && /usr/sbin/update-ca-certificates --fresh \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

LABEL maintainer=xtnguyen605@gmail.com

RUN useradd app \
  # Gain write permission to texlive binaries for current user
  && mkdir -p /usr/local/texlive \
  && chown app:app /usr/local/texlive \
  && mkdir -p /usr/share/fonts

FROM alpine:3.23.3 AS builder-musl

RUN apk update \
  && apk add --no-cache \
  ca-certificates=20251003-r0 \
  fontconfig=2.17.1-r0 \
  gnupg=2.4.9-r0 \
  perl=5.42.1-r0 \
  unzip=6.0-r16 \
  wget=1.25.0-r2 \
  && apk upgrade \
  && update-ca-certificates \
  && rm -rf /var/cache/apk/*

LABEL maintainer=xtnguyen605@gmail.com

RUN addgroup -S app && adduser -S app -G app \
  # Gain write permission to texlive binaries for current user
  && mkdir -p /usr/local/texlive \
  && chown app:app /usr/local/texlive \
  && mkdir -p /usr/share/fonts

# hadolint ignore=DL3006
FROM builder-${STDLIB}

USER app:app

# List of available mirrors: https://ctan.org/mirrors
ARG CTAN_REPOSITORY
ARG TEXLIVE_INSTALL_VERSION
ARG TEXLIVE_RUNTIME_VERSION

# ARCH-linux (for glibc) or ARCH-linuxmusl (for musl libc)
# where ARCH is x86_64 or aarch64
ARG TEXLIVE_RUNTIME_VARIANT

WORKDIR /tmp
RUN wget --progress=dot:giga "${CTAN_REPOSITORY}/install-tl-unx.tar.gz" \
  && mkdir -p install-tl-unx \
  && tar xf install-tl-unx.tar.gz --directory=./install-tl-unx --strip-components=1

WORKDIR /tmp/install-tl-unx
# Minimal install of texlive (no TeX at all)
RUN perl install-tl \
  --repository "${CTAN_REPOSITORY}" \
  --no-interaction \
  --no-doc-install \
  --no-src-install \
  --scheme=minimal \
  && rm -rf /tmp/*

WORKDIR /home/app
RUN mkdir -p data

ENV PATH=/usr/local/texlive/${TEXLIVE_RUNTIME_VERSION}/bin/${TEXLIVE_RUNTIME_VARIANT}:${PATH}

# Install packages
RUN tlmgr option repository "${CTAN_REPOSITORY}" \
  && tlmgr update --self \
  && tlmgr install \
  xetex \
  etoolbox fontspec infwarerr kvoptions pdftexcmds tools xkeyval \
  extsizes geometry hyperref xcolor \
  cabin enumitem fontawesome5 setspace

WORKDIR /home/app/data
CMD ["xelatex", "--version"]
