/* let runningTotal = 0;
let buffer = '0';
let previousOperator;

const displayValue = document.querySelector('.display-value');

document.querySelector('.btn').addEventListener('click', function (e) {
    buttonClick(event.target.innerText)   
})

function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerender()
}

function handleSymbol(value) {
    switch (value) {
        case "C":
            buffer = "0"
            previousOperator == null;
            runningTotal = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0"
            }else{
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case "=":
            if (previousOperator == null){
                return;
            }else{
                flushOperation(parseInt(buffer));
                previousOperator=null;
                buffer = " "+ runningTotal;
                runningTotal = 0;
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleNumber(value) {
    if (buffer == '0') {
        buffer = value;
    }else{
        buffer += value;
    }   
}
function handleMath(value){
    const intBuffer = parseInt(buffer);
    if (runningTotal==0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer ='0';
}
function flushOperation(intBuffer){
    if (previousOperator == '+') {
        runningTotal += intBuffer;
    }else if (previousOperator == 'x') {
        runningTotal *= intBuffer;
    }else if (previousOperator == '-') {
        runningTotal -= intBuffer;
    }else{
        runningTotal /= intBuffer;
    }
}
function rerender(){
    displayValue.innerText = buffer;
} */

let buffer = "0";
let runningTotal = 0;
let previousOperator;

const displayValue = document.querySelector('.display-value');

document.querySelector(".btn").addEventListener('click', function (event) {
    buttonClick(event.target.innerText)
});

function buttonClick(value) {
    if(isNaN (parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}
function handleNumber(value){
    if (buffer == "0") {
        buffer = value;
    }else{
        buffer += value;
    }
}
function handleSymbol(value){
    switch (value) {
        case "C":
            buffer = "0"
            previousOperator=null;
            runningTotal=0;
            break;
        case "=":
            if (previousOperator == null) {
                return;
            }else{
                flushOperation(parseInt(buffer));
                previousOperator=null;
                buffer = "" + runningTotal;
                runningTotal=0;
            }
            break;
        case "←":
            if (buffer.length == 1) {
                buffer = "0"
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
        default:
            handleMath(value);
            break;
    }
}
function handleMath(value){
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal=intBuffer;
    }else {
        flushOperation(intBuffer);
    }
    previousOperator=value;
    buffer ="0";
}
function flushOperation(intBuffer){
    if (previousOperator == "+") {
        runningTotal += intBuffer 
    } else if ( previousOperator == "-"){
        runningTotal -= intBuffer;
    } else if ( previousOperator == "x"){
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}
function rerender() {
    displayValue.innerText = buffer;
}