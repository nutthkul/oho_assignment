import reportApi from "@/api/report/";

import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

export const calStep2 = async (date) => {
  let returnValue = [];
  if (date) {
    const newDateStart = dayjs(date[0].$d)
      .startOf("month")
      .format("YYYY-MM-DD");
    const newDateEnd = dayjs(date[1].$d).endOf("month").format("YYYY-MM-DD");
    const companyId = localStorage.getItem("companyId");
    const companyBranchId = localStorage.getItem("companyBranchId");

    const responseSearch = await reportApi.product.searchPdByDate(
      {
        dateStart: newDateStart,
        dateEnd: newDateEnd,
      },
      {
        companyId: companyId,
        companyBranchId: companyBranchId,
      }
    );

    if (responseSearch.response_status === "SUCCESS") {
      returnValue = { response_status: "SUCCESS", data: responseSearch.data };
    } else {
      returnValue = { response_status: "ERROR", data: [] };
    }
  }

  return returnValue;
};

export const calStep2BySales = async (date) => {
  let returnValueSales = [];
  if (date) {
    const newDateStart = dayjs(date[0].$d)
      .startOf("month")
      .format("YYYY-MM-DD");
    const newDateEnd = dayjs(date[1].$d).endOf("month").format("YYYY-MM-DD");
    const companyId = localStorage.getItem("companyId");
    const companyBranchId = localStorage.getItem("companyBranchId");

    const responseSearch = await reportApi.sale.searchByDate(
      {
        dateStart: newDateStart,
        dateEnd: newDateEnd,
      },
      {
        companyId: companyId,
        companyBranchId: companyBranchId,
      }
    );

    if (responseSearch.response_status === "SUCCESS") {
      returnValueSales = {
        response_status: "SUCCESS",
        data: responseSearch.data,
      };
    } else {
      returnValueSales = { response_status: "ERROR", data: [] };
    }
  }

  return returnValueSales;
};
