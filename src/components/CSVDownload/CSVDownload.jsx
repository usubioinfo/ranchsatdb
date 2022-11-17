// This is going to be a general template for downloading as CSV.

export const downloadCsv = (data) => {
    const csvPrefix = "data:text/csv;charset=utf-8,";
    var csvString = [];
   
      csvString = [
        [
          'Sequence ID',
          'Sequence Length',
          'Motif Type',
          'Motif',
          'Start',
          'End',
          'Motif Length'
        ],
        ...data.map((item) => [
          item.ID,
          item.Seq_length,
          item.SSR_type,
          item.SSR,
          item.Start,
          item.End,
          item.Size,
          
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");
      //  console.log(csvString);
    

    let csvData = csvPrefix + csvString;
  
    const encodedUri = encodeURI(csvData);
    // window.open(encodedUri);
  
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
  
    link.click();
  };