import reportApi from "@/api/report/";

import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

export const calStep5 = async (date) => {
  let returnValue = [];
  if (date) {
    const day = moment(date[0].$d).format("YYYY-MM-DD");
    const month = "";
    const companyId = localStorage.getItem("companyId");
    const companyBranchId = localStorage.getItem("companyBranchId");

    const responseSearch = await reportApi.product.searchWhSnapshot(
      {
        day: day,
        month: month,
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
