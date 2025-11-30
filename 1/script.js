// ------------------------------
// Preklady (SK / EN)
// ------------------------------
const i18n = {
    sk: {
        hlavicka: "✨ Čo robiť, keď sa nudíš?",
        labelKategoria: "Vyber si kategóriu:",
        btn: "🎲 Ukáž mi nápad",
        kategorie: {
            jedno: "Úplne jedno",
            zadarmo: "Zadarmo",
            peniaze: "Za peniaze",
            indoor: "Indoor (vnútri)",
            outdoor: "Outdoor (vonku)",
            sam: "Pre jedného",
            kamarati: "S kamarátmi",
            odvazni: "Pre odvážnych 🔥"
        }
    },
    en: {
        hlavicka: "✨ Things to do when you're bored",
        labelKategoria: "Choose a category:",
        btn: "🎲 Show me an idea",
        kategorie: {
            jedno: "Doesn't matter",
            zadarmo: "Free",
            peniaze: "Paid",
            indoor: "Indoor",
            outdoor: "Outdoor",
            sam: "Solo",
            kamarati: "With friends",
            odvazni: "For the brave 🔥"
        }
    }
};

// ------------------------------
// Detekcia jazyka používateľa
// ------------------------------
const userLang = navigator.language.startsWith('en') ? 'en' : 'sk';
const texts = i18n[userLang];

// ------------------------------
// Aktualizácia textov na stránke
// ------------------------------
document.getElementById("hlavicka").textContent = texts.hlavicka;
document.getElementById("labelKategoria").textContent = texts.labelKategoria;
document.getElementById("btn").textContent = texts.btn;

const select = document.getElementById("kategoria");
for (const [value, label] of Object.entries(texts.kategorie)) {
    select.querySelector(`option[value="${value}"]`).textContent = label;
}

