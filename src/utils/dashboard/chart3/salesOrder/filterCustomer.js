export const filterCus = (element, dataReport) => {
  let newDataReport = dataReport;

  if (parseInt(element.newCreatedAt.substring(0, 2)) < 1) {
    return { data: (newDataReport[0].customerAmt += 1), index: 0 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 1) {
    return { data: (newDataReport[1].customerAmt += 1), index: 1 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 2) {
    return { data: (newDataReport[2].customerAmt += 1), index: 2 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 3) {
    return { data: (newDataReport[3].customerAmt += 1), index: 3 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 4) {
    return { data: (newDataReport[4].customerAmt += 1), index: 4 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 5) {
    return { data: (newDataReport[5].customerAmt += 1), index: 5 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 6) {
    return { data: (newDataReport[6].customerAmt += 1), index: 6 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 7) {
    return { data: (newDataReport[7].customerAmt += 1), index: 7 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 8) {
    return { data: (newDataReport[8].customerAmt += 1), index: 8 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 9) {
    return { data: (newDataReport[9].customerAmt += 1), index: 9 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 10) {
    return { data: (newDataReport[10].customerAmt += 1), index: 10 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 11) {
    return { data: (newDataReport[11].customerAmt += 1), index: 11 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 12) {
    return { data: (newDataReport[12].customerAmt += 1), index: 12 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 13) {
    return { data: (newDataReport[13].customerAmt += 1), index: 13 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 14) {
    return { data: (newDataReport[14].customerAmt += 1), index: 14 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 15) {
    return { data: (newDataReport[15].customerAmt += 1), index: 15 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 16) {
    return { data: (newDataReport[16].customerAmt += 1), index: 16 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 17) {
    return { data: (newDataReport[17].customerAmt += 1), index: 17 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 18) {
    return { data: (newDataReport[18].customerAmt += 1), index: 18 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 19) {
    return { data: (newDataReport[19].customerAmt += 1), index: 19 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 20) {
    return { data: (newDataReport[20].customerAmt += 1), index: 20 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 21) {
    return { data: (newDataReport[21].customerAmt += 1), index: 21 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 22) {
    return { data: (newDataReport[22].customerAmt += 1), index: 22 };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) >= 23) {
    return { data: (newDataReport[23].customerAmt += 1), index: 23 };
  }
};
