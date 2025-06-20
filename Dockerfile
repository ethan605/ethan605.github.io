FROM ubuntu:oracular

RUN apt-get update \
  && apt-get -y --no-install-recommends install \
  ca-certificates=20240203 \
  fontconfig=2.15.0-1.1ubuntu2 \
  gnupg2=2.4.4-2ubuntu18.2 \
  perl=5.38.2-5ubuntu0.1 \
  unzip=6.0-28ubuntu6 \
  wget2=2.1.0-2.1build2 \
  texlive-base=2024.20240706-1 \
  && /usr/sbin/update-ca-certificates --fresh \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

LABEL maintainer=xtnguyen605@gmail.com

RUN useradd app
# && tlmgr init-usertree
# Gain write permission to texlive binaries for current user
# && mkdir -p /usr/local/texlive \
# && chown app:app /usr/local/texlive \
# && mkdir -p /usr/share/fonts

USER app:app
ARG CTAN_REPOSITORY
# ARG TEXLIVE_INSTALL_VERSION=2025
# ARG TEXLIVE_RUNTIME_VERSION=2025

# WORKDIR /tmp
# RUN wget2 --progress=bar "${CTAN_REPOSITORY}/install-tl-unx.tar.gz" \
#   && tar xf install-tl-unx.tar.gz

# hadolint ignore=DL3003
# RUN TEXLIVE_INSTALL_DIR=$(find /tmp -type d -name "install-tl-${TEXLIVE_INSTALL_VERSION}*") \
#   && cd "${TEXLIVE_INSTALL_DIR}" \
#   # Minimal install of texlive with infrastructure-only scheme (no TeX at all)
#   && perl install-tl \
#   --repository "${CTAN_REPOSITORY}" \
#   --no-interaction \
#   --no-doc-install \
#   --no-src-install \
#   # --scheme=minimal \
#   && rm -rf /tmp/*

WORKDIR /home/app
RUN mkdir -p data \
  # && mkdir -p texmf \
  && tlmgr init-usertree \
  && tlmgr option repository "${CTAN_REPOSITORY}" \
  && tlmgr update --self

# aarch64 or x86_64
# ARG ARCH
# ENV PATH=/usr/local/texlive/${TEXLIVE_RUNTIME_VERSION}/bin/${ARCH}-linux:${PATH}

# Install packages
RUN tlmgr install \
  xetex \
  etoolbox fontspec infwarerr kvoptions pdftexcmds tools xkeyval \
  extsizes geometry hyperref xcolor \
  cabin enumitem fontawesome5 setspace

WORKDIR /home/app/data
CMD ["xelatex", "--version"]
