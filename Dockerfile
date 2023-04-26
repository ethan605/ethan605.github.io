FROM debian:bullseye-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates=20210119 \
        fontconfig=2.13.1-4.2 \
        perl=5.32.1-4+deb11u2 \
        unzip=6.0-26+deb11u1 \
        wget=1.21-1+deb11u1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

LABEL maintainer=xtnguyen605@gmail.com

RUN adduser --disabled-password --gecos '' app \
    # Gain write permission to texlive binaries for current user
    && mkdir -p /usr/local/texlive \
    && chown app:app /usr/local/texlive

# Install Hack Nerd fonts
WORKDIR /tmp
RUN wget --progress=dot:giga https://github.com/ryanoasis/nerd-fonts/releases/download/v2.3.3/Hack.zip \
    && unzip Hack.zip -d HackNerd \
    && cp HackNerd/*.ttf /usr/local/share/fonts \
    && dpkg-reconfigure fontconfig-config \
    && rm -rf /tmp/*

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

ENV PATH=/usr/local/texlive/${TEXLIVE_VERSION}/bin/x86_64-linux:${PATH}

# Install packages
RUN tlmgr install xetex \
        etoolbox fontspec infwarerr kvoptions pdftexcmds tools xkeyval \
        extsizes geometry hyperref xcolor \
        cabin fontawesome5 setspace

WORKDIR /app/data
CMD ["xelatex", "--version"]
