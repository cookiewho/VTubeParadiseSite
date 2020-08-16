Html Webpack Plugin:
<pre>
  Error: C:\Users\dinkw\Desktop\VsCode\VTubeParadiseSite/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:93
    var style = document.createElement('style');
                ^
  ReferenceError: document is not defined
  
  - injectStylesIntoStyleTag.js?:93 insertStyleElement
    [.]/[style-loader]/dist/runtime/injectStylesIntoStyleTag.js?:93:15
  
  - injectStylesIntoStyleTag.js?:208 addStyle
    [.]/[style-loader]/dist/runtime/injectStylesIntoStyleTag.js?:208:13
  
  - injectStylesIntoStyleTag.js?:81 modulesToDom
    [.]/[style-loader]/dist/runtime/injectStylesIntoStyleTag.js?:81:18
  
  - injectStylesIntoStyleTag.js?:239 module.exports
    [.]/[style-loader]/dist/runtime/injectStylesIntoStyleTag.js?:239:25
  
  - index.css?:15 eval
    C:\Users\dinkw\Desktop\VsCode\VTubeParadiseSite/src/index.css?:15:14
  
  - index.js:653 Object../src/index.css
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:653:1
  
  - index.js:21 __webpack_require__
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:21:30
  
  - loader.js:6 eval
    [index.js?.]/[html-webpack-plugin]/lib/loader.js:6:68
  
  - index.js:206 Module../node_modules/html-webpack-plugin/lib/loader.js!./src/index.js
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:206:1
  
  - index.js:21 __webpack_require__
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:21:30
  
</pre>