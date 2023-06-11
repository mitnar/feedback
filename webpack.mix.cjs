let mix = require('laravel-mix');

mix.js('resources/js/index.jsx', 'public/js').react()
.css('resources/css/app.css', 'public/css')
