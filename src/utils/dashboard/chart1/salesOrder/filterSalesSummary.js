export const filterSaleSum = (element, dataReport) => {
  let newDataReport = dataReport;

  if (parseInt(element.newCreatedAt.substring(0, 2)) < 1) {
    return {
      data: (newDataReport[0].sales += element.final_price),
      index: 0,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 1) {
    return {
      data: (newDataReport[1].sales += element.final_price),
      index: 1,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 2) {
    return {
      data: (newDataReport[2].sales += element.final_price),
      index: 2,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 3) {
    return {
      data: (newDataReport[3].sales += element.final_price),
      index: 3,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 4) {
    return {
      data: (newDataReport[4].sales += element.final_price),
      index: 4,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 5) {
    return {
      data: (newDataReport[5].sales += element.final_price),
      index: 5,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 6) {
    return {
      data: (newDataReport[6].sales += element.final_price),
      index: 6,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 7) {
    return {
      data: (newDataReport[7].sales += element.final_price),
      index: 7,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 8) {
    return {
      data: (newDataReport[8].sales += element.final_price),
      index: 8,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 9) {
    return {
      data: (newDataReport[9].sales += element.final_price),
      index: 9,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 10) {
    return {
      data: (newDataReport[10].sales += element.final_price),
      index: 10,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 11) {
    return {
      data: (newDataReport[11].sales += element.final_price),
      index: 11,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 12) {
    return {
      data: (newDataReport[12].sales += element.final_price),
      index: 12,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 13) {
    return {
      data: (newDataReport[13].sales += element.final_price),
      index: 13,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 14) {
    return {
      data: (newDataReport[14].sales += element.final_price),
      index: 14,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 15) {
    return {
      data: (newDataReport[15].sales += element.final_price),
      index: 15,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 16) {
    return {
      data: (newDataReport[16].sales += element.final_price),
      index: 16,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 17) {
    return {
      data: (newDataReport[17].sales += element.final_price),
      index: 17,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 18) {
    return {
      data: (newDataReport[18].sales += element.final_price),
      index: 18,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 19) {
    return {
      data: (newDataReport[19].sales += element.final_price),
      index: 19,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 20) {
    return {
      data: (newDataReport[20].sales += element.final_price),
      index: 20,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 21) {
    return {
      data: (newDataReport[21].sales += element.final_price),
      index: 21,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 22) {
    return {
      data: (newDataReport[22].sales += element.final_price),
      index: 22,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) >= 23) {
    return {
      data: (newDataReport[23].sales += element.final_price),
      index: 23,
    };
  }
};
