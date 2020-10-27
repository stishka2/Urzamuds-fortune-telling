let text = document.getElementById("text");
let input = document.getElementById("input");

let currentScene;




function submit() {
    let answer = input.value.toLowerCase();
    console.log(answer)
    
    
    const scene1 = scenario[currentScene]
    console.log(scene1)
    for(const option of scene1.option1) 

    if(answer === option){
        console.log(scenario.two)
        showSceneTwo(scenario.two)
    };
    const scene2 = scenario[currentScene]
    for(option of scene2.option1)
    if(answer === option) {
        showSceneFour(scenario.four)
    }
    
    for(option of scene2.option2)
    if(answer === option){
        showSceneThree(scenario.three)
    };
    
    input.value = "";
    
};

input.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });

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




let changeText = function(words) {
    text.innerHTML = words
}



let scenario = {
    one: {
        text: "Hello and welcome to the text adventure game. Would you like to start the game?",
        option1: ["yes", "yeah"],
        
    },

    two: {
        text: "You are lost in the woods and you hear someone screaming. What do you do?  Run away or check it out?",
        option1: ["run away", "run"],
        option2: ["check it out", "check", "check it"],
    },

    three: {
        text: "You see a well...."
    },
   
    four: {
        text: "You run so fast until you tripped and sprained your leg",
    },
}




showSceneOne(scenario.one);