// ------------------------------
// Nápady - 20 unikátnych pre každú kategóriu
// (skrátka SK verzie pre ukážku; doplniť EN podľa potreby)
// ------------------------------
// ------------------------------
// Nápady - 20 unikátnych pre každú kategóriu
// SK a EN verzie
// ------------------------------
const napady = {
    sk: {
        jedno: [
            "Prečítaj si knihu, ktorú si dlhšie odkladal.",
            "Vyskúšaj nové recepty a uvar niečo chutné.",
            "Urob si prechádzku v parku a pozoruj prírodu.",
            "Pusti si obľúbený film alebo seriál.",
            "Napíš krátky príbeh alebo báseň.",
            "Zorganizuj svoj pracovný stôl alebo izbu.",
            "Vyskúšaj meditáciu alebo dychové cvičenia.",
            "Zahraj si videohru, ktorú si nehral dlho.",
            "Vytvor si playlist nových pesničiek.",
            "Skús nakresliť alebo namaľovať niečo.",
            "Uč sa nové slovíčka z cudzieho jazyka.",
            "Pozri si dokumentárny film o niečom, čo ťa zaujíma.",
            "Naplánuj si výlet alebo víkendový program.",
            "Vyrob niečo DIY – napr. dekoráciu do izby.",
            "Skús puzzle alebo logickú hru.",
            "Zahraj si stolovú hru s rodinou alebo kamarátmi.",
            "Vytvor si fotoalbum alebo si uprav fotky.",
            "Zistite nové hudobné žánre.",
            "Vytvor si denník a zapisuj svoje myšlienky.",
            "Urob si relaxačný večer s čajom a hudbou."
        ],
        zadarmo: [
            "Prechádzka v lese alebo parku.",
            "Cvičenie doma bez pomôcok.",
            "Čítanie kníh z knižnice.",
            "Pozeranie dokumentov na YouTube.",
            "Maľovanie alebo kreslenie doma.",
            "Meditácia a relaxácia.",
            "Spievanie alebo hranie na hudobný nástroj.",
            "Zber prírodných materiálov na dekoráciu.",
            "Behanie alebo jogging v okolí.",
            "Fotografovanie okolia mobilom.",
            "Písanie básní alebo príbehov.",
            "Organizovanie izby alebo skrine.",
            "Učenie sa nových slovíčok online.",
            "Bezplatné online kurzy alebo tutoriály.",
            "Tvorba playlistu hudby.",
            "Pozorovanie hviezd večer.",
            "Návšteva múzea s voľným vstupom.",
            "Usporiadanie filmového večera doma.",
            "Záhradkárčenie alebo starostlivosť o rastliny.",
            "Rozhovor s priateľom online alebo telefonicky."
        ],
        peniaze: [
            "Navštív nové kino alebo divadlo.",
            "Zájdite na večeru do reštaurácie.",
            "Vyskúšaj novú športovú aktivitu s trénerom.",
            "Kúp si novú knihu alebo komiks.",
            "Zúčastni sa plateného workshopu alebo kurzu.",
            "Vyskúšaj escape room s kamarátmi.",
            "Kúp si lístok na koncert alebo festival.",
            "Vyskúšaj novú kaviareň alebo cukráreň.",
            "Zober si lístok do aquaparku alebo wellness.",
            "Prenajmi bicykel alebo kolobežku na deň.",
            "Kúp si vstupenku na výstavu alebo galériu.",
            "Objednaj si online kurz alebo masterclass.",
            "Zaplať si športovú aktivitu ako bowling.",
            "Vyskúšaj platenú degustáciu jedla alebo vína.",
            "Navštív tematický park alebo atrakciu.",
            "Kúp si nový doplnok alebo gadget.",
            "Zober si lístok na filmový festival.",
            "Vyskúšaj platené VR alebo herné centrum.",
            "Prenajmi si kanoe alebo čln na hodinu.",
            "Kúp si lístok na koncert hudobnej skupiny."
        ],
        indoor: [
            "Urob si maratón svojich obľúbených filmov.",
            "Uč sa novú techniku kreslenia.",
            "Hraj stolové alebo kartové hry.",
            "Vyskúšaj nové recepty v kuchyni.",
            "Urob si cvičenie doma.",
            "Uprav si izbu alebo byt.",
            "Vytvor vlastný hudobný playlist.",
            "Počúvaj podcast alebo audioknihu.",
            "Medituj alebo rob relaxačné cvičenia.",
            "Napíš denník alebo blog.",
            "Uč sa nové jazykové frázy.",
            "Zahraj si videohru.",
            "Urob si mini DIY projekt.",
            "Skús kreatívne písanie alebo poéziu.",
            "Vytvor si scrapbook.",
            "Počúvaj hudbu a tancuj.",
            "Rieš puzzle alebo logickú hru.",
            "Urob si domácu wellness procedúru.",
            "Pozeraj dokumentárne filmy.",
            "Experimentuj s fotografovaním doma."
        ],
        outdoor: [
            "Prechádzka v parku alebo prírode.",
            "Beh alebo jogging na čerstvom vzduchu.",
            "Jazda na bicykli.",
            "Vyskúšaj športy ako futbal alebo basketbal.",
            "Piknik s rodinou alebo kamarátmi.",
            "Fotografovanie prírody.",
            "Pozorovanie vtákov alebo zvierat.",
            "Záhradkárčenie alebo starostlivosť o rastliny.",
            "Vyraz na turistiku.",
            "Inline korčule alebo skateboarding.",
            "Navštív miestny trh alebo farmu.",
            "Skúšanie geocachingu.",
            "Urob športové cvičenia vonku.",
            "Vyskúšaj vonkajší workout park.",
            "Navštív miestny park s atrakciami.",
            "Urob kemping alebo piknik.",
            "Pozorovanie západu slnka.",
            "Vyskúšaj rybolov alebo kanoe.",
            "Zorganizuj vonkajšiu hru s kamarátmi.",
            "Navštív historické miesto alebo pamiatku."
        ],
        sam: [
            "Prečítaj si knihu alebo komiks.",
            "Vyskúšaj meditáciu alebo relaxáciu.",
            "Uč sa nový jazyk online.",
            "Počúvaj podcast alebo audioknihu.",
            "Napíš denník alebo krátky príbeh.",
            "Cvič doma alebo vonku sám.",
            "Vytvor si vlastný playlist hudby.",
            "Skús kreslenie alebo maľovanie.",
            "Urob si puzzle alebo logickú hru.",
            "Pozri film alebo seriál, ktorý máš rád.",
            "Experimentuj s receptami v kuchyni.",
            "Vyrob si DIY projekt.",
            "Uprav si pracovný stôl alebo izbu.",
            "Fotografuj svoje okolie.",
            "Pozoruj prírodu alebo hviezdy.",
            "Skús učenie sa nových slovíčok.",
            "Naplánuj si budúci víkend.",
            "Vytvor si scrapbook alebo fotoalbum.",
            "Urob si relaxačný večer s čajom.",
            "Zahraj si sólovú videohru."
        ],
        kamarati: [
            "Zorganizujte spoločenskú hru doma.",
            "Navštívte kino alebo divadlo spolu.",
            "Urobte piknik v parku.",
            "Skúste escape room alebo únikovú hru.",
            "Zahrajte futbal alebo basketbal vonku.",
            "Urobte spoločný DIY projekt.",
            "Zorganizujte karaoke večer.",
            "Navštívte miestnu kaviareň alebo cukráreň.",
            "Urobte spoločný workout vonku.",
            "Navštívte festival alebo trh.",
            "Urobte spoločnú prechádzku alebo turistiku.",
            "Hrajte stolové hry spolu.",
            "Skúste spoločné varenie nových receptov.",
            "Pozerajte filmový maratón spolu.",
            "Navštívte výstavu alebo galériu.",
            "Vytvorte spoločný playlist hudby.",
            "Fotografujte sa spolu a spravte album.",
            "Skúste nové športy spolu.",
            "Zorganizujte kemping alebo grilovanie.",
            "Urobte spoločnú dobrovoľnícku aktivitu."
        ],
        odvazni: [
            "Vyskúšaj bungee jumping alebo zipline.",
            "Skús horolezectvo alebo indoor climbing.",
            "Urob nočnú túru do lesa.",
            "Vyskúšaj paintball alebo airsoft.",
            "Zúčastni sa adrenalínového športu.",
            "Vyskúšaj surfovanie alebo paddleboarding.",
            "Jazda na motorke mimo mesta.",
            "Skús parachuting alebo skydiving.",
            "Urob extrémny bicyklový trail.",
            "Vyskúšaj horúce pramene alebo saunu v divočine.",
            "Skús wakeboarding alebo kiteboarding.",
            "Vyskúšaj skúsenosť v escape room pre odvážnych.",
            "Urob speedboat výlet.",
            "Zúčastni sa outdoor prekážkovej dráhy.",
            "Skús lezenie po skalách.",
            "Vyskúšaj extrémny šport podľa vlastného výberu.",
            "Urob nočný kemping s minimálnym vybavením.",
            "Vyskúšaj rafting alebo kanoe na rieke.",
            "Skús adrenalínové paraglidingové lietanie.",
            "Urob pretek v mountainbikingu."
        ]
    },
    en: {
        jedno: [
            "Read a book you’ve been putting off.",
            "Try cooking a new recipe.",
            "Take a walk in the park and enjoy nature.",
            "Watch your favorite movie or series.",
            "Write a short story or poem.",
            "Organize your desk or room.",
            "Try meditation or breathing exercises.",
            "Play a video game you haven't played in a while.",
            "Create a new music playlist.",
            "Draw or paint something.",
            "Learn new words in a foreign language.",
            "Watch a documentary on something interesting.",
            "Plan a weekend trip or outing.",
            "Make a DIY decoration.",
            "Solve a puzzle or logic game.",
            "Play a board game with family or friends.",
            "Create a photo album or organize photos.",
            "Discover new music genres.",
            "Start a journal and write your thoughts.",
            "Have a relaxing evening with tea and music."
        ],
        zadarmo: [
            "Take a walk in the park or forest.",
            "Exercise at home without equipment.",
            "Read books from the library.",
            "Watch free documentaries on YouTube.",
            "Draw or paint at home.",
            "Practice meditation and relaxation.",
            "Sing or play a musical instrument.",
            "Collect natural materials for decoration.",
            "Go running or jogging nearby.",
            "Take photos of your surroundings.",
            "Write poems or stories.",
            "Organize your room or closet.",
            "Learn new words online.",
            "Try free online courses or tutorials.",
            "Create a music playlist.",
            "Star-gaze in the evening.",
            "Visit a museum with free entry.",
            "Have a movie night at home.",
            "Do gardening or care for plants.",
            "Chat with a friend online or by phone."
        ],
        peniaze: [
            "Go to a new cinema or theater.",
            "Have dinner at a restaurant.",
            "Try a new sport with a coach.",
            "Buy a new book or comic.",
            "Attend a paid workshop or course.",
            "Try an escape room with friends.",
            "Buy a concert or festival ticket.",
            "Try a new café or pastry shop.",
            "Go to a waterpark or wellness center.",
            "Rent a bike or scooter for a day.",
            "Buy a ticket to an exhibition or gallery.",
            "Enroll in an online course or masterclass.",
            "Pay for a sports activity like bowling.",
            "Try a paid food or wine tasting.",
            "Visit a theme park or attraction.",
            "Buy a new accessory or gadget.",
            "Attend a film festival.",
            "Try a paid VR or gaming center.",
            "Rent a canoe or boat for an hour.",
            "Buy a concert ticket for a music band."
        ],
        indoor: [
            "Have a movie marathon of your favorites.",
            "Learn a new drawing technique.",
            "Play board or card games.",
            "Try new recipes in the kitchen.",
            "Exercise at home.",
            "Reorganize your room or apartment.",
            "Create a music playlist.",
            "Listen to podcasts or audiobooks.",
            "Meditate or do relaxation exercises.",
            "Write a diary or blog.",
            "Learn new language phrases.",
            "Play video games.",
            "Try a small DIY project.",
            "Practice creative writing or poetry.",
            "Create a scrapbook.",
            "Listen to music and dance.",
            "Solve puzzles or logic games.",
            "Have a home spa day.",
            "Watch documentaries.",
            "Experiment with photography at home."
        ],
        outdoor: [
            "Take a walk in the park or nature.",
            "Go running or jogging outside.",
            "Ride a bicycle.",
            "Try sports like football or basketball.",
            "Have a picnic with family or friends.",
            "Take nature photographs.",
            "Observe birds or animals.",
            "Do gardening or care for plants.",
            "Go hiking.",
            "Try inline skating or skateboarding.",
            "Visit a local market or farm.",
            "Try geocaching.",
            "Do outdoor exercises.",
            "Try an outdoor workout park.",
            "Visit a local park with attractions.",
            "Have camping or a picnic.",
            "Watch the sunset.",
            "Try fishing or canoeing.",
            "Organize outdoor games with friends.",
            "Visit a historical site or monument."
        ],
        sam: [
            "Read a book or comic.",
            "Try meditation or relaxation.",
            "Learn a new language online.",
            "Listen to a podcast or audiobook.",
            "Write a journal or short story.",
            "Exercise at home or outdoors alone.",
            "Create your own music playlist.",
            "Try drawing or painting.",
            "Do a puzzle or logic game.",
            "Watch a movie or series you like.",
            "Experiment with new recipes in the kitchen.",
            "Make a DIY project.",
            "Reorganize your desk or room.",
            "Take photos of your surroundings.",
            "Observe nature or stars.",
            "Learn new vocabulary words.",
            "Plan your next weekend.",
            "Create a scrapbook or photo album.",
            "Have a relaxing evening with tea.",
            "Play a solo video game."
        ],
        kamarati: [
            "Organize a board game night at home.",
            "Go to the cinema or theater together.",
            "Have a picnic in the park.",
            "Try an escape room.",
            "Play football or basketball outside.",
            "Do a DIY project together.",
            "Have a karaoke night.",
            "Visit a local café or pastry shop.",
            "Do a workout together outdoors.",
            "Visit a festival or market.",
            "Take a walk or hike together.",
            "Play board games together.",
            "Try cooking new recipes together.",
            "Have a movie marathon together.",
            "Visit an exhibition or gallery.",
            "Create a shared music playlist.",
            "Take photos together and make an album.",
            "Try new sports together.",
            "Go camping or have a barbecue.",
            "Do a volunteer activity together."
        ],
        odvazni: [
            "Try bungee jumping or zipline.",
            "Go rock climbing or indoor climbing.",
            "Do a night hike in the forest.",
            "Try paintball or airsoft.",
            "Participate in an adrenaline sport.",
            "Try surfing or paddleboarding.",
            "Go on a motorcycle ride out of town.",
            "Try parachuting or skydiving.",
            "Do an extreme biking trail.",
            "Try hot springs or wilderness sauna.",
            "Try wakeboarding or kiteboarding.",
            "Try an escape room for thrill-seekers.",
            "Take a speedboat trip.",
            "Participate in an outdoor obstacle course.",
            "Try rock climbing.",
            "Try an extreme sport of your choice.",
            "Do a night camping with minimal gear.",
            "Try rafting or canoeing on a river.",
            "Try paragliding for adrenaline.",
            "Do a mountain biking race."
        ]
    }
};


