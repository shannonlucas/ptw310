"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[917],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(t),h=a,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5565:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"checkpoint",title:"Checkpoint",sidebar_position:10,sidebar_label:"Checkpoint",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},s=void 0,d={unversionedId:"scene-setup/checkpoint",id:"scene-setup/checkpoint",title:"Checkpoint",description:"Below you will find all the code you've assembled up to this point in the tutorial. Comments have been added to the JavaScript code to reinforce what each section of code does.",source:"@site/docs/scene-setup/checkpoint.mdx",sourceDirName:"scene-setup",slug:"/scene-setup/checkpoint",permalink:"/ccodetut3js/scene-setup/checkpoint",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"checkpoint",title:"Checkpoint",sidebar_position:10,sidebar_label:"Checkpoint",keywords:["creative coding","graphics","javascript","three.js","3D","tutorial"]},sidebar:"tutorialSidebar",previous:{title:"Postscript",permalink:"/ccodetut3js/scene-setup/postscript"},next:{title:"Adding objects",permalink:"/ccodetut3js/adding-objects/"}},l={},p=[{value:"JavaScript",id:"javascript",level:2},{value:"HTML",id:"html",level:2},{value:"CSS",id:"css",level:2}],m={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below you will find all the code you've assembled up to this point in the tutorial. Comments have been added to the JavaScript code to reinforce what each section of code does."),(0,i.kt)("p",null,"If you spent some time experimenting, you can copy and paste the code here to return things to where they should be for the next tutorial module."),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/* For this tutorial, three.js version 0.137.5 is used. */\nimport * as THREE from 'https://cdn.skypack.dev/three@v0.137.5';\n\n/**\n * Add lights to the given scene.\n * \n * @param {THREE.Scene} scene \n */\nfunction setUpLights(scene) {\n  const light1 = new THREE.PointLight(\"#ea00d9\"); // magenta\n  light1.position.set(8, 3, 4);\n  scene.add(light1);\n\n  const light2 = new THREE.PointLight(\"#0abdc6\"); // cyan\n  light2.position.set(-6, 0, 2);\n  scene.add(light2);\n}\n\n/**\n * Create a perspective camera that looks at the center of the scene.\n * \n * @returns {THREE.Camera}\n */\nfunction setUpCamera() {\n  const aspectRatio = window.innerWidth / window.innerHeight;\n  const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);\n  camera.lookAt(0, 0, 0);\n\n  return camera;\n}\n\n/**\n * Create a renderer and attach it to the HTML canvas element with the provided \n * ID.\n *\n * @param {string} elementId\n * @returns {THREE.WebGLRenderer} the newly created renderer\n */\nfunction setUpRenderer(elementId) {\n  const canvas = document.querySelector(elementId);\n  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });\n\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.setPixelRatio(window.devicePixelRatio);\n\n  return renderer;\n}\n\n/**\n * Setup the graphics to draw the art to.\n * \n * @param {string} elementId the ID of the HTML <canvas> element to render the\n *        graphics to.\n * @returns {object} an object containing the following properties:\n *                     * renderer - the newly created renderer\n *                     * camera - the newly created camera\n *                     * scene - the newly created scene\n */\nfunction setUpGraphics(elementId) {\n  const renderer = setUpRenderer(elementId);\n  const camera = setUpCamera();\n  const scene = new THREE.Scene();\n  setUpLights(scene);\n\n  // If the browser window gets resized, the camera and renderer have to be\n  // updated. This block of code handles that.\n  window.addEventListener('resize', () => {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n\n    renderer.setSize(window.innerWidth, window.innerHeight);\n  });\n\n  return { renderer, camera, scene };\n}\n\nconst { renderer, camera, scene } = setUpGraphics('#creative-code');\n\n// How many milliseconds to wait between drawing each frame. Divide one second\n// (1000 milliseconds) by the target frame rate of 60 frames per second.\nconst MILLISECONDS_PER_FRAME = 1000 / 60;\n\n// To control the speed of the animation, the time between frames is tracked.\n// This is initially set to zero since no frame has been rendered yet.\nlet lastFrameTime = 0;\n\n/**\n * Animates the scene.\n * \n * This function is called every time computer refreshes its display. The\n * refresh rate will vary from one computer to another and may even vary on the\n * same computer.\n * \n * To make the animation consistent from one computer to another, the function\n * only updates the animation at a set interval.\n * \n * @param {number} animationTime - the amount of time, in milliseconds, since\n *        the animation started.\n */\nfunction animate(animationTime) {\n  const elapsedTime = animationTime - lastFrameTime;\n\n  if (elapsedTime >= MILLISECONDS_PER_FRAME) {\n    update();\n    renderer.render(scene, camera);\n    lastFrameTime = animationTime;\n  }\n}\n\n// Start the animation loop\nrenderer.setAnimationLoop(animate);\n\n/**\n * Contains the code to handle updating a specific project's animation.\n */\nfunction update() {\n  // Your project's animation code will go here.\n}\n")),(0,i.kt)("h2",{id:"html"},"HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" \n          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">\n    <title>Creative coding with three.js</title>\n    <link rel="stylesheet" type="text/css" href="./style.css" />\n    <script type="module" src="./index.js"><\/script>\n  </head>\n\n  <body>\n    <canvas id="creative-code" class="three"></canvas>\n  </body>\n\n</html>\n')),(0,i.kt)("h2",{id:"css"},"CSS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  background-color: #202;\n  color: #fff;\n  overflow: hidden;\n}\n\n.three {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n}\n")))}h.isMDXComponent=!0}}]);