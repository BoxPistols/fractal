'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require('@frctl/fractal').create());

/* Set the title of the project */
fractal.set('project.title', 'Design System CA');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Mickey Mouse');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/public');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

// fractal.components.set('ext', '.handlebars');
// fractal.docs.set('ext', '.html');

// browsersync設定
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', { open: false }); // Auto Open
// react open :
// "start:parcel": "parcel ./jsx/index.html -p 4649 --open -d react",
// http://localhost:4649/

// Staus
fractal.components.set('default.status', 'wip'); // default is 'ready'

// Theme
// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    nav: ['docs', 'search', 'components', 'information'],
    //skin: 'theme-name',
    styles: ['', '/css/theme/style.css', ''],
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css',
    labels: {
        search: {
            placeholder: 'Search...',
        },
    },
    // favicon: '/theme/img/favicon.png',
    //panels: ['html', 'view', 'context', 'notes', 'info'],
});

// myCustomisedTheme.addLoadPath(__dirname + '/src/theme-overrides')
fractal.web.theme(myCustomisedTheme);

/* Global Dummy Texts */
fractal.set('dummy.title', '春風や惟然いねんが耳に馬の鈴');
fractal.set(
    'dummy.text',
    'ゴーシュは町の活動写真館でセロを弾く係りでした。けれどもあんまり上手でないという評判でした。上手でないどころではなく実は仲間の楽手のなかではいちばん下手でし' +
        'たから、いつでも楽長にいじめられるのでした。'
);
