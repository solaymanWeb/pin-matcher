

function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    
    if(pinString.length == 4 ){
        return pin;
        
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
   document.getElementById('display-pin').value = pin;
   
    
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const callInput = document.getElementById('typed-numbers')
    if(isNaN(number)){
        if(number == 'C'){
            callInput.value = '';
        }
    }
    else{
        const previousNumber = callInput.value;
        const newCal = previousNumber + number;
        callInput.value = newCal;
    }
    
    
})


function varifyPin(){
    const pinNumber = document.getElementById('display-pin')
    const pin = pinNumber.value
    const typedNumbers = document.getElementById('typed-numbers').value;
    if(pin == typedNumbers){
        document.getElementById('pin-success').style.display = 'block';
        document.getElementById('pin-error').style.display= 'none';
    }else{
        document.getElementById('pin-error').style.display= 'block';
        document.getElementById('pin-success').style.display = 'none';
    }

}