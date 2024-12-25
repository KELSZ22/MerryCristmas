const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let counter = 0;

btn.addEventListener('click', (e) => {


    const pos = Math.floor(Math.random() * 300) + 1;
    btn.style.top = pos + 'px';
    btn.style.right = pos + 'px';

    

    counter +=1;
if(counter == 12){

        container.style.display = 'flex';
        e.target.innerText = ""
        console.log(e);
        btn.style.display = 'none';
}
else if(counter == 3){
    e.target.innerText = "Pindot pa"
}
else if(counter == 6){
        e.target.innerText = "Malpit na mario at Maricar"

}

else if(counter == 9){
        e.target.innerText = "Yan na lalabas na "
}

else if(counter == 10){
    e.target.innerText = "Promised"
}

else if(counter == 11){
    e.target.innerText = "Last na Talaga HAHAHA"
}
else {
    e.target.innerText = "Pindot lang"
}



    
});