sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/demo/wt/controller/hello_dialog',
    'sap/ui/Device'
], function(UIComponent, JSONModel, hello_dialog, Device) {
    'use strict';

    return UIComponent.extend('sap.ui.demo.wt.Component', {
        metadata: {
            manifest: 'json'
        },

        init: function() {

            UIComponent.prototype.init.apply(this, arguments);

            var oData = {
                recipient: {
                    name: 'World'
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode('OneWay');
            this.setModel(oDeviceModel, 'device');

            this._hello_dialog = new hello_dialog(this.getRootControl());
            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        getContentDensityClass : function() {
            if (!this._sContentDensityClass) {
                if (!sap.ui.Device.support.touch) {
                    this._sContentDensityClass = 'sapUiSizeCompact';
                } else {
                    this._sContentDensityClass = 'sapUiSizeCozy';
                }
            }
            return this._sContentDensityClass;
        },

        openHelloDialog: function() {
            this._hello_dialog.open();
        }
    });
});