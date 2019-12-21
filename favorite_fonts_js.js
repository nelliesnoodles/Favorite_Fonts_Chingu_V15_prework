// JavaScript source code
// favorite fonts, local javascript file

// JavaScript for Favorite Fonts, Chingu solo project
// Voyage 15 -- Nellie Tobey

// --------------------------------------------------
// Document elements to be manipulated by javascript:
// --------------------------------------------------

let light_theme_check;
let dark_theme_check;
let type_something;
let reset;
let main;  //<-- not in use yet
let body;

const Http = new XMLHttpRequest();
const url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCM8prGHcP7hRrejX-WrHzBxx6H-5IPzpQ';
let google_api_json;
let font_names;
const load_card_amount = 12
var current = 0
//  -------------------------------------------------------------
//  ---Set DOM elements into the javascript after window load ---
//  -------------------------------------------------------------



/*
Http.open("GET", url);

Http.onload = function() {
    var data = JSON.parse(this.response);

    modifiedData = data.items.map(item => {
        return item.family;
    })

    console.log(modifiedData);
}
*/

function set_DOM() {
    light_theme_check = document.getElementById("lightTheme");
    dark_theme_check = document.getElementById("darkTheme");
    type_something = document.getElementById("type_something");
    reset = document.getElementById("reset");
    //main = document.getElementById("main");
    body = document.getElementById("body");
}


// _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_

// ----------  Dark & light theme scripts -----------
function colorLinks(hex) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        // all links
            link = links[i]
            link.style.color = hex;
    };
    }

function change_theme(dark, light) {
    let nav_bar = document.getElementById("nav_bar");
    let tools_bar = document.getElementById("tools_bar");
    var light_hex = 'black';
    var dark_hex = '#e4e3e0';
    // font cards are inheriting from body
    if (dark == true && light == false) {
        //body
        document.body.style.background = 'black';
        document.body.style.color = '#F5F4F7';
        //nav bar
        nav_bar.style.background = '#181f27';
        nav_bar.style.color = "#f5f6f7"
        colorLinks(dark_hex);
        //tools bar
        tools_bar.style.background = '#181f27';
    }
    else {
        //body
        document.body.style.background = '#F5F4F7';
        document.body.style.color = 'black';
        //nav_bar
        nav_bar.style.background = '#f5f6f7';
        nav_bar.style.color = '#181f27';
        colorLinks(light_hex);
        //tools bar
        tools_bar.style.background = '#f5f6f7'
    }


}

function get_and_set_checks() {
    var dark = false;
    var light = true;
    let active_check = this.checked
    if (this.id == 'lightTheme') {
        dark = false;
        light = true;
        dark_theme_check.value = false;
        light_theme_check.value = true;
    }
    else if(this.id == 'darkTheme') {
        dark = true;
        light = false;
        dark_theme_check.value = true;
        light_theme_check.value = false;
    }
  else  {
        element = this.id
        console.log("This is an error. In function- get_and_set_checks().");
        console.log(`Element accessing this function= ${element}`);
        console.log("Only darkTheme and lightTheme should be accessing get_and_set_checks function call.")
    }
    change_theme(dark, light)
}

//----- END dark and light theme scripts ---------
// _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
//----------- The Google font API(s)   -----------


//---END google font API(s)

//***************  Key down in type something **********//
function change_contents_card(new_string) {
  element = document.getElementsByClassName("sometext");
  for(i=0; i < element.length; i++) {
    child = element[i];

    child.innerHTML = new_string
  }
}

function call_keydown(){
  new_string = document.getElementById("type_something").value;
  // this.value returns Undefined.
  //console.log(new_string);
  change_contents_card(new_string);

}

//**************   END type something ******************//


// Change font size -------------------

function font_size_select(font){
  //console.log(font.value);
  new_size = font.value.toString() + "px";
  element = document.getElementsByClassName("sometext");
  for(i=0; i<element.length; i++){
     childnode = element[i];
     element[i].style.fontSize = new_size;
  }
  //element.style.fontSize = new_size;


}


function remove_400_fonts(){
  // These fonts fail to load See README.md
  var molle = "Molle"
  var condens = "Open Sans Condensed"
  var sunflower = "Sunflower"
  var unifrank = "UnifrakturCook"
  var coda = "Coda Caption"

}

function append_font_names(){

  max = font_names.length
  amount = current + load_card_amount
  i = current


  google_href="https://fonts.googleapis.com/css?family="
  for(i; i<max && i<amount; i++){
       font_name = font_names[i]
       google_link = google_href + font_name
       var newlink = document.createElement('link');
       newlink.rel = 'stylesheet';
       newlink.href = google_link
       document.head.appendChild(newlink);
     }
}
//----------  add font to card, head ----//


function create_cards(){
  var max = font_names.length - 1;
  i = current
  amount = current + load_card_amount
  for(i; i<max && i< amount; i++){
     var fontName = font_names[i];

     var newNode = document.createElement('div');
     var newH2 = document.createElement('h2');
     var newH3 = document.createElement('h3');
     newH2.innerHTML = fontName;
     newH2.style.fontFamily = fontName;
     newH3.className = 'sometext';
     newH3.id = 'sometext';
     newH3.style.fontFamily = fontName;
     newH3.innerHTML = '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt';
     newNode.className = 'font_card';
     //newNode.style.fontFamily = fontName;

     newNode.appendChild(newH2)
     newNode.appendChild(newH3)
     document.getElementById('FontDeck').appendChild(newNode);
  }
}
//----------  reset the page without reloading -----
//---  USE INPUT TYPE=RESET instead.

function reset_page_items(){
  new_size = "12px";
  current = 0
  window.scrollTo(0,0)
  origin_text = '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt';
  element = document.getElementsByClassName("sometext");
  for(i=0; i<element.length; i++){
     childnode = element[i];
     childnode.style.fontSize = new_size;
     childnode.innerHTML = origin_text;
  }

}

function add_loader(){
  window.addEventListener('scroll', load_more)
  console.log("loader added.")
}
//-----------  END reset ---------------------
//----------  load more fonts ------------
function load_more(){
  x = window.scrollY
  y = document.body.offsetHeight
  z = window.innerHeight
  console.log("Window has scrolled.", x + z, y)
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight -10){
    console.log("add cards....")
    current += load_card_amount
    create_cards()
    append_font_names()


  }
}
/* stack overflow:
* https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
element.addEventListener('scroll', function(event)
{
    var element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight)
    {
        console.log('scrolled');
    }
});
*/
//----- SET listeners, window.load --------------
function set_listeners() {
    dark_theme_check.addEventListener('click', get_and_set_checks);
    light_theme_check.addEventListener('click', get_and_set_checks);
    reset.addEventListener('click', reset_page_items);




}

function assign_json(myJson) {
  var data = myJson
  modifiedData = data.items.map(item => {
    return item.family;
  })
  font_names = modifiedData
  console.log("assigning font_names...")
  //console.log(font_names)
  create_cards()
  append_font_names()
  add_loader()
  //console.log(modifiedData)

}

async function get_fonts() {
  const response = await fetch(url);
  const myJson = await response.json();
  assign_json(myJson)

}



window.onload = function () {
    set_DOM()
    get_fonts()
    set_listeners()




}
