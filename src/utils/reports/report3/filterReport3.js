let dataProduct = [];
let dataSales = [];
let dataPos = [];

let pdBestSellerByDate = [];
let newPd = [];

export const filterReport3 = async (pdItem, saleItem) => {
  pdBestSellerByDate = [];
  newPd = [];

  dataProduct = pdItem;
  dataSales = saleItem[0];
  dataPos = saleItem[1];

  await bestSellerByDate();
  // await bestPosSellerByDate();

  return { newPd, pdBestSellerByDate };
};

const bestSellerByDate = async () => {
  dataSales.forEach(async (element) => {
    await element.salesOrderItems.forEach((element2) => {
      pdBestSellerByDate.push({
        product_id: element2.productId,
        product_code: element2.product.product_code,
        product_name: element2.product.product_name,
        item_price: element2.product.product_retail_price,
        item_amt: element2.item_amt,
        product_code: element2.product.product_code,
        total: element2.product.product_retail_price * element2.item_amt,
      });
    });
  });

  await dataPos.forEach((element) => {
    element.pointOfSaleItems.forEach((element2) => {
      pdBestSellerByDate.push({
        product_id: element2.productId,
        product_code: element2.product.product_code,
        product_name: element2.product.product_name,
        item_price: element2.product.item_promo_price
          ? element2.product.item_promo_price
          : element2.product.product_retail_price,
        item_amt: element2.item_amt,
        product_code: element2.product.product_code,
        total: element2.product.item_promo_price
          ? element2.product.item_promo_price * element2.item_amt
          : element2.product.product_retail_price * element2.item_amt,
      });
    });
  });

  await findDupPd();
  await bestSeller();
};

const findDupPd = async () => {
  // find duplicate

  const dup = pdBestSellerByDate.reduce((a, e) => {
    a[e.product_id] = ++a[e.product_id] || 0;
    return a;
  }, {});

  for (const [key, value] of Object.entries(dup)) {
    const newDup = pdBestSellerByDate.filter(
      (e) => e.product_id === parseInt(key)
    );

    await groupNewPdDup(newDup);
  }
  // find duplicate
};

const groupNewPdDup = async (newDup) => {
  let sumAmt = 0;
  let sumTotal = 0;

  newDup.forEach((element) => {
    sumAmt += element.item_amt;
    sumTotal += element.total;
  });

  if (newDup.length > 0) {
    const newData = {
      product_id: newDup[0].product_id,
      product_code: newDup[0].product_code,
      product_name: newDup[0].product_name,
      item_price: newDup[0].item_price,
      item_amt: sumAmt,
      total: sumTotal,
    };

    groupNewPd(newData);
  }
};

const groupNewPd = async (newDup) => {
  let filterArr = pdBestSellerByDate.filter(
    (data) => data.product_id !== newDup.product_id
  );

  filterArr = [...filterArr, newDup];

  pdBestSellerByDate = filterArr;
};

const bestSeller = async () => {
  dataProduct.forEach((element) => {
    newPd.push({
      product_id: element.id,
      product_code: element.product_code,
      product_name: element.product_name,
      item_price: 0,
      item_amt: 0,
      total: 0,
    });
  });
};
