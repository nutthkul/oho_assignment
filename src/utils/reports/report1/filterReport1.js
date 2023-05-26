// import sales
import { filterCus } from "./salesOrder/filterCustomer";
import { filterPro } from "./salesOrder/filterProduct";
import { filterSaleSum } from "./salesOrder/filterSalesSummary";
import { filterSaleAvg } from "./salesOrder/filterSalesAvg";

// import pos
import { filterCusPos } from "./posOrder/filterCustomerPos";
import { filterProPos } from "./posOrder/filterProductPos";
import { filterSaleSumPos } from "./posOrder/filterSalesSummaryPos";
import { filterSaleAvgPos } from "./posOrder/filterSalesAvgPos";

let groupSales = [];
let groupPos = [];

export const filterTimeByHour = async (itemSales, dataReport, itemPos) => {
  if ((itemSales && dataReport) || (itemPos && dataReport)) {
    // const newDataSales = await handleArrSales(itemSales, dataReport);
    // const newDataPos = await handleArrPos(itemPos, dataReport);

    await handleArrSales(itemSales, dataReport);
    await handleArrPos(itemPos, dataReport);

    // console.log({ groupSales });
    // console.log({ groupPos });

    return groupPos;
  }
};

const handleArrSales = async (itemSales, dataReport) => {
  let newDataReportSales = dataReport;

  itemSales.forEach(async (element, index) => {
    // filter customer
    await filterCus(element, dataReport);

    // filter customer
    await filterPro(element, dataReport);

    // filter sales summary
    await filterSaleSum(element, dataReport);

    // filter sales AVG
    await filterSaleAvg(element, dataReport, index);
  });

  // return newDataReportSales;
  groupSales = newDataReportSales;
};

const handleArrPos = async (itemPos, dataReport) => {
  let newDataReportPos = dataReport;

  itemPos.forEach(async (element, index) => {
    // filter customer
    await filterCusPos(element, dataReport);

    // filter customer
    await filterProPos(element, dataReport);

    // filter sales summary
    await filterSaleSumPos(element, dataReport);

    // filter sales AVG
    await filterSaleAvgPos(element, dataReport, index);
  });

  // return newDataReportPos;
  groupPos = newDataReportPos;
};
