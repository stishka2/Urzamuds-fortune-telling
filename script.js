let text = document.getElementById("text");
let input = document.getElementById("input");

let currentScene;



/** Submits input value on a button click */
function submit() {
    /** sets input value to lower case */
    let answer = input.value.toLowerCase();
    console.log(answer)
    
    /** Sets shown scenario to current scene */
    const scene1 = scenario[currentScene]
    console.log(scene1)
    /** Loops option1 from scenario one */
    for(const option1FromScenarioOne of scene1.option1) 
    /** Checks if input value (answer) is one of the options from scenario.one.option1 */
    if(answer === option1FromScenarioOne){
        console.log(scenario.two)
        showSceneTwo(scenario.two)
    };
    const scene2 = scenario[currentScene]
    for(option1FromScenarioTwo of scene2.option1)
    if(answer === option1FromScenarioTwo) {
        showSceneFour(scenario.four)
    }
    
    for(option2FromScenarioTwo of scene2.option2)
    if(answer === option2FromScenarioTwo){
        showSceneThree(scenario.three)
    };
    
    input.value = "";
    
};

/** Clicks button with Enter key */
input.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
});

/** Displays the scenario
 * @param {Object} scenario - contains scenarios
 * @param {Object} scenario.one - scenario of possible scenarios
 * @param {string} scenario.one.text - scenario text, which is displayed on the screen
 * @param {string[]} scenario.one.option1 - scenario options
 */
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



/** Displays text in the website 
 * @param {string} words
*/
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



/** Starts the SceneOne, which is scenario one, on the page load */
showSceneOne(scenario.one);


