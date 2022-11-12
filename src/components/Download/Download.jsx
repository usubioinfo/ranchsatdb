export const downloadCsv = (item) => {
    const csvPrefix = "data:text/csv;charset=utf-8,";
    var csvString = [];
    
      csvString = [
        [
          "Primer",
          "Forward Primer",
          "Forward Primer TM",
          "Forward Primer GC",
          "Reverse Primer",
          "Reverse Primer TM",
          "Reverse Primer GC",
          "Product Size"
        ],
        [
          "Primer1",  
          item.f1,
          item.f1tm,
          item.f1GC,
          item.r1,
          item.r1tm,
          item.r1GC,
          item.p1psize
          
        ],

        [
            "Primer2", 
            item.f2,
            item.f2tm,
            item.f2GC,
            item.r2,
            item.r2tm,
            item.r2GC,
            item.p2psize
            
          ],
          [
            "Primer3", 
            item.f3,
            item.f3tm,
            item.f3GC,
            item.r3,
            item.r3tm,
            item.r3GC,
            item.p3psize
            
          ],
      ]
        .map((e) => e.join(","))
        .join("\n");
       console.log(csvString);
      let csvData = csvPrefix + csvString;

      const encodedUri = encodeURI(csvData);
      // window.open(encodedUri);
    
      let link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "Primers_results.csv");
      document.body.appendChild(link);
    
      link.click();
    };