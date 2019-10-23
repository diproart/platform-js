#!/bin/bash -xe

# == build
# ./build-with-docker.sh 'run build'
# == install
# ./build-with-docker.sh i
# ./build-with-docker.sh 'i <package name>'

CMD=$1

[[ -z "$1" ]] && { CMD="--version"; }

docker run --rm \
  -it \
  -v $(pwd):/usr/src/app \
  --workdir /usr/src/app \
  --entrypoint npm \
  node:10 \
  ${CMD}
