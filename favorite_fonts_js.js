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

let google_api_json;
let font_names = ["ABeeZee" ,
"Abel" ,
"Abhaya Libre" ,
"Abril Fatface"  ,
"Aclonica"  ,
"Acme"  ,
"Actor"  ,
"Adamina"  ,
"Advent Pro"  ,
"Aguafina Script"  ,
"Akronim"  ,
"Aladin"  ,
"Aldrich"  ,
"Alef"  ,
"Alegreya"  ,
"Alegreya SC"  ,
"Alegreya Sans"  ,
"Alegreya Sans SC"  ,
"Alex Brush"  ,
"Alfa Slab One"  ,
"Alice"  ,
"Alike"  ,
"Alike Angular"  ,
"Allan"  ,
"Allerta"  ,
"Allerta Stencil"  ,
"Allura"  ,
"Almendra"  ,
"Almendra Display"  ,
"Almendra SC"  ,
"Amarante"  ,
"Amaranth"  ,
"Amatic SC"  ,
"Amatica SC"  ,
"Amethysta"  ,
"Amiko"  ,
"Amiri"  ,
"Amita"  ,
"Anaheim"  ,
"Andada"  ,
"Andika"  ,
"Angkor"  ,
"Annie Use Your Telescope"  ,
"Anonymous Pro"  ,
"Antic"  ,
"Antic Didone"  ,
"Antic Slab"  ,
"Anton"  ,
"Arapey"  ,
"Arbutus"  ,
"Arbutus Slab"  ,
"Architects Daughter"  ,
"Archivo"  ,
"Archivo Black"  ,
"Archivo Narrow"  ,
"Aref Ruqaa"  ,
"Arima Madurai"  ,
"Arimo"  ,
"Arizonia"  ,
"Armata"  ,
"Arsenal"  ,
"Artifika"  ,
"Arvo"  ,
"Arya"  ,
"Asap"  ,
"Asap Condensed"  ,
"Asar"  ,
"Asset"  ,
"Assistant"  ,
"Astloch"  ,
"Asul"  ,
"Athiti"  ,
"Atma"  ,
"Atomic Age"  ,
"Aubrey"  ,
"Audiowide"  ,
"Autour One"  ,
"Average"  ,
"Average Sans"  ,
"Averia Gruesa Libre"  ,
"Averia Libre"  ,
"Averia Sans Libre"  ,
"Averia Serif Libre"  ,
"Bad Script"  ,
"Bahiana"  ,
"Baloo"  ,
"Baloo Bhai"  ,
"Baloo Bhaijaan"  ,
"Baloo Bhaina"  ,
"Baloo Chettan"  ,
"Baloo Da"  ,
"Baloo Paaji"  ,
"Baloo Tamma"  ,
"Baloo Tammudu"  ,
"Baloo Thambi"  ,
"Balthazar"  ,
"Bangers"  ,
"Barrio"  ,
"Basic"  ,
"Battambang"  ,
"Baumans"  ,
"Bayon"  ,
"Belgrano"  ,
"Bellefair"  ,
"Belleza"  ,
"BenchNine"  ,
"Bentham"  ,
"Berkshire Swash"  ,
"Bevan"  ,
"Bigelow Rules"  ,
"Bigshot One"  ,
"Bilbo"  ,
"Bilbo Swash Caps"  ,
"BioRhyme"  ,
"BioRhyme Expanded"  ,
"Biryani"  ,
"Bitter"  ,
"Black Ops One"  ,
"Bokor"  ,
"Bonbon"  ,
"Boogaloo"  ,
"Bowlby One"  ,
"Bowlby One SC"  ,
"Brawler"  ,
"Bree Serif"  ,
"Bubblegum Sans"  ,
"Bubbler One"  ,
"Buenard"  ,
"Bungee"  ,
"Bungee Hairline"  ,
"Bungee Inline"  ,
"Bungee Outline"  ,
"Bungee Shade"  ,
"Butcherman"  ,
"Butterfly Kids"  ,
"Cabin"  ,
"Cabin Condensed"  ,
"Cabin Sketch"  ,
"Caesar Dressing"  ,
"Cagliostro"  ,
"Cairo"  ,
"Calligraffitti"  ,
"Cambay"  ,
"Cambo"  ,
"Candal"  ,
"Cantarell"  ,
"Cantata One"  ,
"Cantora One"  ,
"Capriola"  ,
"Cardo"  ,
"Carme"  ,
"Carrois Gothic"  ,
"Carrois Gothic SC"  ,
"Carter One"  ,
"Catamaran"  ,
"Caudex"  ,
"Caveat"  ,
"Caveat Brush"  ,
"Cedarville Cursive"  ,
"Ceviche One"  ,
"Changa"  ,
"Changa One"  ,
"Chango"  ,
"Chathura"  ,
"Chau Philomene One"  ,
"Chela One"  ,
"Chelsea Market"  ,
"Chenla"  ,
"Cherry Cream Soda"  ,
"Cherry Swash"  ,
"Chewy"  ,
"Chicle"  ,
"Chivo"  ,
"Chonburi"  ,
"Cinzel"  ,
"Cinzel Decorative"  ,
"Clicker Script"  ,
"Coda"  ,
"Codystar"  ,
"Coiny"  ,
"Combo"  ,
"Comfortaa"  ,
"Coming Soon"  ,
"Concert One"  ,
"Condiment"  ,
"Content"  ,
"Contrail One"  ,
"Convergence"  ,
"Cookie"  ,
"Copse"  ,
"Corben"  ,
"Cormorant"  ,
"Cormorant Garamond"  ,
"Cormorant Infant"  ,
"Cormorant SC"  ,
"Cormorant Unicase"  ,
"Cormorant Upright"  ,
"Courgette"  ,
"Cousine"  ,
"Coustard"  ,
"Covered By Your Grace"  ,
"Crafty Girls"  ,
"Creepster"  ,
"Crete Round"  ,
"Crimson Text"  ,
"Croissant One"  ,
"Crushed"  ,
"Cuprum"  ,
"Cutive"  ,
"Cutive Mono"  ,
"Damion"  ,
"Dancing Script"  ,
"Dangrek"  ,
"David Libre"  ,
"Dawning of a New Day"  ,
"Days One"  ,
"Dekko"  ,
"Delius"  ,
"Delius Swash Caps"  ,
"Delius Unicase"  ,
"Della Respira"  ,
"Denk One"  ,
"Devonshire"  ,
"Dhurjati"  ,
"Didact Gothic"  ,
"Diplomata"  ,
"Diplomata SC"  ,
"Domine"  ,
"Donegal One"  ,
"Doppio One"  ,
"Dorsa"  ,
"Dosis"  ,
"Dr Sugiyama"  ,
"Droid Sans"  ,
"Droid Sans Mono"  ,
"Droid Serif"  ,
"Duru Sans"  ,
"Dynalight"  ,
"EB Garamond"  ,
"Eagle Lake"  ,
"Eater"  ,
"Economica"  ,
"Eczar"  ,
"El Messiri"  ,
"Electrolize"  ,
"Elsie"  ,
"Elsie Swash Caps"  ,
"Emblema One"  ,
"Emilys Candy"  ,
"Encode Sans"  ,
"Encode Sans Condensed"  ,
"Encode Sans Expanded"  ,
"Encode Sans Semi Condensed"  ,
"Encode Sans Semi Expanded"  ,
"Engagement"  ,
"Englebert"  ,
"Enriqueta"  ,
"Erica One"  ,
"Esteban"  ,
"Euphoria Script"  ,
"Ewert"  ,
"Exo"  ,
"Exo 2"  ,
"Expletus Sans"  ,
"Fanwood Text"  ,
"Farsan"  ,
"Fascinate"  ,
"Fascinate Inline"  ,
"Faster One"  ,
"Fasthand"  ,
"Fauna One"  ,
"Faustina"  ,
"Federant"  ,
"Federo"  ,
"Felipa"  ,
"Fenix"  ,
"Finger Paint"  ,
"Fira Mono"  ,
"Fira Sans"  ,
"Fira Sans Condensed"  ,
"Fira Sans Extra Condensed"  ,
"Fjalla One"  ,
"Fjord One"  ,
"Flamenco"  ,
"Flavors"  ,
"Fondamento"  ,
"Fontdiner Swanky"  ,
"Forum"  ,
"Francois One"  ,
"Frank Ruhl Libre"  ,
"Freckle Face"  ,
"Fredericka the Great"  ,
"Fredoka One"  ,
"Freehand"  ,
"Fresca"  ,
"Frijole"  ,
"Fruktur"  ,
"Fugaz One"  ,
"GFS Didot"  ,
"GFS Neohellenic"  ,
"Gabriela"  ,
"Gafata"  ,
"Galada"  ,
"Galdeano"  ,
"Galindo"  ,
"Gentium Basic"  ,
"Gentium Book Basic"  ,
"Geo"  ,
"Geostar"  ,
"Geostar Fill"  ,
"Germania One"  ,
"Gidugu"  ,
"Gilda Display"  ,
"Give You Glory"  ,
"Glass Antiqua"  ,
"Glegoo"  ,
"Gloria Hallelujah"  ,
"Goblin One"  ,
"Gochi Hand"  ,
"Gorditas"  ,
"Goudy Bookletter 1911"  ,
"Graduate"  ,
"Grand Hotel"  ,
"Gravitas One"  ,
"Great Vibes"  ,
"Griffy"  ,
"Gruppo"  ,
"Gudea"  ,
"Gurajada"  ,
"Habibi"  ,
"Halant"  ,
"Hammersmith One"  ,
"Hanalei"  ,
"Hanalei Fill"  ,
"Handlee"  ,
"Hanuman"  ,
"Happy Monkey"  ,
"Harmattan"  ,
"Headland One"  ,
"Heebo"  ,
"Henny Penny"  ,
"Herr Von Muellerhoff"  ,
"Hind"  ,
"Hind Guntur"  ,
"Hind Madurai"  ,
"Hind Siliguri"  ,
"Hind Vadodara"  ,
"Holtwood One SC"  ,
"Homemade Apple"  ,
"Homenaje"  ,
"IM Fell DW Pica"  ,
"IM Fell DW Pica SC"  ,
"IM Fell Double Pica"  ,
"IM Fell Double Pica SC"  ,
"IM Fell English"  ,
"IM Fell English SC"  ,
"IM Fell French Canon"  ,
"IM Fell French Canon SC"  ,
"IM Fell Great Primer"  ,
"IM Fell Great Primer SC"  ,
"Iceberg"  ,
"Iceland"  ,
"Imprima"  ,
"Inconsolata"  ,
"Inder"  ,
"Indie Flower"  ,
"Inika"  ,
"Inknut Antiqua"  ,
"Irish Grover"  ,
"Istok Web"  ,
"Italiana"  ,
"Italianno"  ,
"Itim"  ,
"Jacques Francois"  ,
"Jacques Francois Shadow"  ,
"Jaldi"  ,
"Jim Nightshade"  ,
"Jockey One"  ,
"Jolly Lodger"  ,
"Jomhuria"  ,
"Josefin Sans"  ,
"Josefin Slab"  ,
"Joti One"  ,
"Judson"  ,
"Julee"  ,
"Julius Sans One"  ,
"Junge"  ,
"Jura"  ,
"Just Another Hand"  ,
"Just Me Again Down Here"  ,
"Kadwa"  ,
"Kalam"  ,
"Kameron"  ,
"Kanit"  ,
"Kantumruy"  ,
"Karla"  ,
"Karma"  ,
"Katibeh"  ,
"Kaushan Script"  ,
"Kavivanar"  ,
"Kavoon"  ,
"Kdam Thmor"  ,
"Keania One"  ,
"Kelly Slab"  ,
"Kenia"  ,
"Khand"  ,
"Khmer"  ,
"Khula"  ,
"Kite One"  ,
"Knewave"  ,
"Kotta One"  ,
"Koulen"  ,
"Kranky"  ,
"Kreon"  ,
"Kristi"  ,
"Krona One"  ,
"Kumar One"  ,
"Kumar One Outline"  ,
"Kurale"  ,
"La Belle Aurore"  ,
"Laila"  ,
"Lakki Reddy"  ,
"Lalezar"  ,
"Lancelot"  ,
"Lateef"  ,
"Lato"  ,
"League Script"  ,
"Leckerli One"  ,
"Ledger"  ,
"Lekton"  ,
"Lemon"  ,
"Lemonada"  ,
"Libre Barcode 128"  ,
"Libre Barcode 128 Text"  ,
"Libre Barcode 39"  ,
"Libre Barcode 39 Extended"  ,
"Libre Barcode 39 Extended Text"  ,
"Libre Barcode 39 Text"  ,
"Libre Baskerville"  ,
"Libre Franklin"  ,
"Life Savers"  ,
"Lilita One"  ,
"Lily Script One"  ,
"Limelight"  ,
"Linden Hill"  ,
"Lobster"  ,
"Lobster Two"  ,
"Londrina Outline"  ,
"Londrina Shadow"  ,
"Londrina Sketch"  ,
"Londrina Solid"  ,
"Lora"  ,
"Love Ya Like A Sister"  ,
"Loved by the King"  ,
"Lovers Quarrel"  ,
"Luckiest Guy"  ,
"Lusitana"  ,
"Lustria"  ,
"Macondo"  ,
"Macondo Swash Caps"  ,
"Mada"  ,
"Magra"  ,
"Maiden Orange"  ,
"Maitree"  ,
"Mako"  ,
"Mallanna"  ,
"Mandali"  ,
"Manuale"  ,
"Marcellus"  ,
"Marcellus SC"  ,
"Marck Script"  ,
"Margarine"  ,
"Marko One"  ,
"Marmelad"  ,
"Martel"  ,
"Martel Sans"  ,
"Marvel"  ,
"Mate"  ,
"Mate SC"  ,
"Maven Pro"  ,
"McLaren"  ,
"Meddon"  ,
"MedievalSharp"  ,
"Medula One"  ,
"Meera Inimai"  ,
"Megrim"  ,
"Meie Script"  ,
"Merienda"  ,
"Merienda One"  ,
"Merriweather"  ,
"Merriweather Sans"  ,
"Metal"  ,
"Metal Mania"  ,
"Metamorphous"  ,
"Metrophobic"  ,
"Michroma"  ,
"Milonga"  ,
"Miltonian"  ,
"Miltonian Tattoo"  ,
"Miniver"  ,
"Miriam Libre"  ,
"Mirza"  ,
"Miss Fajardose"  ,
"Mitr"  ,
"Modak"  ,
"Modern Antiqua"  ,
"Mogra"  ,
"Molengo"  ,
"Monda"  ,
"Monofett"  ,
"Monoton"  ,
"Monsieur La Doulaise"  ,
"Montaga"  ,
"Montez"  ,
"Montserrat"  ,
"Montserrat Alternates"  ,
"Montserrat Subrayada"  ,
"Moul"  ,
"Moulpali"  ,
"Mountains of Christmas"  ,
"Mouse Memoirs"  ,
"Mr Bedfort"  ,
"Mr Dafoe"  ,
"Mr De Haviland"  ,
"Mrs Saint Delafield"  ,
"Mrs Sheppards"  ,
"Mukta"  ,
"Mukta Mahee"  ,
"Mukta Malar"  ,
"Mukta Vaani"  ,
"Muli"  ,
"Mystery Quest"  ,
"NTR"  ,
"Neucha"  ,
"Neuton"  ,
"New Rocker"  ,
"News Cycle"  ,
"Niconne"  ,
"Nixie One"  ,
"Nobile"  ,
"Nokora"  ,
"Norican"  ,
"Nosifer"  ,
"Nothing You Could Do"  ,
"Noticia Text"  ,
"Noto Sans"  ,
"Noto Serif"  ,
"Nova Cut"  ,
"Nova Flat"  ,
"Nova Mono"  ,
"Nova Oval"  ,
"Nova Round"  ,
"Nova Script"  ,
"Nova Slim"  ,
"Nova Square"  ,
"Numans"  ,
"Nunito"  ,
"Nunito Sans"  ,
"Odor Mean Chey"  ,
"Offside"  ,
"Old Standard TT"  ,
"Oldenburg"  ,
"Oleo Script"  ,
"Oleo Script Swash Caps"  ,
"Open Sans"  ,
"Oranienbaum"  ,
"Orbitron"  ,
"Oregano"  ,
"Orienta"  ,
"Original Surfer"  ,
"Oswald"  ,
"Over the Rainbow"  ,
"Overlock"  ,
"Overlock SC"  ,
"Overpass"  ,
"Overpass Mono"  ,
"Ovo"  ,
"Oxygen"  ,
"Oxygen Mono"  ,
"PT Mono"  ,
"PT Sans"  ,
"PT Sans Caption"  ,
"PT Sans Narrow"  ,
"PT Serif"  ,
"PT Serif Caption"  ,
"Pacifico"  ,
"Padauk"  ,
"Palanquin"  ,
"Palanquin Dark"  ,
"Pangolin"  ,
"Paprika"  ,
"Parisienne"  ,
"Passero One"  ,
"Passion One"  ,
"Pathway Gothic One"  ,
"Patrick Hand"  ,
"Patrick Hand SC"  ,
"Pattaya"  ,
"Patua One"  ,
"Pavanam"  ,
"Paytone One"  ,
"Peddana"  ,
"Peralta"  ,
"Permanent Marker"  ,
"Petit Formal Script"  ,
"Petrona"  ,
"Philosopher"  ,
"Piedra"  ,
"Pinyon Script"  ,
"Pirata One"  ,
"Plaster"  ,
"Play"  ,
"Playball"  ,
"Playfair Display"  ,
"Playfair Display SC"  ,
"Podkova"  ,
"Poiret One"  ,
"Poller One"  ,
"Poly"  ,
"Pompiere"  ,
"Pontano Sans"  ,
"Poppins"  ,
"Port Lligat Sans"  ,
"Port Lligat Slab"  ,
"Pragati Narrow"  ,
"Prata"  ,
"Preahvihear"  ,
"Press Start 2P"  ,
"Pridi"  ,
"Princess Sofia"  ,
"Prociono"  ,
"Prompt"  ,
"Prosto One"  ,
"Proza Libre"  ,
"Puritan"  ,
"Purple Purse"  ,
"Quando"  ,
"Quantico"  ,
"Quattrocento"  ,
"Quattrocento Sans"  ,
"Questrial"  ,
"Quicksand"  ,
"Quintessential"  ,
"Qwigley"  ,
"Racing Sans One"  ,
"Radley"  ,
"Rajdhani"  ,
"Rakkas"  ,
"Raleway"  ,
"Raleway Dots"  ,
"Ramabhadra"  ,
"Ramaraja"  ,
"Rambla"  ,
"Rammetto One"  ,
"Ranchers"  ,
"Rancho"  ,
"Ranga"  ,
"Rasa"  ,
"Rationale"  ,
"Ravi Prakash"  ,
"Redressed"  ,
"Reem Kufi"  ,
"Reenie Beanie"  ,
"Revalia"  ,
"Rhodium Libre"  ,
"Ribeye"  ,
"Ribeye Marrow"  ,
"Righteous"  ,
"Risque"  ,
"Roboto"  ,
"Roboto Condensed"  ,
"Roboto Mono"  ,
"Roboto Slab"  ,
"Rochester"  ,
"Rock Salt"  ,
"Rokkitt"  ,
"Romanesco"  ,
"Ropa Sans"  ,
"Rosario"  ,
"Rosarivo"  ,
"Rouge Script"  ,
"Rozha One"  ,
"Rubik"  ,
"Rubik Mono One"  ,
"Ruda"  ,
"Rufina"  ,
"Ruge Boogie"  ,
"Ruluko"  ,
"Rum Raisin"  ,
"Ruslan Display"  ,
"Russo One"  ,
"Ruthie"  ,
"Rye"  ,
"Sacramento"  ,
"Sahitya"  ,
"Sail"  ,
"Saira"  ,
"Saira Condensed"  ,
"Saira Extra Condensed"  ,
"Saira Semi Condensed"  ,
"Salsa"  ,
"Sanchez"  ,
"Sancreek"  ,
"Sansita"  ,
"Sarala"  ,
"Sarina"  ,
"Sarpanch"  ,
"Satisfy"  ,
"Scada"  ,
"Scheherazade"  ,
"Schoolbell"  ,
"Scope One"  ,
"Seaweed Script"  ,
"Secular One"  ,
"Sedgwick Ave"  ,
"Sedgwick Ave Display"  ,
"Sevillana"  ,
"Seymour One"  ,
"Shadows Into Light"  ,
"Shadows Into Light Two"  ,
"Shanti"  ,
"Share"  ,
"Share Tech"  ,
"Share Tech Mono"  ,
"Shojumaru"  ,
"Short Stack"  ,
"Shrikhand"  ,
"Siemreap"  ,
"Sigmar One"  ,
"Signika"  ,
"Signika Negative"  ,
"Simonetta"  ,
"Sintony"  ,
"Sirin Stencil"  ,
"Six Caps"  ,
"Skranji"  ,
"Slabo 13px"  ,
"Slabo 27px"  ,
"Slackey"  ,
"Smokum"  ,
"Smythe"  ,
"Sniglet"  ,
"Snippet"  ,
"Snowburst One"  ,
"Sofadi One"  ,
"Sofia"  ,
"Sonsie One"  ,
"Sorts Mill Goudy"  ,
"Source Code Pro"  ,
"Source Sans Pro"  ,
"Source Serif Pro"  ,
"Space Mono"  ,
"Special Elite"  ,
"Spectral"  ,
"Spicy Rice"  ,
"Spinnaker"  ,
"Spirax"  ,
"Squada One"  ,
"Sree Krushnadevaraya"  ,
"Sriracha"  ,
"Stalemate"  ,
"Stalinist One"  ,
"Stardos Stencil"  ,
"Stint Ultra Condensed"  ,
"Stint Ultra Expanded"  ,
"Stoke"  ,
"Strait"  ,
"Sue Ellen Francisco"  ,
"Suez One"  ,
"Sumana"  ,
"Sunshiney"  ,
"Supermercado One"  ,
"Sura"  ,
"Suranna"  ,
"Suravaram"  ,
"Suwannaphum"  ,
"Swanky and Moo Moo"  ,
"Syncopate"  ,
"Tangerine"  ,
"Taprom"  ,
"Tauri"  ,
"Taviraj"  ,
"Teko"  ,
"Telex"  ,
"Tenali Ramakrishna"  ,
"Tenor Sans"  ,
"Text Me One"  ,
"The Girl Next Door"  ,
"Tienne"  ,
"Tillana"  ,
"Timmana"  ,
"Tinos"  ,
"Titan One"  ,
"Titillium Web"  ,
"Trade Winds"  ,
"Trirong"  ,
"Trocchi"  ,
"Trochut"  ,
"Trykker"  ,
"Tulpen One"  ,
"Ubuntu"  ,
"Ubuntu Condensed"  ,
"Ubuntu Mono"  ,
"Ultra"  ,
"Uncial Antiqua"  ,
"Underdog"  ,
"Unica One"  ,
"UnifrakturMaguntia"  ,
"Unkempt"  ,
"Unlock"  ,
"Unna"  ,
"VT323"  ,
"Vampiro One"  ,
"Varela"  ,
"Varela Round"  ,
"Vast Shadow"  ,
"Vesper Libre"  ,
"Vibur"  ,
"Vidaloka"  ,
"Viga"  ,
"Voces"  ,
"Volkhov"  ,
"Vollkorn"  ,
"Voltaire"  ,
"Waiting for the Sunrise"  ,
"Wallpoet"  ,
"Walter Turncoat"  ,
"Warnes"  ,
"Wellfleet"  ,
"Wendy One"  ,
"Wire One"  ,
"Work Sans"  ,
"Yanone Kaffeesatz"  ,
"Yantramanav"  ,
"Yatra One"  ,
"Yellowtail"  ,
"Yeseva One"  ,
"Yesteryear"  ,
"Yrsa"  ,
"Zeyada"  ,
"Zilla Slab"  ,
"Zilla Slab Highlight"
]
//  -------------------------------------------------------------
//  ---Set DOM elements into the javascript after window load ---
//  -------------------------------------------------------------
/*
const Http = new XMLHttpRequest();
const url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCM8prGHcP7hRrejX-WrHzBxx6H-5IPzpQ';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  google_api_json = Http.responseText;
  max = google_api_json.length;
  console.log(`length of json= ${max}`)

}
*/

function set_DOM() {
    light_theme_check = document.getElementById("lightTheme");
    dark_theme_check = document.getElementById("darkTheme");
    type_something = document.getElementById("type_something");
    reset = document.getElementById("reset");
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

function append_font_names(){

  max = font_names.length
  google_href="https://fonts.googleapis.com/css?family="
  for(i=0; i<max; i++){
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
  for(i=0; i<max; i++){
     var fontName = font_names[i];

     var newNode = document.createElement('div');
     var newH2 = document.createElement('h2');
     var newH3 = document.createElement('h3');
     newH2.innerHTML = fontName;
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
  origin_text = '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt';
  element = document.getElementsByClassName("sometext");
  for(i=0; i<element.length; i++){
     childnode = element[i];
     childnode.style.fontSize = new_size;
     childnode.innerHTML = origin_text;
  }

}


//-----------  END reset ---------------------

//----- SET listeners, window.load --------------
function set_listeners() {
    dark_theme_check.addEventListener('click', get_and_set_checks);
    light_theme_check.addEventListener('click', get_and_set_checks);
    reset.addEventListener('click', reset_page_items);


    //create_cards()

}

window.onload = function () {
    set_DOM()
    set_listeners()
    create_cards()
    append_font_names()
}
