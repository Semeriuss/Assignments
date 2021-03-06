/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/
//General Document Objects ************

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "BOM"

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);

// console.log(document.links);
//console.log(document.links[13]);

// console.log(document.images);

//GetElementByID ***********************
// document.getElementById('')


// Define UI Variables  here 

//GetElementsByClassName
//collection-items link selection
// var items = document.getElementsByClassName('collection-item');
//span "badge" selection
var spanItems = document.getElementsByClassName('badge')

//location information
var href = window.location.href; //selection of href using location object of BOM
var host = window.location.host; //selection of host using location object of BOM
var protocol = window.location.protocol; //selection of protocol using location object of BOM
var port = window.location.port; //selection of port using location object of BOM
var hostName = window.location.hostname; //selection of host name using location object of BOM

//browser information
var appName = window.navigator.appName;
var appVersion = window.navigator.appVersion;
var platform = window.navigator.platform;
var language = window.navigator.language;
var cookieEnabled = window.navigator.cookieEnabled;
var languages = window.navigator.languages;
var product = window.navigator.product;

//screen information
var height = screen.height;
var width = screen.width;
var pixelDepth = screen.pixelDepth;
var colorDepth = screen.colorDepth;
var availableHeight = screen.availHeight;
var availableWidth = screen.availWidth;

//history information
var length = window.history.length;
var state = window.history.state;




// Display the BOM Information on the innerHTML of the elements

//editing the innerHTML with the information from the variables containing BOM Info
spanItems[0].innerHTML = href; 
spanItems[1].innerHTML = protocol;
spanItems[2].innerHTML = host;
spanItems[3].innerHTML = port;
spanItems[4].innerHTML = hostName;

//editing the innerHTML in Browser Info
spanItems[5].innerHTML = appName;
spanItems[6].innerHTML = appVersion;
spanItems[7].innerHTML = platform;
spanItems[8].innerHTML = language;
spanItems[9].innerHTML = cookieEnabled;
spanItems[10].innerHTML = product;

//editing the innerHTML in Screen Info
spanItems[11].innerHTML = height;
spanItems[12].innerHTML = width;
spanItems[13].innerHTML = pixelDepth;
spanItems[14].innerHTML = colorDepth;
spanItems[15].innerHTML = availableHeight;
spanItems[16].innerHTML = availableWidth;

//editing the innerHTML in Browser History Info
spanItems[17].innerHTML = length;
spanItems[18].innerHTML = state;





const reloadIcon = document.querySelector('.fa');

reloadIcon.addEventListener('click', reloadPage);

function reloadPage(){
    //using the reload function on locatoin object
    location.reload();
}