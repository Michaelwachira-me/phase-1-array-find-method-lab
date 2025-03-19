// code your solution here
function superbowlWin(records) {
    const winRecord = records.find(function (record) {
      return record.result === "W";
    });
  
    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }
  
  // Example Usage (for testing):
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(record)); // Output: 2015
  
  const noWinRecord = [
      {year: "2000", result: "L"},
      {year: "2001", result: "L"},
      {year: "2002", result: "L"}
  ];
  
  console.log(superbowlWin(noWinRecord)); //output: undefined