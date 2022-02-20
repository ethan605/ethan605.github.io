#!/usr/bin/env bash
set -euo pipefail

PREFIX="Thanh-Ethan-Nguyen-resume"
VARIANTS=(dark light)

function main() {
  local version=$(jq -r '.resume_version' package.json)

  if [[ -z "$version" ]]; then
    echo "Missing version"
    return 1
  fi

  cd resumes/

  local tex_version_matching="VERSION \\\normalsize\\\texttt"
  mv content.tex{,.bak}
  cat content.tex.bak | sed "s,$tex_version_matching{.*,$tex_version_matching{$version}}," >| content.tex

  for variant in ${VARIANTS[@]}; do
    local jobname="$PREFIX-$version-$variant"
    pdflatex -output-directory=../public -jobname="$jobname" "$variant.tex"
  done
}

main "$@"
