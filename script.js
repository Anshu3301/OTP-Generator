let button = document.querySelector("button");
let num='';
let showOTP = document.querySelector('#otp');

button.addEventListener('click',()=>{
    num='';
    for (let i=0; i<6; i++){
        num = num + `${Math.floor(((Math.random())*10))}`;
        if(num =='0'){
            num = '4';
        }
    }
    showOTP.style.visibility =  'visible';
    showOTP.innerHTML = `${num}`;
})