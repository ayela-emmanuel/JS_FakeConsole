
var output = document.getElementById("output");
var command_input = document.getElementById("command-input");

function ExecuteCommand(){
    if(!command_input.value){
        LogError("Invalid Command")
    }else{
        Log(command_input.value)
        ResetInput();
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
