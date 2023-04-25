FROM debian:bullseye-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates=20210119 \
        wget=1.21-1+deb11u1 \
        perl=5.32.1-4+deb11u2 \
        libfontconfig1=2.13.1-4.2 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

LABEL maintainer=xtnguyen605@gmail.com

RUN adduser --disabled-password --gecos '' app \
    && mkdir -p /usr/local/texlive \
    && chown app:app /usr/local/texlive

USER app:app

WORKDIR /tmp
RUN wget --progress=dot:giga https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz \
    && tar xf install-tl-unx.tar.gz

# hadolint ignore=DL3003
RUN cd install-tl-* \
    && perl ./install-tl \
        --no-interaction \
        --no-doc-install \
        --no-src-install \
        --scheme=full

WORKDIR /app
RUN mkdir -p data

WORKDIR /app/data

ENV PATH=/usr/local/texlive/2023/bin/x86_64-linux:${PATH}

CMD ["xelatex", "--version"]
