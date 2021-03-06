var html = `<div>
      <div>
         <br/>
      </div>
      <table style="border-collapse: collapse; min-width: 100%;">
         <colgroup>
            <col style="width: 130px;" />
            <col style="width: 130px;" />
         </colgroup>
         <tbody>
            <tr>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>Name</div>
               </td>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>Age</div>
               </td>
            </tr>
            <tr>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>Brian</div>
               </td>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>20</div>
               </td>
            </tr>
            <tr>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>Tam</div>
               </td>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>23</div>
               </td>
            </tr>
            <tr>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>Rose</div>
               </td>
               <td style="border: 1px solid rgb(219, 219, 219); background-color: rgb(255, 255, 255); width: 130px; padding: 8px;">
                  <div>21</div>
               </td>
            </tr>
         </tbody>
      </table>
      <div>
         <br/>
      </div>
   </div>
   <div>
      <br/>
   </div>`


   function getMatches(regex, string) {
      let array = []
      while ((resultArray = regex.exec(string)) !== null) {
        // console.log('resultArray[0]: ', resultArray[0]);
        // console.log('resultArray[1]: ', resultArray[1]);
        array.push(resultArray[0])
      }

      return array;
   }

   function getSortDiv(tr) {
      var tdRegex = /<td[\s\S]*?>([\s\S]*?)<\/td>/gm;
      var tdResult = getMatches(tdRegex, tr);
      return tdResult[sortKey];
   }

   function tdDivSort(a, b) {
      var trA = a;
      var trB = b;

      var sortDivA = getSortDiv(trA);
      var sortDivB = getSortDiv(trB);

      if (sortDivA < sortDivB) {
          return -1;
      }
      
      if (sortDivA > sortDivB) {
         return 1;
      }

      return 0;
   }


   var sortKey = 1;
   var asc = true;
   var trRegex =  /<tr>([\s\S]*?)<\/tr>/gm;
   var trResults = getMatches(trRegex, html);

   trResultsWithoutHeader = trResults.slice(1);
   trResultsWithoutHeader.sort(tdDivSort);
   if(!asc) { trResultsWithoutHeader.reverse() }

   let finalResults = [trResults[0], ...trResultsWithoutHeader]
   let joinedTrs = finalResults.join();
   let tbodyRegex = /([\s\S]*?<tbody>)[\s\S]*?(<\/tbody>[\s\S]*)/gm;
   let newHtml = html.replace(tbodyRegex, (mystring, arg1, arg2) => arg1 + joinedTrs + arg2);
   console.log('newHtml: ', newHtml);


