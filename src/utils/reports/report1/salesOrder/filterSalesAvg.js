export const filterSaleAvg = (element, dataReport, index) => {
  let newDataReport = dataReport;

  if (parseInt(element.newCreatedAt.substring(0, 2)) < 1) {
    return {
      data: (newDataReport[0].salesPerBill += element.final_price),
      index: 0,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 1) {
    return {
      data: (newDataReport[1].salesPerBill += element.final_price),
      index: 1,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 2) {
    return {
      data: (newDataReport[2].salesPerBill += element.final_price),
      index: 2,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 3) {
    return {
      data: (newDataReport[3].salesPerBill += element.final_price),
      index: 3,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 4) {
    return {
      data: (newDataReport[4].salesPerBill += element.final_price),
      index: 4,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 5) {
    return {
      data: (newDataReport[5].salesPerBill += element.final_price),
      index: 5,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 6) {
    return {
      data: (newDataReport[6].salesPerBill += element.final_price),
      index: 6,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 7) {
    return {
      data: (newDataReport[7].salesPerBill += element.final_price),
      index: 7,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 8) {
    return {
      data: (newDataReport[8].salesPerBill += element.final_price),
      index: 8,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 9) {
    return {
      data: (newDataReport[9].salesPerBill += element.final_price),
      index: 9,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 10) {
    return {
      data: (newDataReport[10].salesPerBill += element.final_price),
      index: 10,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 11) {
    return {
      data: (newDataReport[11].salesPerBill += element.final_price),
      index: 11,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 12) {
    return {
      data: (newDataReport[12].salesPerBill += element.final_price),
      index: 12,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 13) {
    return {
      data: (newDataReport[13].salesPerBill += element.final_price),
      index: 13,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 14) {
    return {
      data: (newDataReport[14].salesPerBill += element.final_price),
      index: 14,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 15) {
    return {
      data: (newDataReport[15].salesPerBill += element.final_price),
      index: 15,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 16) {
    return {
      data: (newDataReport[16].salesPerBill += element.final_price),
      index: 16,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 17) {
    return {
      data: (newDataReport[17].salesPerBill += element.final_price),
      index: 17,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 18) {
    return {
      data: (newDataReport[18].salesPerBill += element.final_price),
      index: 18,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 19) {
    return {
      data: (newDataReport[19].salesPerBill += element.final_price),
      index: 19,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 20) {
    return {
      data: (newDataReport[20].salesPerBill += element.final_price),
      index: 20,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 21) {
    return {
      data: (newDataReport[21].salesPerBill += element.final_price),
      index: 21,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) === 22) {
    return {
      data: (newDataReport[22].salesPerBill += element.final_price),
      index: 22,
    };
  }

  if (parseInt(element.newCreatedAt.substring(0, 2)) >= 23) {
    return {
      data: (newDataReport[23].salesPerBill += element.final_price),
      index: 23,
    };
  }
};
