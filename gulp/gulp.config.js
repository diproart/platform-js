const nodeModules = 'node_modules'
const _ = require('lodash')

/**
 * build libs (only concat)
 */
const libs = {
  'platform.vue.js': [
    `${nodeModules}/vue/dist/vue.min.js`,
    `${nodeModules}/vuex/dist/vuex.min.js`,
    `${nodeModules}/vee-validate/dist/vee-validate.min.js`,
    `${nodeModules}/vue-router/dist/vue-router.min.js`,
    `${nodeModules}/axios/dist/axios.js`
  ],
  'platform.angular.js': [
    `${nodeModules}/angular/angular.min.js`,
    `${nodeModules}/angular-animate/angular-animate.min.js`,
    `${nodeModules}/angular-messages/angular-messages.min.js`,
    `${nodeModules}/angular-sanitize/angular-sanitize.min.js`
  ],
  'platform.material.js': [
    `${nodeModules}/angular/angular.min.js`,
    `${nodeModules}/angular-aria/angular-aria.min.js`,
    `${nodeModules}/angular-animate/angular-animate.min.js`,
    `${nodeModules}/angular-messages/angular-messages.min.js`,
    `${nodeModules}/angular-sanitize/angular-sanitize.min.js`,
    `${nodeModules}/angular-material/angular-material.min.js`
  ],
  'platform.media.js': [
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,
    `${nodeModules}/swiper/dist/js/swiper.min.js`,
    `${nodeModules}/swiper/dist/js/swiper.jquery.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,
    //`${nodeModules}/tether/dist/js/tether.min.js`,
    //`${nodeModules}/tether-drop/dist/js/drop.min.js`,
    `${nodeModules}/sweet-modal/dist/min/jquery.sweet-modal.min.js`,
    `${nodeModules}/sweet-dropdown/dist/min/jquery.sweet-dropdown.min.js`,
    `${nodeModules}/select2/dist/js/select2.full.min.js`,
    `${nodeModules}/scrollup/dist/lib/jquery.easing.js`,
    `${nodeModules}/scrollup/dist/jquery.scrollUp.min.js`,
    `${nodeModules}/toastr/build/toastr.min.js`,
    `${nodeModules}/messenger/build/js/messenger.min.js`,
    `${nodeModules}/messenger/build/js/messenger-theme-flat.js`,
    `${nodeModules}/messenger/build/js/messenger-theme-future.js`,
    `${nodeModules}/alertifyjs/build/alertify.min.js`
  ],
  'platform.utils-slim.js': [
    // @note diera.ru чат в zammad требует $.animation (этого нет slim)
    `${nodeModules}/jquery/dist/jquery.slim.min.js`,
    // полная версия
    // `${nodeModules}/jquery/dist/jquery.min.js`,
    `${nodeModules}/lodash/lodash.min.js`,
    // `${nodeModules}/picturefill/dist/picturefill.min.js`,
    `${nodeModules}/localforage/dist/localforage.min.js`
    //* `${nodeModules}/picturefill/dist/plugins/**/*.min.js`,
  ],
  'platform.utils.js': [
    // чат в zammad требует $.animation (этого нет slim)
    // `${nodeModules}/jquery/dist/jquery.slim.min.js`,
    // полная версия
    `${nodeModules}/jquery/dist/jquery.min.js`,
    `${nodeModules}/lodash/lodash.min.js`,
    `${nodeModules}/picturefill/dist/picturefill.min.js`,
    `${nodeModules}/localforage/dist/localforage.min.js`
    //* `${nodeModules}/picturefill/dist/plugins/**/*.min.js`,
  ]
}

const bundles = {
  /**
   * development build
   */
  'vue-slim': [
    // DOM
    `${nodeModules}/jquery/dist/jquery.slim.min.js`,

    // utils
    `${nodeModules}/lodash/lodash.min.js`,

    // cookies, localStorage etc
    `${nodeModules}/localforage/dist/localforage.min.js`,

    // http
    `${nodeModules}/axios/dist/axios.js`,

    // vue framework
    `${nodeModules}/vue/dist/vue.min.js`, // core
    `${nodeModules}/vuex/dist/vuex.min.js`, // immutable (flux, redux pattern)
    `${nodeModules}/vue-router/dist/vue-router.min.js`,
    `${nodeModules}/vee-validate/dist/vee-validate.min.js` // form validate
  ],
  /**
   * full build for platform
   */
  'vue': [
    // DOM, jQuery
    `${nodeModules}/jquery/dist/jquery.min.js`,
    `${nodeModules}/jquery.cookie/jquery.cookie.js`,

    // utils
    `${nodeModules}/lodash/lodash.min.js`,

    // cookies, localStorage etc
    // @deprected use lokijs
    `${nodeModules}/localforage/dist/localforage.min.js`,

    // picture polyfill
    `${nodeModules}/picturefill/dist/picturefill.min.js`,

    // overlay, modal, gallery
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,

    // slider
    `${nodeModules}/swiper/dist/js/swiper.min.js`,
    `${nodeModules}/swiper/dist/js/swiper.jquery.min.js`,

    // gallery
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,

    // pro* animations
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,

    // animations
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,

    // dropdown, positions, modals
    //`${nodeModules}/tether/dist/js/tether.min.js`,
    //`${nodeModules}/tether-drop/dist/js/drop.min.js`,
    `${nodeModules}/sweet-modal/dist/min/jquery.sweet-modal.min.js`,
    `${nodeModules}/sweet-dropdown/dist/min/jquery.sweet-dropdown.min.js`,

    // ui
    `${nodeModules}/select2/dist/js/select2.full.min.js`,

    // кнопка наверх
    `${nodeModules}/scrollup/dist/lib/jquery.easing.js`,
    `${nodeModules}/scrollup/dist/jquery.scrollUp.min.js`,

    // messenger
    `${nodeModules}/messenger/build/js/messenger.min.js`,
    `${nodeModules}/messenger/build/js/messenger-theme-flat.js`,
    `${nodeModules}/messenger/build/js/messenger-theme-future.js`,

    // http
    `${nodeModules}/axios/dist/axios.js`,

    // vue framework
    `${nodeModules}/vue/dist/vue.min.js`, // core
    `${nodeModules}/vuex/dist/vuex.min.js`, // immutable (flux, redux pattern)
    `${nodeModules}/vee-validate/dist/vee-validate.min.js`, // form validate
    `${nodeModules}/vue-router/dist/vue-router.min.js`, // router,

    // alertify (used by insales)
    `${nodeModules}/alertifyjs/build/alertify.min.js`
  ],
  /**
   * @deprecated не будет использоваться
   */
  material: [
    `${nodeModules}/jquery/dist/jquery.min.js`,
    `${nodeModules}/lodash/lodash.min.js`,
    `${nodeModules}/picturefill/dist/picturefill.min.js`,
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,
    `${nodeModules}/swiper/dist/js/swiper.min.js`,
    `${nodeModules}/swiper/dist/js/swiper.jquery.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,
    `${nodeModules}/sweet-modal/dist/min/jquery.sweet-modal.min.js`,
    `${nodeModules}/sweet-dropdown/dist/min/jquery.sweet-dropdown.min.js`,
    `${nodeModules}/angular/angular.min.js`,
    `${nodeModules}/angular-aria/angular-aria.min.js`,
    `${nodeModules}/angular-animate/angular-animate.min.js`,
    `${nodeModules}/angular-sanitize/angular-sanitize.min.js`,
    `${nodeModules}/angular-messages/angular-messages.min.js`,
    `${nodeModules}/angular-material/angular-material.min.js`,
    `${nodeModules}/scrollup/dist/lib/jquery.easing.js`,
    `${nodeModules}/scrollup/dist/jquery.scrollUp.min.js`
  ],
  'material-slim': [
    `${nodeModules}/jquery/dist/jquery.slim.min.js`,
    `${nodeModules}/lodash/lodash.min.js`,
    `${nodeModules}/picturefill/dist/picturefill.min.js`,
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,
    `${nodeModules}/swiper/dist/js/swiper.min.js`,
    `${nodeModules}/swiper/dist/js/swiper.jquery.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,
    `${nodeModules}/sweet-modal/dist/min/jquery.sweet-modal.min.js`,
    `${nodeModules}/sweet-dropdown/dist/min/jquery.sweet-dropdown.min.js`,
    `${nodeModules}/angular/angular.min.js`,
    `${nodeModules}/angular-aria/angular-aria.min.js`,
    `${nodeModules}/angular-animate/angular-animate.min.js`,
    `${nodeModules}/angular-sanitize/angular-sanitize.min.js`,
    `${nodeModules}/angular-messages/angular-messages.min.js`,
    `${nodeModules}/angular-material/angular-material.min.js`
  ],
    /**
     * @note for diera.ru
     * bundle для работы с внешней библиотекой jquery
     * обычно это нужно для подключения нестандартной
     * версии jquery.
     * <jquery
     * <bundle-legacy
     */
    'material-legacy': [
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,
    `${nodeModules}/swiper/dist/js/swiper.min.js`,
    `${nodeModules}/swiper/dist/js/swiper.jquery.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,
    `${nodeModules}/angular/angular.min.js`,
    `${nodeModules}/angular-aria/angular-aria.min.js`,
    `${nodeModules}/angular-animate/angular-animate.min.js`,
    `${nodeModules}/angular-sanitize/angular-sanitize.min.js`,
    `${nodeModules}/angular-messages/angular-messages.min.js`,
    `${nodeModules}/angular-material/angular-material.min.js`
  ]
}

