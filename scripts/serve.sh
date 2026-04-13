#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
LOCAL_IMAGE_DIR="${PROJECT_ROOT}/.images"
LOCAL_IMAGE_STATUS_FILE="${PROJECT_ROOT}/local-image-status.json"

cd "${PROJECT_ROOT}"

has_local_images=false

if [[ -d "${LOCAL_IMAGE_DIR}" ]] && find "${LOCAL_IMAGE_DIR}" \( -type f -o -type l \) ! -name '.DS_Store' -print -quit | grep -q .; then
  has_local_images=true
fi

printf '{\n  "hasLocalImages": %s\n}\n' "${has_local_images}" > "${LOCAL_IMAGE_STATUS_FILE}"

live_server_args=(
  --host=127.0.0.1
  --port=4173
  --open=/index.html
)

if [[ "${has_local_images}" == "true" ]]; then
  live_server_args+=(--mount=/.images:.images)
fi

live_server_args+=(.)

live-server "${live_server_args[@]}"