// ------------------------------
// Prehodenie nápadov, aby sa neopakovali, dokým sa nevyčerpajú
// ------------------------------
const napadyPool = JSON.parse(JSON.stringify(napady));

function getRandomIdea(kategoria){
    if(napadyPool[userLang][kategoria].length === 0){
        // reset, ak sa všetky vyčerpali
        napadyPool[userLang][kategoria] = [...napady[userLang][kategoria]];
    }
    const list = napadyPool[userLang][kategoria];
    const index = Math.floor(Math.random() * list.length);
    const idea = list.splice(index,1)[0];
    return idea;
}

// ------------------------------
// Generátor nápadov
// ------------------------------
document.getElementById("btn").onclick = function () {
    const kategoria = document.getElementById("kategoria").value;
    const napadText = getRandomIdea(kategoria);

    const p = document.getElementById("napad");
    p.textContent = napadText;

    p.classList.remove("hidden");
    p.classList.remove("visible");

    setTimeout(() => p.classList.add("visible"), 20);
};

// ------------------------------
// Tmavý režim
// ------------------------------
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
    toggle.innerHTML = document.body.classList.contains("dark")
        ? '<span class="material-symbols-outlined">light_mode</span>'
        : '<span class="material-symbols-outlined">dark_mode</span>';
};


            
        



