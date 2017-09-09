sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/demo/wt/model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
    'use strict';

    return Controller.extend('sap.ui.demo.wt.controller.invoice_list', {

        formatter: formatter,

        onFilterInvoices: function (oEvent) {
            var aFilter = [];
            var sQuery = oEvent.getParameter('query');
            if (sQuery) {
                aFilter.push(new Filter('ProductName', FilterOperator.Contains, sQuery));
            }
            var oList = this.getView().byId('invoiceList');
            var oBinding = oList.getBinding('items');
            oBinding.filter(aFilter);
        },

        onInit: function() {
            var oModel = new JSONModel({
                currency: "AUD"
            });
            this.getView().setModel(oModel, 'view');
        },

        onPress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo('detail');
        }
    });
});