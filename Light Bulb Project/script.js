const button= document.getElementById('btn');
const bulb= document.getElementById('bulb');
btn.addEventListener('click', pressButton);

function pressButton(e){
    if(btn.textContent.includes("on")){
        btn.textContent="Turn off";
        bulb.src="img/on.jpg";
    }
    else{
        btn.textContent="Turn on";
        bulb.src="img/off.jpg";
    }
}