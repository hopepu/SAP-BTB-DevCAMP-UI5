// sap.ui.define([], () => {
//     "use strict";
//     alert("UI5 is ready");
// })

// sap.ui.define([
//     "sap/m/Text"
// ], (Text) => {
//     "use strict";

//     new Text({
//         text: "Hello World"
//     }).placeAt("content");
// });

sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    // XMLnamespace : sap.ui.core.mvc 사용
], (XMLView) => {
    "use restrict";
    XMLView.create({
        viewName: "ui5.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));
});