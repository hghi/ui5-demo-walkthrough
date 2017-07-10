sap.ui.define([
   'sap/ui/base/Object'
], function(UI5Object) {
    'use strict';

    return UI5Object.extend('sap.ui.demo.wt.controller.hello_dialog', {
        constructor: function(oView) {
            this._oView = oView;
        },

        open: function() {
            var oView = this._oView;
            var oDialog = oView.byId('helloDialog');
            if (!oDialog) {
                var oFragmentController = {
                    onCloseDialog: function() {
                        oDialog.close();
                    }
                }
                oDialog = sap.ui.xmlfragment(oView.getId(), 'sap.ui.demo.wt.view.hello_dialog', oFragmentController);
                oView.addDependent(oDialog);
            }
            oDialog.open();
        }
    });
});