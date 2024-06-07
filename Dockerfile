FROM ubuntu:noble

RUN apt-get update \
    && apt-get -y --no-install-recommends install \
        ca-certificates=20240203 \
        fontconfig=2.15.0-1.1ubuntu2 \
        gpg=2.4.4-2ubuntu17 \
        perl=5.38.2-3.2build2 \
        unzip=6.0-28ubuntu4 \
        wget=1.21.4-1ubuntu4 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

LABEL maintainer=xtnguyen605@gmail.com

RUN useradd app \
    # Gain write permission to texlive binaries for current user
    && mkdir -p /usr/local/texlive \
    && chown app:app /usr/local/texlive \
    && mkdir -p /usr/share/fonts

USER app:app
ARG CTAN_MIRROR
ARG TLNET_PATH=systems/texlive/tlnet
ARG TEXLIVE_INSTALL_VERSION=2024
ARG TEXLIVE_RUNTIME_VERSION=2024

WORKDIR /tmp
RUN wget --progress=dot:giga "https://${CTAN_MIRROR}/${TLNET_PATH}/install-tl-unx.tar.gz" \
    && tar xf install-tl-unx.tar.gz

# hadolint ignore=DL3003
RUN TEXLIVE_INSTALL_DIR=$(find /tmp -type d -name "install-tl-${TEXLIVE_INSTALL_VERSION}*") \
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

# aarch64 or x86_64
ARG ARCH
ENV PATH=/usr/local/texlive/${TEXLIVE_RUNTIME_VERSION}/bin/${ARCH}-linux:${PATH}

# Install packages
RUN tlmgr --repository "https://${CTAN_MIRROR}/${TLNET_PATH}" install \
  xetex \
  etoolbox fontspec infwarerr kvoptions pdftexcmds tools xkeyval \
  extsizes geometry hyperref xcolor \
  cabin enumitem fontawesome5 setspace

WORKDIR /app/data
CMD ["xelatex", "--version"]
