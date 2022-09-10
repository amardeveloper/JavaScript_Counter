var counter = document.body.querySelector(".counter");
var message = document.getElementsByClassName("followers")[0];

let count = 1;

setInterval(() => {
    if(count < 400){
        count++;
        counter.innerHTML = count;
    }
}, 1);

setTimeout(() => {
    message.innerHTML = "Followers completed !!!";
    document.getElementsByClassName("followers")[0].style.color = '#B9345A';
    document.getElementsByClassName("followers")[0].style.fontSize = '60px';
    document.getElementsByClassName("followers")[0].style.fontWeight = '800';
    document.getElementsByTagName("img")[0].style.border = "8px solid #B9345A";
    document.getElementsByTagName("img")[0].style.padding = "2px";
    
}, 2350);