
var commands = {
    "Version": ()=>{
        Log("The Current Version is 0.0.1")
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
            let action = commands[command_input.value];
            if(action){
                action();
            }else{
                LogError("Error: Command Not Found!")
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