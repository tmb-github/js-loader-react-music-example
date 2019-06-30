/*!
 loader.module.js - v2.0.1

 Copyright (c) 2018-2019 Thomas M. Brodhead <https://bmt-systems.com>
 Released under the MIT license

 Date: 2019-06-27
*/

/*
This is a sample loader.module.js specific to this site.
It is the only JavaScript file you need to edit.
Begin by importing the default object from o.enqueue.module.js
Then use the o.enqueue method to specify the JavaScript file necessary for your site.
Then call the run() method to append the scripts synchronously; run() waits for each 
to load before the next is appended.
*/

import o from './enqueue.module.js';

let babelDataPlugins;
let jsxModuleArray;
let type;

// enqueue React:
type = 'development';
if (type === 'production') {
	o.enqueue({src: 'https://unpkg.com/react@16/umd/react.production.min.js', crossOrigin: 'anonymous'});
	o.enqueue({src: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js', crossOrigin: 'anonymous'});
} else if (type === 'development') {
	o.enqueue({src: 'https://unpkg.com/react@16/umd/react.development.js', crossOrigin: 'anonymous'});
	o.enqueue({src: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js', crossOrigin: 'anonymous'});
}

// enqueue Redux:
o.enqueue({src: 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js', crossOrigin: 'anonymous'});
o.enqueue({src: 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/6.0.0/react-redux.min.js', crossOrigin: 'anonymous'});

// enqueue Babel:
o.enqueue({src: 'https://unpkg.com/babel-standalone@6/babel.min.js'});

// babelKludgeFix assumes no SCRIPT elements are in the HEAD at the start of this routine:
// It also must come first after babel-standalone is loaded:
o.enqueue({src: 'javascript/babelKludgeFix.js'});

// enqueue the JSX files:

// transform-es2015-modules-umd is needed for exports;
// transform-class-properties is needed for arrow functions;
// syntax-object-rest-spread is needed for ... operator in objects:

babelDataPlugins = "transform-es2015-modules-umd, syntax-object-rest-spread, transform-class-properties";

jsxModuleArray = [
	'javascript/actions/index.jsx',
	'javascript/components/MusicList.jsx',
	'javascript/components/MusicDetail.jsx',
	'javascript/components/App.jsx',
	'javascript/reducers/index.jsx',
	'javascript/index.jsx'
];

jsxModuleArray.forEach(function (script) {
	o.enqueue({
		src: script,
		type: 'text/babel',
		dataPlugins: babelDataPlugins
	});
});

o.enqueue({src: 'javascript/deleteScripts.js'});

// Run the scripts:
o.run();
