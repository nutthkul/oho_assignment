export const filterPro = (element, dataReport) => {
  let newDataReport = dataReport;

  let sumProduct = element.salesOrderItems.reduce(
    (sumAge, data) => sumAge + data.item_amt,
    0
  );

  if (parseInt(element.newCreatedAt.substring(0, 2)) < 1) {
    return { data: (newDataReport[0].productAmt += sumProduct), index: 0 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 1) {
    return { data: (newDataReport[1].productAmt += sumProduct), index: 1 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 2) {
    return { data: (newDataReport[2].productAmt += sumProduct), index: 2 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 3) {
    return { data: (newDataReport[3].productAmt += sumProduct), index: 3 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 4) {
    return { data: (newDataReport[4].productAmt += sumProduct), index: 4 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 5) {
    return { data: (newDataReport[5].productAmt += sumProduct), index: 5 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 6) {
    return { data: (newDataReport[6].productAmt += sumProduct), index: 6 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 7) {
    return { data: (newDataReport[7].productAmt += sumProduct), index: 7 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 8) {
    return { data: (newDataReport[8].productAmt += sumProduct), index: 8 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 9) {
    return { data: (newDataReport[9].productAmt += sumProduct), index: 9 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 10) {
    return { data: (newDataReport[10].productAmt += sumProduct), index: 10 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 11) {
    return { data: (newDataReport[11].productAmt += sumProduct), index: 11 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 12) {
    return { data: (newDataReport[12].productAmt += sumProduct), index: 12 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 13) {
    return { data: (newDataReport[13].productAmt += sumProduct), index: 13 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 14) {
    return { data: (newDataReport[14].productAmt += sumProduct), index: 14 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 15) {
    return { data: (newDataReport[15].productAmt += sumProduct), index: 15 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 16) {
    return { data: (newDataReport[16].productAmt += sumProduct), index: 16 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 17) {
    return { data: (newDataReport[17].productAmt += sumProduct), index: 17 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 18) {
    return { data: (newDataReport[18].productAmt += sumProduct), index: 18 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 19) {
    return { data: (newDataReport[19].productAmt += sumProduct), index: 19 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 20) {
    return { data: (newDataReport[20].productAmt += sumProduct), index: 20 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 21) {
    return { data: (newDataReport[21].productAmt += sumProduct), index: 21 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 22) {
    return { data: (newDataReport[22].productAmt += sumProduct), index: 22 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) >= 23) {
    return { data: (newDataReport[23].productAmt += sumProduct), index: 23 };
  }
};