const styles = {
  'platform.vue.css': [ /* no styles required */ ],
  'platform.angular.css': [ /* no styles required */ ],
  'platform.material.css': [
    `${nodeModules}/angular-material/angular-material.min.css`
  ],
  'platform.media.css': [
    // @note for diera.ru можно просто скопировать в assets/platform/css/*
    // !!! PHOTOSWIPE & COLORBOX >>> REQUIRED IMAGES !!!
    // [!] required `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,
    // [!] required `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    // [!] required `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,

    `${nodeModules}/animate.css/animate.min.css`,
    `${nodeModules}/swiper/dist/css/swiper.min.css`,

    //`${nodeModules}/tether/dist/css/tether.min.css`,
    //`${nodeModules}/tether/dist/css/tether-theme-basic.min.css`,
    //`${nodeModules}/tether/dist/css/tether-theme-arrows.min.css`,
    //`${nodeModules}/tether/dist/css/tether-theme-arrows-dark.min.css`,
    //`${nodeModules}/tether-drop/dist/css/drop-theme-basic.min.css`,
    //`${nodeModules}/tether-drop/dist/css/drop-theme-arrows-bounce-dark.min.css`,
    //`${nodeModules}/tether-drop/dist/css/drop-theme-arrows-bounce.min.css`,
    //`${nodeModules}/tether-drop/dist/css/drop-theme-arrows.min.css`,
    //`${nodeModules}/tether-drop/dist/css/drop-theme-twipsy.min.css`,

    // `${nodeModules}/tether-drop/dist/css/drop-theme-arrows-bounce.min.css`,
    // `${nodeModules}/tether-drop/dist/css/drop-theme-twipsy.min.css`

    `${nodeModules}/sweet-modal/dist/min/jquery.sweet-modal.min.css`,
    `${nodeModules}/sweet-dropdown/dist/min/jquery.sweet-dropdown.min.css`,

    // ui
    `${nodeModules}/select2/dist/css/select2.min.css`,

    // toastr
    `${nodeModules}/toastr/build/toastr.min.css`,
    `${nodeModules}/messenger/build/css/messenger-spinner.css`,
    `${nodeModules}/messenger/build/css/messenger-theme-air.css`,
    `${nodeModules}/messenger/build/css/messenger-theme-block.css`,
    `${nodeModules}/messenger/build/css/messenger-theme-flat.css`,
    `${nodeModules}/messenger/build/css/messenger-theme-future.css`,
    `${nodeModules}/messenger/build/css/messenger-theme-ice.css`,
    `${nodeModules}/messenger/build/css/messenger.css`,

    // alertifyjs
    // @deprecated will be removed
    `${nodeModules}/alertifyjs/build/css/alertify.min.css`,
    `${nodeModules}/alertifyjs/build/css/themes/default.min.css`,
    `${nodeModules}/alertifyjs/build/css/themes/semantic.min.css`,

    // photoswipe
    `${nodeModules}/photoswipe/dist/photoswipe.css`,
    `${nodeModules}/photoswipe/dist/default-skin/default-skin.css`
  ],
  'platform.utils.css': [ /* no styles required */ ]
}

module.exports = {
  libs: libs,
  bundles: bundles,
  styles: styles,
}
