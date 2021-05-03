var ta = document.getElementById('tx');
var dv = document.getElementsByClassName('des')[0];
var fs = document.getElementById('fs');

function send(){
    let taV = ta.value;
    // dv.innerHTML = taV;
    let CD = document.createElement('div');
    CD.classList.add('txbox');
    let CT = document.createTextNode(taV);
    CD.appendChild(CT);
    dv.appendChild(CD);
}
function blank(){
    document.getElementById('tx').value = '';
}

function scrollB(){
    document.getElementsByClassName('container')[0].scrollTo(0, 1000);
}

function enter(){
    if(event.keyCode == 13){
        send();
        blank();
        scrollB();
    }
}

//

function Ca(){
    let newD = document.createElement('div');
    newD.classList.add('txbox');
    let newA = document.createElement('a');
    newA;
    var urrl = URL.createObjectURL(fs.files[0]);
    newA.setAttribute('href',urrl);
    let newT = document.createTextNode(fs.value);
    newA.appendChild(newT);
    newD.appendChild(newA);
    dv.appendChild(newD);
    fs.value='';
}