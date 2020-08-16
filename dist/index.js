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
  
  - App.css?:15 eval
    C:\Users\dinkw\Desktop\VsCode\VTubeParadiseSite/src/App.css?:15:14
  
  - index.js:8888 Object../src/App.css
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:8888:1
  
  - index.js:21 __webpack_require__
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:21:30
  
  - App.js?:4 eval
    C:\Users\dinkw\Desktop\VsCode\VTubeParadiseSite/src/App.js?:4:66
  
  - index.js:8900 Module../src/App.js
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:8900:1
  
  - index.js:21 __webpack_require__
    C:/Users/dinkw/Desktop/VsCode/VTubeParadiseSite/src/index.js:21:30
  
</pre>