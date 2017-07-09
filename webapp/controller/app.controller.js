sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.app", {

       onShowHello: function() {
           MessageToast.show("Hello World from Controller");
       }
   });
});