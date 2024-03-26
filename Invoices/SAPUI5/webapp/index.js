sap.ui.define([
    "sap/ui/core/ComponentContainer"
], 

/**
 * 
 * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "logaligroup.SAPUI5", //detecta el archivo Component.js automaticamente
        settings:{
            id:"SAPUI5"
        },
        async: true
    }).placeAt("content");

});