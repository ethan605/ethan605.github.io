FROM alpine:3.18

RUN apk add --no-cache \
    fontconfig=2.14.2-r3 \
    gpg=2.4.1-r1 \
    perl=5.36.1-r1 \
    unzip=6.0-r14 \
    wget=1.21.4-r0

LABEL maintainer=xtnguyen605@gmail.com

RUN adduser --disabled-password --gecos '' app \
    # Gain write permission to texlive binaries for current user
    && mkdir -p /usr/local/texlive \
    && chown app:app /usr/local/texlive \
    && mkdir -p /usr/share/fonts

USER app:app
ARG TEXLIVE_VERSION=2023

WORKDIR /tmp
RUN wget --progress=dot:giga https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz \
    && tar xf install-tl-unx.tar.gz

# hadolint ignore=DL3003
RUN TEXLIVE_INSTALL_DIR=$(find /tmp -type d -name "install-tl-${TEXLIVE_VERSION}*") \
    && cd "${TEXLIVE_INSTALL_DIR}" \
    # Minimal install of texlive with infrastructure-only scheme (no TeX at all)
    && perl ./install-tl \
        --no-interaction \
        --no-doc-install \
        --no-src-install \
        --scheme=infrastructure-only \
    && rm -rf /tmp/*

WORKDIR /app
RUN mkdir -p data

ENV PATH=/usr/local/texlive/${TEXLIVE_VERSION}/bin/x86_64-linuxmusl:${PATH}

# Install packages
RUN tlmgr install xetex \
        etoolbox fontspec infwarerr kvoptions pdftexcmds tools xkeyval \
        extsizes geometry hyperref xcolor \
        cabin fontawesome5 setspace

WORKDIR /app/data
CMD ["xelatex", "--version"]
