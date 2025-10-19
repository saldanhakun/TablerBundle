var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/bundles/tabler/')

    // make sure the manifest prefix matches the structure in the real application
    .setManifestKeyPrefix('bundles/tabler/')

    // delete old files before creating them
    .cleanupOutputBeforeBuild()

    // add debug data in development
    .enableSourceMaps(!Encore.isProduction())

    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .addEntry('tabler-dist', './assets/tabler-dist.js')
    .addEntry('tabler-rtl', './assets/tabler-rtl.js')
    .addEntry('tabler-granular', './assets/tabler-granular.js')
    .addEntry('tabler-full', './assets/tabler-full.js')
    .addEntry('demo', './assets/demo.js')
    .addEntry('crud-list', './assets/crud-list.js')
    .addEntry('crud-form', './assets/crud-form.js')
    .addEntry('font-awesome', './assets/includes/font-awesome.js')

    // disabled as ""webpack-notifier": "^1.13"" id currently not compatible with ARM systems
    //.enableBuildNotifications()

    // don't use a runtime.js
    .disableSingleRuntimeChunk()

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // enable sass/scss parser
    // see https://symfony.com/doc/current/frontend/encore/bootstrap.html
    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: false
    })

    // add hash after file name
    .configureImageRule({
        filename: 'images/[name].[hash:8][ext]',
    })
    .configureFontRule({
        filename: 'fonts/[name].[hash:8][ext]'
    })
    .configureFilenames({
        js: '[name].[chunkhash].js',
        css: '[name].[contenthash].css',
    })
;

module.exports = Encore.getWebpackConfig();
