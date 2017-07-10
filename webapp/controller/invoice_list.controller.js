sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
    'use strict';

    return Controller.extend('sap.ui.demo.wt.controller.invoice_list', {

        onInit: function() {
            var oModel = new JSONModel({
                currency: "AUD"
            });
            this.getView().setModel(oModel, 'view');
        }
    });
});