#!/bin/bash -xe

TAG=0.8.2

# 1) pack
# @see https://docs.npmjs.com/cli/pack
docker run --rm \
  -it \
  -v $(pwd):/usr/src/app \
  --workdir /usr/src/app \
  --entrypoint npm \
  node:10 \
  pack

# 2) publish
# @see https://docs.npmjs.com/cli/publish
docker run --rm \
  -it \
  -v /home/${USER}/.npmrc:/root/.npmrc \
  -v /home/${USER}/.gitconfig:/root/.gitconfig \
  -v $(pwd):/usr/src/app \
  --workdir /usr/src/app \
  --entrypoint npm \
  node:10 \
  publish platform-js-${TAG}.tgz --access public --dry-run
