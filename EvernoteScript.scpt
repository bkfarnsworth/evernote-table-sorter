JsOsaDAS1.001.00bplist00�Vscript_�var cheerio
var evernote = Application('Evernote');

//loadScript('ExternalScript.scpt')

//var p = Library("MyTextProcessor")

//https://www.evernote.com/shard/s208/nl/47026920/a520117f-b88c-434c-82e8-c763733d9301/
//https://www.evernote.com/l/ANBj82eqI-dBtIM1ZqzR6QN_HbUM8LLuTcw

//var note = evernote.findNote('s208/nl/47026920/a520117f-b88c-434c-82e8-c763733d9301/');

var note = evernote.notebooks.byName("Unsorted").notes.byId("x-coredata://D578A29C-EC81-49E3-8D08-CBE8BEBF8BE3/ENNote/p10315")

//note.title

//var notebook1 = evernote.createNotebook('TEST');
//var note1 = notebook1.createNote({title: 'TEST NOTE', withText: 'HI'});

//note.title()
//note.noteLink

//var htmlContent = note1.htmlContent()

var htmlContent = `<div>YIPPEE</div>`

note.append({html: htmlContent});

note.title = 'DID THIS WORK?'

note.htmlContent = `<div>222222</div>`

var a = note.htmlContent().replace(/\n/g, '')

unescape(a)



var ten = cheerio

ten += 1


//htmlContent






///////////////////////// CHEERIO

cheerio = 30;


ten



// find the first tr
	//get the keys from it
		//for example sort by col 3
//now sort the rest of the trs based on the key
	//get the value for col 3.  then sort all TRs

RegExp

localeCompare




                              �jscr  ��ޭ