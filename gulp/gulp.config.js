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
    `${nodeModules}/vee-validate/dist/locale/ru.js`,
    `${nodeModules}/vue-router/dist/vue-router.min.js`,
    `${nodeModules}/axios/dist/axios.min.js`
  ],
  'platform.media.js': [
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,
    `${nodeModules}/swiper/dist/js/swiper.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,
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
    // чат в zammad требует $.animation (этого нет в slim)
    // `${nodeModules}/jquery/dist/jquery.slim.min.js`,
    // полная версия
    `${nodeModules}/jquery/dist/jquery.min.js`,
    `${nodeModules}/lodash/lodash.min.js`,
    `${nodeModules}/picturefill/dist/picturefill.min.js`,
    `${nodeModules}/localforage/dist/localforage.min.js`
    //* `${nodeModules}/picturefill/dist/plugins/**/*.min.js`,
  ],
  'platform.3party.js': [
    `${nodeModules}/lodash/lodash.min.js`,
    `${nodeModules}/localforage/dist/localforage.min.js`
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
    // @deprected since 0.7.2
    // `${nodeModules}/lodash/lodash.min.js`,

    // cookies, localStorage etc
    // @deprecated since 0.7.2
    //`${nodeModules}/localforage/dist/localforage.min.js`,

    // http
    `${nodeModules}/axios/dist/axios.min.js`,

    // vue framework
    `${nodeModules}/vue/dist/vue.min.js`, // core
    `${nodeModules}/vuex/dist/vuex.min.js`, // immutable (flux, redux pattern)
    `${nodeModules}/vue-router/dist/vue-router.min.js`,
    `${nodeModules}/vee-validate/dist/vee-validate.min.js`, // form validate
    `${nodeModules}/vee-validate/dist/locale/ru.js`
  ],
  /**
   * "full" static platform build
   */
  vue: [
    // DOM, jQuery
    `${nodeModules}/jquery/dist/jquery.min.js`,
    `${nodeModules}/jquery.cookie/jquery.cookie.js`,

    //  utils
    // @deprecated
    // `${nodeModules}/lodash/lodash.min.js`,

    // cookies, localStorage etc
    // @deprected use lokijs
    // @deprecated since 0.7.2
    // `${nodeModules}/localforage/dist/localforage.min.js`,

    // picture polyfill
    // @deprecated since 0.7.2
    // `${nodeModules}/picturefill/dist/picturefill.min.js`,

    // overlay, modal, gallery
    `${nodeModules}/jquery-colorbox/jquery.colorbox-min.js`,

    // slider
    `${nodeModules}/swiper/dist/js/swiper.min.js`,

    // gallery
    `${nodeModules}/photoswipe/dist/photoswipe.min.js`,
    `${nodeModules}/photoswipe/dist/photoswipe-ui-default.min.js`,

    // pro* animations
    // @deprecated will remove
    `${nodeModules}/gsap/src/minified/TweenMax.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/CSSPlugin.min.js`,
    `${nodeModules}/gsap/src/minified/plugins/ScrollToPlugin.min.js`,

    // animations
    `${nodeModules}/scrollmagic/scrollmagic/minified/ScrollMagic.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js`,
    `${nodeModules}/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js`,

    // dropdown, positions, modals

    // ui
    // @deprecated since 0.7.2
    // `${nodeModules}/select2/dist/js/select2.full.min.js`,

    // кнопка наверх
    `${nodeModules}/scrollup/dist/lib/jquery.easing.js`,
    `${nodeModules}/scrollup/dist/jquery.scrollUp.min.js`,

    // messenger
    // @deprecated since 0.7.2
    // `${nodeModules}/messenger/build/js/messenger.min.js`,
    // `${nodeModules}/messenger/build/js/messenger-theme-flat.js`,
    // `${nodeModules}/messenger/build/js/messenger-theme-future.js`,

    // http
    `${nodeModules}/axios/dist/axios.min.js`,

    // vue framework
    `${nodeModules}/vue/dist/vue.min.js`, // core
    `${nodeModules}/vuex/dist/vuex.min.js`, // immutable (flux, redux pattern)
    `${nodeModules}/vee-validate/dist/vee-validate.min.js`, // form validate
    `${nodeModules}/vee-validate/dist/locale/ru.js`,
    `${nodeModules}/vue-router/dist/vue-router.min.js`, // router

    // alertify (used by insales)
    `${nodeModules}/alertifyjs/build/alertify.min.js`
  ]
}

const styles = {
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

    // ui
    // @deprecated since 0.7.2
    // `${nodeModules}/select2/dist/css/select2.min.css`,

    // toastr
    `${nodeModules}/toastr/build/toastr.min.css`,

    // @deprecated since 0.7.2
    // `${nodeModules}/messenger/build/css/messenger-spinner.css`,
    // `${nodeModules}/messenger/build/css/messenger-theme-air.css`,
    // `${nodeModules}/messenger/build/css/messenger-theme-block.css`,
    // `${nodeModules}/messenger/build/css/messenger-theme-flat.css`,
    // `${nodeModules}/messenger/build/css/messenger-theme-future.css`,
    // `${nodeModules}/messenger/build/css/messenger-theme-ice.css`,
    // `${nodeModules}/messenger/build/css/messenger.css`,

    // alertifyjs
    `${nodeModules}/alertifyjs/build/css/alertify.min.css`,
    `${nodeModules}/alertifyjs/build/css/themes/default.min.css`,

    // photoswipe
    `${nodeModules}/photoswipe/dist/photoswipe.css`,
    `${nodeModules}/photoswipe/dist/default-skin/default-skin.css`
  ]
}

module.exports = {
  libs: libs,
  bundles: bundles,
  styles: styles
}
