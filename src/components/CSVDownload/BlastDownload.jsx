// This is going to be a general template for downloading as CSV.

export const downloadBlast = (data) => {
    const csvPrefix = "data:text/csv;charset=utf-8,";
    var csvString = [];
   
      csvString = [
        [
          'qseqid', 'sseqid', 'pident', 'length', 'mismatch', 'gapopen', 'qstart', 'qend', 'sstart', 'send', 'evalue', 'bitscore'
        ],
        ...data.map((item) => [
          item.qseqid,
          item.sseqid,
          item.pident,
          item.length,
          item.mismatch,
          item.gapopen,
          item.qstart,
          item.qend,
          item.sstart,
          item.send,
          item.evalue,
          item.bitscore
          
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
    link.setAttribute("download", "Blast.csv");
    document.body.appendChild(link);
  
    link.click();
  };