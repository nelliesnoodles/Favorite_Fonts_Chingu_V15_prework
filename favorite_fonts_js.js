// JavaScript source code
// favorite fonts, local javascript file

// JavaScript for Favorite Fonts, Chingu solo project
// Voyage 15 -- Nellie Tobey

// --------------------------------------------------
// Document elements to be manipulated by javascript:
// --------------------------------------------------

let light_theme_check;
let dark_theme_check;


//  -------------------------------------------------------------
//  ---Set DOM elements into the javascript after window load ---
//  -------------------------------------------------------------


function set_DOM() {
    light_theme_check = document.getElementById("lightTheme");
    dark_theme_check = document.getElementById("darkTheme");
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


//----- SET listeners, window.load --------------
function set_listeners() {
    dark_theme_check.addEventListener('click', get_and_set_checks);
    light_theme_check.addEventListener('click', get_and_set_checks);

}

window.onload = function () {
    set_DOM()
    set_listeners()
}
