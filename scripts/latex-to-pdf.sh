#!/usr/bin/env bash
set -euo pipefail

PREFIX="Thanh-Ethan-Nguyen-resume"
VARIANTS=(dark light)

function main() {
  local version
  version=$(jq -r '.resume_version' package.json)

  if [[ -z "$version" ]]; then
    echo "Missing version"
    return 1
  fi

  cd resumes/

  local tex_version_matching="VERSION \\\normalsize\\\texttt"
  mv content.tex{,.bak}
  sed "s,$tex_version_matching{.*,$tex_version_matching{$version}}," < content.tex.bak >| content.tex

  for variant in "${VARIANTS[@]}"; do
    local output="$PREFIX-$version-$variant"
    VARIANT="$variant" docker compose run --rm resume
    cp "$variant.pdf" "../public/$output.pdf"
  done
}

main "$@"
