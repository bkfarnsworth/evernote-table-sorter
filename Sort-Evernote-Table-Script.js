var sortKey = 0;
var asc = true;


function run(input, parameters) {


   var evernote = Application('Evernote');
   var note = evernote.notebooks.byName("Unsorted").notes.byId("x-coredata://D578A29C-EC81-49E3-8D08-CBE8BEBF8BE3/ENNote/p10315")
      
   var trRegex =  /<tr>([\s\S]*?)<\/tr>/gm;
   var originalHtml = note.htmlContent();
   var trResults = getMatches(trRegex, originalHtml);

   trResultsWithoutHeader = trResults.slice(1);
   trResultsWithoutHeader.sort(tdDivSort);
   if(!asc) { trResultsWithoutHeader.reverse() }

   var finalResults = [trResults[0], ...trResultsWithoutHeader]
   var joinedTrs = finalResults.join();
   var tbodyRegex = /([\s\S]*?<tbody>)[\s\S]*?(<\/tbody>[\s\S]*)/gm;
   var newHtml = originalHtml.replace(tbodyRegex, (mystring, arg1, arg2) => arg1 + joinedTrs + arg2);
   note.htmlContent = newHtml;
   
   return input;
}



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