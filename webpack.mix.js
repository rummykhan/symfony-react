const {mix, config} = require('laravel-mix');

config.react = true;
config.publicPath = 'web';
config.hmr = false;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('app/Resources/assets/js/app.js', 'web/build')
  .sass('app/Resources/assets/css/app.scss', 'web/build');