/* eslint-disable no-undef */

/*
🚀🚀🚀🚀Test Cases🚀🚀🚀🚀

📌 Clear the selected items and deals on deal type change Directship to any other deal type. 
   ✅ Done
📌 Clear the selected vendors grids and their corresponding deals into grid.
   - when user changes the deal tag.
   - If user initially opened Directship SD and then opens non-directship SD or vice-versa🌀.
    
     Compare Deal-Type v/s PS deal populated
    ✔ 🎃- Create a function which clears the PS deals grid grid["grdDealDetailsDeal"], vendor dropdown grid["gridVendorDealDetails"].
     🎃- Create a function which returns is re-rendering required.
     🎃- Create a function which checks, which PS deals are rendered.
    ✔ 🎃- Maintain a Deal-Details screen module level variable which check which PS deals are rendered "isDirectShipPSDealsRendered".
  
  
    1. Open PS Deal Details Screen
    2. Check which PS Deals are rendered.
    3. Check re-rendering is required or not


    Issues found
     ⛔ For Directship Deal, time pulses are getting Auto populates on deal type selection.





*/

/*
//To flush the PS deal grid["grdDealDetailsDeal"]
getUpdateSDDealDetails().createAndReloadDealDetailsGrid([]);
//To get selection
VistaarExtjs.getCmp("gridVendorDealDetails").getSelectionModel().getSelection()

//module variable in getUpdateSDDealDetails()
IsDirectShipPSDealsRendered

dic_Deal_Type_Code_Name_Mapp

//In multisalesdeal file
this.setIsDirectShipPSDealsRendered = function (p_DealTypeCode) {

    getUpdateSDDealDetails().IsDirectShipPSDealsRendered = p_flag;
}


this.setDirectShipDeal = function (p_SDObj, p_DealTypeCode) {
    try {
        if (dic_Deal_Type_Code_Name_Mapp != undefined) {

            if (dic_Deal_Type_Code_Name_Mapp[p_DealTypeCode] == "DIRECTSHIP") {
                if (p_SDObj.hasOwnProperty("Data")) {
                    if (p_SDObj["Data"]) {
                        p_SDObj["Data"]["IsDirectShipDeal"] = true;
                    }
                }
            } else {
                if (p_SDObj.hasOwnProperty("Data")) {
                    if (p_SDObj["Data"]) {
                        p_SDObj["Data"]["IsDirectShipDeal"] = false;
                    }
                }
            }
        }
    }
    catch (e) {
    }
}


this.resetPSDealDetailsGrid = function () {
    try {
        var l_reset = false;
        if (getUpdateSDDealDetails().IsDirectShipPSDealsRendered == undefined)
            return;

        if (getGlobalConstants().SD_DEAL_TYPE != "DIRECTSHIP" && getUpdateSDDealDetails().IsDirectShipPSDealsRendered == true) {
            l_reset = true;
        }
        if (getGlobalConstants().SD_DEAL_TYPE == "DIRECTSHIP" && getUpdateSDDealDetails().IsDirectShipPSDealsRendered == false) {
            l_reset = true;
        }

        if (l_reset) {
            if (getHelperFunctions().exists("gridVendorDealDetails")) {
                //To de-select all vendors in Vendor dropdown grid["gridVendorDealDetails"]
                VistaarExtjs.getCmp("gridVendorDealDetails").getSelectionModel().deselectAll();
            }
            //To trigger the ok click event on Vendor dropdown grid["gridVendorDealDetails"]
            Ext.getCmp('btnRefreshSDDealDetails').fireEvent('click');
        }
    }
    catch (e) {
        console.log(e);
    }
}



this.directShipDealTypeChangeHandler = function () {
    try {
        Ext.suspendLayouts();

        var dic_OriginalPricingGroup = {};
        var dic_PricingGroup = {};

        var str_SD_Counter = viewUnderFocus["SalesDealCounter"];
        var dataHandlerObject = salesDealCounterToDataHolderObjectMap[str_SD_Counter];
        var salesDealData = dataHandlerObject.getSalesDealDataObject();

        if (salesDealData.hasOwnProperty("Item")) {
            salesDealData["Item"] = [];
        }
        if (salesDealData.hasOwnProperty("DealLevel")) {
            salesDealData["DealLevel"] = [];
        }
        if (salesDealData.hasOwnProperty("GetItem")) {
            salesDealData["GetItem"] = [];
        }
        if (salesDealData.hasOwnProperty("GetDealLevel")) {
            salesDealData["GetDealLevel"] = [];
        }

        dataHandlerObject.setSalesDealDataObject(salesDealData);
        dic_OriginalPricingGroup = getDataHandlerManager().getPricingGroups();
        getMultiSalesDeal().loadHeaderData(null, salesDealCounter, "DealDetails");
        dic_PricingGroup = getDataHandlerManager().getPricingGroups();
        if (Object.keys(dic_PricingGroup).length != Object.keys(dic_OriginalPricingGroup).length) {
            getMultiSalesDeal().reloadSalesDeal(salesDealCounter, "All");
            getUpdateSalesDeal().setPGReloadFlag(true);
            if (Ext.getCmp("grdPricingGroupDetail") != undefined) {
                getUpdateSDItems().PrevGrdPGDetailData = Ext.pluck(Ext.getCmp("grdPricingGroupDetail").getStore().getData().items, "data");
                Ext.getCmp("grdPricingGroupDetail").getStore().loadData([], false);
            }
            Ext.getCmp('dataViewPreviousDeals').disable();
            Ext.getCmp('dataViewNextDeals').disable();
        }


        Ext.resumeLayouts(true);
        getMultiSalesDeal().setDealDefinitionPanelWidth();
    }
    catch (e) {
        console.log(e)
    }
}

*/
