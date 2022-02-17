---
sidebar_position: 1
---

# Setting up your code

Since this project will run in a web browser, you will need an HTML file to
provide a canvas to render graphics on, a style sheet to provide some
essential styling to that HTML, and a JavaScript file for the code that will
generate your graphics.

## HTML

This is the only HTML required for this tutorial. Copy and paste this code into
the HTML panel of your code playground.

Note the `<canvas>` element in the code below. This is the element that your
graphics will be rendered on. The `id` attribute with the value
`generative-demo` is how your JavaScript code will find the canvas.

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" 
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
    <title>Generative Art with three.js</title>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
  </head>

  <body>
    <canvas id="generative-demo" class="three"></canvas>
  </body>

</html>
```

The `<meta>` tag with the `name="viewport"` attribute ensures that the graphics
will render correctly on a mobile browser. This is useful if you want to view
your project on a phone or tablet.

:::important
The `<script>` tag that imports your JavaScript file has the attribute
`type="module"`. This **_must_** be present. The three.js library uses a
feature of modern JavaScript known as modules. Any JavaScript file that uses
three.js must be imported with this attribute.
:::

## CSS

This is the only CSS required for the tutorial. Copy and paste this code into
the CSS panel of your code playground.

Note the block that identifies the `.three` class in the CSS code below. The
styles in this block will be applied to the `<canvas>` element in the HTML code
and cause your graphics to fill the browser window.

```css
body {
  background-color: #202;
  color: #fff;
  overflow: hidden;
}

.three {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
```

## JavaScript

To get the JavaScript code started, you will need to import the three.js
library. The tree.js documentation recommends importing the library from the
SkyPack content delivery network (CDN). The code snippet below will import the
library from that source.

This import specifies the version that was in use when this tutorial was
written (0.137.5). By historical convention, three.js is imported with the name
`THREE`, and you will see it capitalized this way in other tutorials.

Copy and paste this code into the JavaScript panel of your code playground.

```javascript
import * as THREE from 'https://cdn.skypack.dev/three@v0.137.5';
```

:::caution
If you do not specify a version, the most recently released version will be
imported. Importing the latest and greatest might sound like a good idea, but
updates to three.js sometimes change things in ways that can break your project.
So whenever you import the library, you should specify the version you are
using.
:::

## Moving Forward

From this point forward, you will not need to edit the HTML or CSS. You may
make changes to them if you wish, but this tutorial assumes that you have not
modified the HTML or CSS.

Once you have copied these code blocks into their respective panels in your
code playground, click the "Run" button. The result panel should now be filled
with a dark purple color.