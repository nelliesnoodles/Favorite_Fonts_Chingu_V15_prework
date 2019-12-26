###Documentation for the favorite_fonts_js javascript files
#By Nellie Tobey
##Pre-set Variables:
---------------------------
#light_theme_check
--For getting switch value and activation of light mode theme.**
========================================
#dark_theme_check
--For getting switch value and activation of dark mode theme.**
========================================
#type_something
--For getting and setting the user's display text in the font-cards.**
========================================
#reset
--An image, form reset input that can scroll to the top and reset page defaults.**
========================================
#main
--Not in use, may use this for more color/page themes.**
========================================
#body
--For use in selecting a new theme (dark/light) from css, may not be necessary.**
========================================
#font_deck
--the parent of where all font cards are added and displayed.**
========================================
#current_search
--for use in the search input, setting and getting results of user input.**
========================================
.. SEARCH waits for at least two characters to be typed before retrieving and sorting a list of matches.
========================================

**const url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCM8prGHcP7hRrejX-WrHzBxx6H-5IPzpQ'**

***Google Developer API link = const url above.***
========================================
##google_api_json
--JSON object fetched from the url**
========================================
##font_names
--(string) font names retrieved from the google api json object through mapping**
========================================
##load_card_amount = 12  
--to limit the amount of loaded font cards the scrolling will activate**
========================================
##current = 0
--With load_card_amount this will help control what the index sits at for loading font names.**
========================================

###Functions:

#set_DOM()

This function uses assignment to load a value to the preset variables after the window has finished loading.
========================================
#colorLinks()

Changes the tag <a> links color for google font pages when dark or light theme are selected
========================================
#change_theme(dark, light)

Sets the colors of different page elements according to which parameter is true.
========================================
#get_and_set_checks()

A control to set the values of the dark/light checkbox's to true or false depending on user selection
default = light theme.  Handled by EventListener.
========================================
#change_contents_card(new_string)

Takes from the call_keydown() of the 'type_something' input a string to place in visible
displayed font cards the users text input
========================================
#call_keydown()

Used by the 'type_something' input directly in the html to send users string into the JS to modify
displayed inner HTML of the font card.
========================================
#font_size_select(font)

Sets and changes the font size by a user selection, of the font card's H3 id='sometext'.
========================================
#remove_400_fonts()

Not in use yet. 5 fonts from the json API fail to load. They are then errors when the link
appended to the head tries to retrieve them from google font url.
========================================
#search_for(astring, alist)
..astring-from user input into search
..alist-from the fetched and mapped font names retrieved from google font api call.
First step in the search process, this creates a list of all the font's within the list Created
from the json object sent by google, that have the same first letter of the search text.
The origin list has more than 900 items in the list, this will narrow the next search down significantly
by only including the font names that begin with the same letter.
========================================
#revert_names(sortedlist)
path-- search_more => sort_tuples => revert_names

This is the final step in the path to sorting out the search matches that will be
rendered to the user.  Because sort_tuples will return a list in order from least to greatest
and a percentage is assigned to matches, we want the closest matches to appear first in assignment
to the font cards.  Therefore the list must be reversed to show the higher match percentages first.
========================================
#sort_tuples(tuple_array)
A psuedo tuple array set up in this way [ [item, percentage], [item, percentage] ...]
is sent to the sort_tuples function to be sorted by the second list items(percentage) value.
========================================
--search_more(search_value)

Once the user has entered more than one character in the search, this function carries out a more
thorough sorting of our font names to render into the font cards by the amount of letters that match between
the users search_value and the font names added to the window.SEARCHLIST by the first search().
========================================
#call_keydown_search()

This function is called from the html input id='search'.  It's logic will determine wether to
do the initial search of the google font names list, or to look to a list set after the initial search Into
the window.SEARCHLIST.  It will not render the cards on the first letter entered into the search. Upon a second
letter being entered it will use that SEARCHLIST in the search_more to get the a list with closest matches first
and then render those to the screen for the user.
========================================
#append_font_names(search=false, searchlist=null)

  default parameters:
     -This will append the font names from the font_names list which contains the whole of the google APIs'
     -list of font names.  It does so 12 at a time.  load_more() handles loading more of the list as the user scrolls.

  When search = True, and a searchlist is NOT null:
     -This will append from a window.SEARCHLIST the font names provided by a search value
     -entered by the user.
========================================
#create_cards(search=false, searchlist=null)

  default parameters:
    -This will create and append font card elements from the google api font name list.

  When search=True, and a searchlist is NOT null:
    -This will create font cards and append them based on the list provided by the window.SEARCHLIST
    -The window SEARCHLIST is created with the search Functions
========================================
#reset_page_items()

Event listener handles activating this function in which the page default settings are
restored and the window is scrolled back to the top of the page.
========================================
#add_loader()

Adds an Event listener which will call load_more() on scroll reaching bottom of page
========================================
#load_more()

Checks whether the page is scrolled to the bottom, and then increments the current value
by the const load_card_amount(12) to get the next twelve items in the list, either the google
fonts list or the SEARCHLIST to append to the font deck.
========================================
#set_listeners()

sets the eventlisteners for the dark theme, light theme and reset Functions
========================================
#assign_json()

async function get_fonts uses this function to append and map the font_names from the fetched json object
once it is retrieved from the google APIs
========================================
#async get_fonts()

awaits a response from the google api URL, then activates assign_json() function to use the json object in setting
the font_names variable to the list of font names mapped from the json.
========================================
#window.onload()
When window is loaded, set_DOM(): set the variables assigned to different key HTML components
get_fonts(): assign the font names from the google url call.
set_listeners(): set and assign listeners to key html elements
========================================
//---------- END DOCUMENTATION -------------
