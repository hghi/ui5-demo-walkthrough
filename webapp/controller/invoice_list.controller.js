sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/demo/wt/model/formatter'
], function(Controller, JSONModel, formatter) {
    'use strict';

    return Controller.extend('sap.ui.demo.wt.controller.invoice_list', {

        formatter: formatter,

        onInit: function() {
            var oModel = new JSONModel({
                currency: "AUD"
            });
            this.getView().setModel(oModel, 'view');
        }
    });
});