sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
], 

/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 * @param {typeof "logaligroup.SAPUI5.model.Models"} Models
 * @param {typeof "sap.ui.model.resource.ResourceModel"} ResourceModel
 */
function (Controller, MessageToast, Models, ResourceModel) {
    "use strict";

    return Controller.extend("logaligroup.SAPUI5.controller.App",{
        onInit:  function () {
            
            
        },
        onShowHello: function () { 
            
            //read text from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //read property from data model
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        }
    }); 

});