/** gets div where text will be displayed 
 * @type {HTMLElement}
*/
let text = document.getElementById("text");
/** gets text input 
 * @type {HTMLElement}
*/
let input = document.getElementById("input");
/** empty variable for current scene. Current scene will be set later in a functions showScene... */
let currentScene;



/** Submits input value on a button click */
function submit() {
    /** sets input value to lower case */
    let answer = input.value.toLowerCase();
    console.log(answer)
    
    
    if(answer === "right" && currentScene == "one"){
        console.log(scenario.two)
        showSceneTwo(scenario.two)
    }
        
    if(answer === "pink" && currentScene == "two"){
        showSceneThree(scenario.three)
        
    }

    if(answer === "blue" && currentScene == "two"){
        showSceneThree(scenario.four)
    }

    if(answer === "grey" && currentScene == "two"){
        showSceneThree(scenario.five)
    };

    if(answer === "oval" && currentScene == "three"){
        showSceneFour(scenario.six)
    }

    if(answer === "rectangle" && currentScene == "three"){
        showSceneFour(scenario.seven)
    }

    if(answer === "spork" && currentScene == "three"){
        showSceneFour(scenario.eight)
    };

    if(answer === "left" && currentScene == "one"){
        showSceneFive(scenario.nine)
    }

    if(answer === "llama" && currentScene == "five"){
        showSceneSix(scenario.ten)
    }

    if(answer === "alpaca" && currentScene == "five"){
        showSceneSix(scenario.eleven)
    }

    if(answer === "iguana" && currentScene == "five"){
        showSceneSix(scenario.twelve)
    }

    if(answer === "sushi" && currentScene == "six"){
        showSceneSeven(scenario.thirteen)
    }

    if(answer === "burger" && currentScene == "six"){
        showSceneSeven(scenario.fourteen)
    }

    if(answer === "salad" && currentScene == "six"){
        showSceneSeven(scenario.fifteen)
    }

    
    input.value = "";
    
};

/** Clicks button with Enter key */
input.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
});

/** Displays the scenario and sets the current scene */
let showSceneOne = function(scenarios) {
    currentScene = "one";
    changeText(scenarios.text)
}

let showSceneTwo = function(scenarios) {
    currentScene = "two";
    changeText(scenarios.text)
}

let showSceneThree = function(scenarios) {
    currentScene = "three";
    changeText(scenarios.text)
}

let showSceneFour = function(scenarios) {
    currentScene = "four";
    changeText(scenarios.text)
}

let showSceneFive = function(scenarios){
    currentScene = "five";
    changeText(scenarios.text)
}
let showSceneSix = function(scenarios){
    currentScene = "six";
    changeText(scenarios.text)
}
let showSceneSeven = function(scenarios){
    currentScene = "seven";
    changeText(scenarios.text)
}





/** Displays text in the website 
 * @param {string} words
*/
let changeText = function(words) {
    text.innerHTML = words
}



let scenario = {
    one: {
        text: "Hello and welcome to Urzamud’s one dollar fortune telling! Please pick one of the two cards in front of you. Left, right.",
        option1: ["right"],
        option2: ["left"]
        
    },
    //right card
    two: {
        text: "Oh no, you’ve drawn the wandering pigeon! This is very unfortunate, according to this you are about to meet an unpleasant end. Maybe we can save you! Please pick another card. Pink, Blue, Grey.",
        option1: ["pink"],
        option2: ["blue"],
        option3: ["grey"],
        
    },

    //pink
    three: {
        text: "The upside down mirror! The fates smile upon you! The cards say that you will be able to escape your unpleasant end, but only if you make a great sacrifice. To find out what that sacrifice is please pick one more card. Oval, rectangle, spork.",
        option1: ["oval"],
        option2: ["rectangle"],
        option3: ["spork"],
    },

    //blue
    four: {
        text: "You have chosen the hexagonal spider plant. A hexagon has six sides and a spider has eight legs and plants are mostly green. So not only are you going to be pecked to death by six eight legged birds but you’re also going to forget to water your plants! We have one more chance to save you. Pick one more card. Oval, rectangle, spork.",
        option1: ["oval"],
        option2: ["rectangle"],
        option3: ["spork"],
    },

    //grey
    five: {
        text:"I’m sorry my dear customer, but there is nothing left for you here. You have drawn the snapped tennis racket. Your fate was decided long before you were born. No refunds, doors on the wall. ",
        
    },

    //oval
    six: {
        text: "I have good news and bad news. You have picked the lopsided beach house. The good news is that you will not meet your end alone, your favorite waiter will be joining you in the afterlife. The bad news is that you’re still coming to an end. No refunds, please don’t come back.",
    },

    //rectangle
    seven: {
        text: "The inverted staircase? The fates demand that you give away all of your current possessions, change your name to Kyle, and become a poet. Thank you for coming to Urzamud's one dollar fortune telling. No refunds.",
    },

    //spork
    eight: {
        text: "What a surprise! It’s the flying housecat! Wonderful news! Instead of meeting a horrible end you will instead live out the rest of your days surrounded by small flying furry creatures with daggers for hands! I hope you have had an enlightening experience. No refunds.",
    },

    //left card
    nine: {
        text: "In all of my 20 minutes of doing this not once has a customer drawn the poorly taxidermied barracuda. According to this you shall live next to a family of very rich Labradoodles, but they shall not allow you to pet them. Everyone else can pet them, but not you. Please pick another card. Llama, alpaca, iguana.",
        option1: ["llama"],
        option2: ["alpaca"],
        option3: ["iguana"],
    },

    //llama
    ten: {
        text:"Jealous dandelion. The gods deem that you shall have many plant pots but never enough plant soil to put plants in them! In other words, your hopes and dreams will forever be out of your reach because of your addiction to competitive fishing. Please pick another card. Sushi, burger, salad.",
        option1: ["sushi"],
        option2: ["burger"],
        option3: ["salad"],
    },

    //alpaca
    eleven: {
        text: "The twelve roots of insomnia, a very mystical card! Dearest customer your luck is about to make a sharp left turn unless you follow the road signs of love! I see great happiness in your future, but only if you pick another card. Sushi, burger, salad.",
        option1: ["sushi"],
        option2: ["burger"],
        option3: ["salad"],
    },

    //iguana
    twelve: {
        text: "How could I have been so blind, you have drawn the lair of the missing socks. You must leave this place at once! Get out of my poorly cleaned cave and never return! No refunds!",
    },

    //sushi
    thirteen: {
        text: "Forget everything that the cards have told you up until now. Remember that family of labradoodles, turns out that they are actually a family of shiny ghosts who are plotting to steal your family fortune! I suggest you call my cousin Uggith and have them come and take care of these sparkly thieves. Thank you for choosing Urzamud’s for all your fortune needs. No refunds.",
        
    },

    //burger
    fourteen: {
        text: "Love is in the air and so is the card Flock of geese shaped like heart. Just like the geese you have been looking for love in all the wrong directions. For better chances at love the cards say to move south, and to call my mother in law for me. Her birthday is tomorrow. She likes fish and my tears. I hope to see you again! No refunds.",

    },

    //salad
    fifteen: {
        text: "The fan of chainsaws. The cards predict that at least one of your dreams will come true! But not any of the big or important ones. No, those ones are going to be ripped to shreds by the chainsaws of life. At least you’ll be able to use those shreds as a fire starter when you end up living under a bridge. I wish you a pleasant evening. No refunds.",

    },
}



/** Starts the SceneOne, which is scenario one, on the page load */
showSceneOne(scenario.one);


