# platform-js

[![Build Status](https://travis-ci.org/diproart/platform-js.svg?branch=master)](https://travis-ci.org/diproart/platform-js)

**only for internal use**

Platform-js - javascript (and css) bundles for internal development stream.
Full list of libraries see in `package.json` or `gulp/gulp.config.js`

## Bundles

+ `*.bundle.js` - full
+ `*.slim.js` - minimal (less libs)

**Main bundles**

+ platform.vue.bundle.js
+ platform.vue.slim.js
+ platform.media.js
+ platform.utils.js
+ dist/sass/* - concatenated by groups bulma sass
+ platform.media.sass

> internal rules required some names started with "_" symbol

## Bundles includes

+ ContentTools
+ alertifyjs
+ angular 1.6.x
+ angular material 1.1.x
+ animate.css
+ axios
+ bulma
+ gsap
+ hammerjs
+ jquery
+ jquery-colorbox
+ jquery-migrate
+ jquery.cookies
+ localforage
+ tether messenger
+ moment
+ photoswipe
+ picturefill
+ quill
+ scrollmagic
+ scrollup
+ select2
+ sweet-dropdown
+ sweet-modal
+ sweet-modal-vue
+ tether
+ tether-drop
+ toastr
+ twix
+ vee-validate
+ vue
+ vue-router
+ vuex

## Why?

For rapid prototyping without bootstrap project, templates or something else. For rapid prototyping locally, on codepen or somewhere else.

## Build

```
yarn build

# or

npm run build
```
