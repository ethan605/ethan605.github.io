#!/usr/bin/env bash
set -euo pipefail

PREFIX="Thanh-Ethan-Nguyen-resume"

function main() {
  local version
  version=$(jq -r '.resume_version' package.json)

  if [[ -z "$version" ]]; then
    echo "Missing version"
    return 1
  fi

  cd resume/
  echo "$version" > version.tex

  local output="$PREFIX-$version"
  docker compose up resume
  cp "index.pdf" "../public/$output.pdf"

  docker compose down -t0
}

main "$@"
