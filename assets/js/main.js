
var args = [];
var InGuessingGame = false;
var RandNum;
var commands = {
    "Version": ()=>{
        Log("The Current Version is 0.0.1")
    },
    "Clear": Clear,
    "Loop": ()=>{
        
        for (let index = 0; index < parseInt(args[0]); index++) {
            Log("Itration - "+index)
        }
    },

    "Do-While": ()=>{
        var limit = args[0]
        var x = -1
        do {
            Log("Do While Itration - "+x)
            x++
        } while (x < limit);
    },
    "Number-Guy":()=>{
        if(!args[0] || !args[1]){
            LogError("Required Parameters not Set")
            LogHint("Write 2 Numbers like <br> Number-Guy 0 20")
            return;
        }
        RandNum = getRandomInt(args[0],args[1]); // A number between args[0] args [1]
        InGuessingGame = true;
        LogHint(`<h3>Hello Welcome</h3><br>NumberGuy: Please Guess a number Between ${args[0]} and ${args[1]}
            <br><b>Example:</b><br>
            Guess 5` )
        
    },
    "Guess":()=>{
        if(args[0] != RandNum){
            LogError("Wrong Number");
        }else{
            Log("<h4 style='color:green'>You Win</h4>")
        }
    }
    
}


var output = document.getElementById("output");
var command_input = document.getElementById("command-input");

function ExecuteCommand(){
    try {
        if(!command_input.value){
            LogError("Invalid Command")
        }else{
            Log("$AITECH-TERMINAL~ "+command_input.value)
            
            let action = commands[command_input.value.split(" ")[0]];
            if(action){
                // Fetch Args
                var input = command_input.value.split(" ");
                input.shift()
                args  = input;
                // Call Command
                action();
            }else{
                LogError("Error: Command Not Found! "+action)
                LogHint("You can look at The Hints Panel To See The List of Commands You can Run :) ")
            }
            ResetInput();
        }
        
    } catch (error) {
        console.error(error)
        return false;
    }
    return false;
}


function Log(data){
    output.innerHTML += "<br>" +data
}
function Clear(){
    output.innerHTML = ""
}
function ResetInput(){
    command_input.value = ""
}
function LogError(data){
    output.innerHTML += `<br>
            <span style="color: red; border:solid 1px red; margin 10px; text-transform: uppercase;"  >
            ${data}
            </span>
        `  
}
function LogHint(data){
    output.innerHTML += `<br>
            <span style="color: yellow; border:solid 1px yellow; margin 10px; text-transform: uppercase;"  >
            ${data}
            </span>
        `  
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}