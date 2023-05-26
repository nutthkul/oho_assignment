import reportApi from "@/api/report/";
import whApi from "@/api/warehouse/";

import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

export const calStep3 = async (date) => {
  let returnValue = [];
  if (date) {
    const newDateStart = moment(date[0].$d).format("YYYY-MM-DD");
    const newDateEnd = moment(date[1].$d).add(1, "days").format("YYYY-MM-DD");
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
      returnValue = { response_status: "SUCCESS", data: responseSearch.data };
    } else {
      returnValue = { response_status: "ERROR", data: [] };
    }
  }

  return returnValue;
};

export const calStepOutOfStock = async (date) => {
  let returnValue = [];

  const newDateStart = moment(date[0].$d).format("YYYY-MM-DD");
  const newDateEnd = moment(date[1].$d).add(1, "days").format("YYYY-MM-DD");
  const companyId = localStorage.getItem("companyId");
  const companyBranchId = localStorage.getItem("companyBranchId");

  const responseSearch = await reportApi.product.searchPdByUpdate(
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

  return returnValue;
};
