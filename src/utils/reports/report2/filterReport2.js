import { clippingParents } from "@popperjs/core";

let mainProduct = [];
let newCate = [];

export const filterSalesByWeek = async (item, index, category, method) => {
  mainProduct = category;

  // await filterByIndexDayOfWeek(item, index - 1, method);
  await filterByIndexDayOfWeek(item, index, method);

  console.log(mainProduct, 777);

  return newCate;
};

// index by 7 day of week
const filterByIndexDayOfWeek = async (item, index, method) => {
  newCate = [];
  if (index === 0) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 1) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 2) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 3) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 4) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 5) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 6) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
  if (index === 7) {
    method
      ? await loopFilterDatePos(item, index)
      : await loopFilterDate(item, index);
  }
};

const loopFilterDate = async (item, indexDate) => {
  item.forEach((element) => {
    element.salesOrderItems.forEach((element2) => {
      const mainPD = element2.product.mainProductGroupId;
      console.log(mainPD, 99);
      mainProduct.forEach((element3) => {
        if (element3.id === mainPD) {
          newCate.push({
            ...element2,
            indexDate: indexDate,
            customerId: element.customer.id,
            orderId: "SAL" + element2.salesOrderId,
          });
        }
      });
    });
  });
};

const loopFilterDatePos = async (item, indexDate) => {
  item.forEach((element) => {
    element.pointOfSaleItems.forEach((element2) => {
      const mainPD = element2.product.mainProductGroupId;
      mainProduct.forEach((element3) => {
        if (element3.id === mainPD) {
          newCate.push({
            ...element2,
            indexDate: indexDate,
            item_total_before_vat: element2.item_promo_price
              ? element2.item_amt * element2.item_promo_price
              : element2.item_amt * element2.item_price,
            customerId: element.customer.id,
            orderId: "POS" + element2.pointOfSaleId,
          });
        }
      });
    });
  });
};
