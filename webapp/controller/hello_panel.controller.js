sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(Controller, MessageToast) {
   'use strict';

   return Controller.extend('sap.ui.demo.wt.controller.hello_panel', {
       onOpenDialog: function() {
         var oView = this.getView();
         var oDialog = oView.byId('helloDialog');
         if (!oDialog) {
             oDialog = sap.ui.xmlfragment(oView.getId(), 'sap.ui.demo.wt.view.hello_dialog');
             oView.addDependent(oDialog);
         }
         oDialog.open();
       },
       onShowHello: function() {
           var oBundle = this.getView().getModel('i18n').getResourceBundle();
           var sRecipient = this.getView().getModel().getProperty('/recipient/name');
           var sMsg = oBundle.getText('helloMsg', [sRecipient]);
           MessageToast.show(sMsg);
       }
   });
});