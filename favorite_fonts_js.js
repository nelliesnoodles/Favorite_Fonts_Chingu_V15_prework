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
let font_deck;
var current_search;


const url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCM8prGHcP7hRrejX-WrHzBxx6H-5IPzpQ';
let google_api_json;
let font_names;
const load_card_amount = 12
var current = 0

//  -------------------------------------------------------------
//  ---Set DOM elements into the javascript after window load ---
//  -------------------------------------------------------------


function set_DOM() {
    light_theme_check = document.getElementById("lightTheme");
    dark_theme_check = document.getElementById("darkTheme");
    type_something = document.getElementById("type_something");
    reset = document.getElementById("reset");
    //main = document.getElementById("main");
    body = document.getElementById("body");
    font_deck = document.getElementById("FontDeck")
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

// NOT IN USE YET ------
function remove_400_fonts(){
  // These fonts fail to load See README.md
  var molle = "Molle"
  var condens = "Open Sans Condensed"
  var sunflower = "Sunflower"
  var unifrank = "UnifrakturCook"
  var coda = "Coda Caption"

}
// --------------- END



// Make a smaller list with first letter from Search
function search_for(astring, alist) {
    newlist = [];
    size = alist.length;

    i = 0

    for (j = 0; j < size; j++) {
        max = astring.length
        word = alist[j];
        first_in_word = word.charAt(i)
        first_in_string = astring.charAt(i)
        first_in_string = first_in_string.toUpperCase()
        //console.log("first in string =", first_in_string)
        if (first_in_word == first_in_string) {
            newlist.push(word)
        }
    };

    if (newlist.length > 0) {
        //console.log(newlist)
        //set this list that matches the first letter as the list we will
        //search through into the window under a global SEARCHLIST
        //If our list in a search is huge, we don't want to be searching through
        //it every time a letter changes... lets make it smaller, and mutable.
        window.SEARCHLIST = newlist
        //console.log(window.SEARCHLIST)
    }
    else {
        console.log("No match found")
    }

}

//------- END
//---- revert the tuple list to just font names --
function revert_names(sortedlist){
  newlist = []
  for(item=0; item < sortedlist.length; item++){
    //font = sortedlist[i][0]
    tuple = sortedlist[item]
    //console.log[tuple]
    font = tuple[0]
    newlist.push(font)
  }
  return newlist
}

//  Sorting function for search -----

function sort_tuples(tuple_array) {
    /* from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * var numbers = [4, 2, 5, 1, 3];
       numbers.sort(function(a, b) {
       return a - b;
        });
     */
    tuple_array.sort(function (a, b) {
        a = a[1]
        b = b[1]
        return a - b
    })

    //reverse it, because the numbers are sorted by string code, not numeric value
    reversed = tuple_array.reverse()
    newlist = revert_names(reversed)
    current_search = newlist
    return newlist
}

//------  END SORTING FUNCTION

//---- Make tuples of value matches to search value---
function search_more(search_value) {
    //use the stored window.SEARCHLIST in our search for matching/similar strings
    var search_list = window.SEARCHLIST
    var search_list_size = search_list.length
    //console.log("***************")
    //console.log(search_list)
    //console.log("***************")
    var percentage_ranked_values = []

    if (search_list_size > 1 && search_list_size > 0) {
        //grab the astring and see what percentage of letters match the search.value
        //we'll set up the search keydown to only run this search if the value length is greater than 1.
        //percent match will be matched-letters divided by number of letters in the user string
        //the astring and search value need to be compared.

        for (i = 0; i < search_list_size; i++) {
            length_of_user_word = search_value.length
            word = search_list[i]
            total = 0
            //console.log("loop number: ", i)
            //console.log(search_list_size)

            if (word.length >= search_value.length) {
                for (n = 0; n <= length_of_user_word; n++) {
                    x = word.charAt(n)
                    x = x.toLowerCase()
                    y = search_value.charAt(n)
                    y = y.toLowerCase()
                    if (x == y) {
                        total += 1;
                    }
                };
            }
            // change the second for loop to reflect that the search value is longer than the word from the list
            // an index error will happen if we're trying to get a charAt() that has a greater index than the string has characters.
            else {
                length_of_search_value = search_value.length
                for (b = 0; b <= word.length; b++) {
                    x = word.charAt(b)
                    x = x.toLowerCase()
                    y = search_value.charAt(b)
                    y = y.toLowerCase()
                    if (x == y) {
                        total += 1;
                    }
                };
            }
            if (total > 0) {
                percentage = parseInt(total) / parseInt(search_value.length)
                fixed_percentage = percentage.toFixed(3)
                tuple = [word, fixed_percentage]
                percentage_ranked_values.push(tuple)
                //console.log(tuple)
            }
            else {
                percentage = parseInt(0)
                tuple = [word, percentage]
                percentage_ranked_values.push(tuple)
            }

        }

    };

    //console.log("The created tuple list is:")
    //console.log(percentage_ranked_values)
    sorted = sort_tuples(percentage_ranked_values)
    //console.log(sorted)
    return sorted



}

//  ------------------ END ------------

// Create a keydown function for when search values are entered---
function call_keydown_search() {
      //in html, an onkeyup="call_keydown" will trigger this function.
      element = document.getElementById("search")
      newstring = element.value
      //Retrieve the first letter match list
      //This is only to match the first letter
      element_length = newstring.length
      search_array = font_names

      if (element_length != 0 && element_length == 1) {
          search_for(newstring, search_array)
          current = 0
          //console.log("first letter is entered, setting the window.SEARCHLIST")
          if (window.SEARCHLIST) {
            font_deck.innerHTML = ''
            initial_list = window.SEARCHLIST
            append_font_names(search=true, searchlist=initial_list)
            create_cards(search=true, searchlist=initial_list)
          }

      }
      else if (element_length > 1) {
        console.log("more than one letter is entered.")
          //Check that there is a list stored in the window:
          if (window.SEARCHLIST) {

              sorted_list = search_more(newstring)
              font_deck.innerHTML = ''
              append_font_names(search=true, searchlist=sorted_list)
              create_cards(search=true, searchlist=sorted_list)

          }

      }
      else {
          //the search has no characters, empty SEARCHLIST
          window.SEARCHLIST = [];
      }


  }
//------------------------END -------------------------
//----- check if link exists already in head
/* // IMPORTANT!!!  exists breaks the browser
function check_head(alink){
  element = document.getElementsByTagName('link')
  for(i=0; i<element.length; i++){
      existing_link = element[i].href
      //console.log(existing_link)
      if(existing_link == alink){
        return true
      }
      else {
        return false
      }
  };
}
*/


//  Append font names to head------

function append_font_names(search=false, searchlist=null){

  max = font_names.length
  amount = current + load_card_amount
  i = current

  if(search == false && searchlist == null){
  google_href="https://fonts.googleapis.com/css?family="
  for(i; i<max && i<amount; i++){
       font_name = font_names[i]
       google_link = google_href + font_name
       // IMPORTANT!!!  exists breaks the browser
       //exists = check_head(google_link)
       //console.log(exists)
       //if(!exists){
       var newlink = document.createElement('link');
       newlink.rel = 'stylesheet';
       newlink.href = google_link
       document.head.appendChild(newlink);
       //}
     };
   }
   else{
     google_href="https://fonts.googleapis.com/css?family="
     max = searchlist.length
     for(i; i<max && i<amount; i++){
          font_name = searchlist[i]
          google_link = google_href + font_name
          // IMPORTANT!!!  exists breaks the browser
          //exists = check_head(google_link)
          //if(!exists){
            var newlink = document.createElement('link');
            newlink.rel = 'stylesheet';
            newlink.href = google_link
            document.head.appendChild(newlink);
          //}
        };
      }
}
//----------  add font to card, head ----//


function create_cards(search=false, searchlist=null){
  var max = font_names.length - 1;
  i = current
  amount = current + load_card_amount
  if(search == false && searchlist == null){
    for(i; i<max && i< amount; i++){
       var fontName = font_names[i];

       var newNode = document.createElement('div');
       var newH2 = document.createElement('h2');
       var newH3 = document.createElement('h3');
       newH2.innerHTML = fontName;
       //newH2.style.fontFamily = fontName;
       newH3.className = 'sometext';
       newH3.id = 'sometext';
       newH3.style.fontFamily = fontName;
       newH3.innerHTML = '"And the wall whispered back..."';
       newNode.className = 'font_card';
       //newNode.style.fontFamily = fontName;

       newNode.appendChild(newH2)
       newNode.appendChild(newH3)
       document.getElementById('FontDeck').appendChild(newNode);
    }
  }
  else{
    max = searchlist.length
    for(i; i<max && i< amount; i++){
       var fontName = searchlist[i];

       var newNode = document.createElement('div');
       var newH2 = document.createElement('h2');
       var newH3 = document.createElement('h3');
       newH2.innerHTML = fontName;
       //newH2.style.fontFamily = fontName;
       newH3.className = 'sometext';
       newH3.id = 'sometext';
       newH3.style.fontFamily = fontName;
       newH3.innerHTML = '... saying,"What a lovely day for rain."';
       newNode.className = 'font_card';
       //newNode.style.fontFamily = fontName;

       newNode.appendChild(newH2)
       newNode.appendChild(newH3)
       document.getElementById('FontDeck').appendChild(newNode);
    }

  }
}
//----------  reset the page without reloading -----
//---  USE INPUT TYPE=RESET instead.

function reset_page_items(){
  new_size = "12px";
  current = 0
  window.scrollTo(0,0)
  origin_text = '"And the wall whispered back..."';
  element = document.getElementsByClassName("sometext");
  font_deck.innerHTML =''
  for(i=0; i<element.length; i++){
     childnode = element[i];
     childnode.style.fontSize = new_size;
     childnode.innerHTML = origin_text;
  }
  append_font_names()
  create_cards()

}
//-----------  END reset ---------------------

//----------  load more fonts ------------
function load_more(){
  x = window.scrollY
  y = document.body.offsetHeight
  z = window.innerHeight
  /* Reference: stack overflow:
  * https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
  */
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight -10){
    console.log("add cards....")
    active_element = document.activeElement
    //console.log(active_element)
    if(active_element.id != "search"){
    current += load_card_amount
    create_cards()
    append_font_names()
  }
    else{
      console.log("search active")
      current += load_card_amount
      create_cards(true, current_search)
      append_font_names(true, current_search)

    }


  }
}
//--------for button at bottom of html, scroll to top of page-------
function scroll_to_top(){
  window.scrollTo(0,0);
}
//------------------ END ---------------------

//----- SET listeners, window.load --------------

function add_loader(){
  window.addEventListener('scroll', load_more)
  console.log("loader added.")
}

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
