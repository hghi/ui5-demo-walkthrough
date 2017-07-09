sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.app", {

       onShowHello: function() {
           alert("Hello World from Controller");
       }
   });
});