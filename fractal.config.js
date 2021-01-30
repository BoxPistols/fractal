'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

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

// Theme
// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: 'black',
    // skin: {
    //     name: 'skin-A',
    //     accent: 'tomato',
    //     complement: 'teal',
    //     links: 'skyblue',
    // }
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css',
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);
