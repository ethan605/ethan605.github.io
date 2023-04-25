#!/usr/bin/env bash
set -euo pipefail

PREFIX="Thanh-Ethan-Nguyen-resume"
VARIANTS=(1page full)

function main() {
  local version
  version=$(jq -r '.resume_version' package.json)

  if [[ -z "$version" ]]; then
    echo "Missing version"
    return 1
  fi

  cd resumes/

  echo "$version" > version.tex

  for variant in "${VARIANTS[@]}"; do
    local output="$PREFIX-$version-$variant"
    ENTRYPOINT="resume-$variant.tex" docker compose run --rm resume
    cp "resume-$variant.pdf" "../public/$output.pdf"
  done
}

main "$@"
