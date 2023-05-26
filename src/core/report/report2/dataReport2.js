export const dataReport2 = (dayOfWeek) => {
  let newData = [];

  if (dayOfWeek === 0) {
    newData = [
      {
        title1: "Sun",
        title2: "Mon",
        title3: "Tue",
        title4: "Wen",
        title5: "Thu",
        title6: "Fri",
        title7: "Sat",
      },
    ];
  }

  if (dayOfWeek === 1) {
    newData = [
      {
        title1: "Mon",
        title2: "Tue",
        title3: "Wen",
        title4: "Thu",
        title5: "Fri",
        title6: "Sat",
        title7: "Sun",
      },
    ];
  }

  if (dayOfWeek === 2) {
    newData = [
      {
        title1: "Tue",
        title2: "Wen",
        title3: "Thu",
        title4: "Fri",
        title5: "Sat",
        title6: "Sun",
        title7: "Mon",
      },
    ];
  }

  if (dayOfWeek === 3) {
    newData = [
      {
        title1: "Wen",
        title2: "Thu",
        title3: "Fri",
        title4: "Sat",
        title5: "Sun",
        title6: "Mon",
        title7: "Tue",
      },
    ];
  }

  if (dayOfWeek === 4) {
    newData = [
      {
        title1: "Thu",
        title2: "Fri",
        title3: "Sat",
        title4: "Sun",
        title5: "Mon",
        title6: "Tue",
        title7: "Wen",
      },
    ];
  }

  if (dayOfWeek === 5) {
    newData = [
      {
        title1: "Fri",
        title2: "Sat",
        title3: "Sun",
        title4: "Mon",
        title5: "Tue",
        title6: "Wen",
        title7: "Thu",
      },
    ];
  }

  if (dayOfWeek === 6) {
    newData = [
      {
        title1: "Sat",
        title2: "Sun",
        title3: "Mon",
        title4: "Tue",
        title5: "Wen",
        title6: "Thu",
        title7: "Fri",
      },
    ];
  }

  return newData;
};
