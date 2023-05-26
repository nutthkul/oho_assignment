import reportApi from "@/api/report/";

import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

export const calStep6 = async (date) => {
  let returnValue = [];
  if (date) {
    const day = moment(date.$d).subtract(1, "day").format("YYYY-MM-DD");
    const companyId = localStorage.getItem("companyId");
    const companyBranchId = localStorage.getItem("companyBranchId");

    const responseSearch = await reportApi.product.searchTwelveWhSnapshot(
      {
        day: day,
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
