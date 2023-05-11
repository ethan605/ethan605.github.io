#!/usr/bin/env bash
set -euo pipefail

PREFIX="Thanh-Ethan-Nguyen-resume"

function main() {
  local version

  cd resume/
  version=$(cat version.tex)

  local output="$PREFIX-$version"
  docker compose up resume
  cp "index.pdf" "../public/$output.pdf"

  docker compose down -t0
}

main "$@"
