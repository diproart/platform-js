# platform-js

[![Build Status](https://travis-ci.org/diproart/platform-js.svg?branch=master)](https://travis-ci.org/diproart/platform-js)

**only for internal use**

platform-js - javascript (and css) bundles for internal development stream.
Full list of libraries see in `package.json` or `gulp/gulp.config.js`

## Bundles

- `*.bundle.js` - full
- `*.slim.js` - minimal (less libs)
- `.3party.js` - other

**Main bundles**

- platform.vue.bundle.js
- platform.vue.slim.js
- platform.media.js
- platform.utils.js
- dist/sass/\* - concatenated by groups bulma sass
- platform.media.sass

> internal rules required some names started with "\_" symbol

## Bundles includes

- ~~ContentTools~~
- alertifyjs
- ~~angular 1.6.x~~
- ~~angular material 1.1.x~~
- animate.css
- axios
- bulma
- gsap
- ~~hammerjs~~
- jquery
- jquery-colorbox
- jquery-migrate
- jquery.cookies
- localforage
- ~~tether messenger~~
- moment
- photoswipe
- picturefill
- ~~quill~~
- scrollmagic
- scrollup
- ~~select2~~
- ~~sweet-dropdown~~
- ~~sweet-modal~~
- ~~sweet-modal-vue~~
- ~~tether~~
- ~~tether-drop~~
- toastr
- twix
- vee-validate
- vue
- vue-router
- vuex

## Why?

For rapid prototyping without bootstrap project, templates or something else. For rapid prototyping locally, on codepen or somewhere else.

## Build

```bash
npm run build
```

## Docker (only testing)

```bash
./build-with-docker.sh i
./build-with-docker.sh 'run build'
```

### publish

Publish used `~/.npmrc` & `~/.gitconfig`

```bash
# 1) pack
# 2) publish
./publish-with-docker.sh
```

> by default publish has `--dry-run` flag, please see source


## cypress

Testing (demo) some things.

static server

```bash
npm i -g serve
```

run

```bash
serve -s dist
```

cypress

```bash
npx cypress open
```

--

2016, 2019 DIERA.RU
