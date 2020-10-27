let text = document.getElementById("text");
let input = document.getElementById("input");

let currentScene;

function submit() {
    console.log(input.value)
    if(input.value === "yes" && currentScene == 1){
        console.log(senario.two)
        sceneTwo(senario.two)
    };
    
    if(input.value === "run away" && currentScene == 2) {
        sceneFour(senario.four)
    }
    
    else if(input.value === "check it out" && currentScene == 2){
        sceneThree(senario.three)
    };
    
    input.value = "";
    
};

input.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });

let sceneOne = function(senarios) {
    currentScene = 1;
    changeText(senarios.text)
}

let sceneTwo = function(senarios) {
    currentScene = 2;
    changeText(senarios.text)
}

let sceneThree = function(senarios) {
    currentScene = 3;
    changeText(senarios.text)
}

let sceneFour = function(senarios) {
    currentScene = 4;
    changeText(senarios.text)
}


// let advanceTo = function(senarios) {
//     changeText(senarios.text)
// };

let changeText = function(words) {
    text.innerHTML = words
}

let senario = {
    one: {
        text: "Hello and welcome to the text adventure game. Would you like to start the game?",
        option1: ["yes", "Yes", "yeah"],
        
    },

    two: {
        text: "You are lost in the woods and you hear someone screeming. Waht do you do?  Run away or check it out?",
    },

    three: {
        text: "You see a well...."
    },
   
    four: {
        text: "You run so fast until you triped and sprined your leg",
    },
}



// advanceTo(senario.one);
sceneOne(senario.one);

