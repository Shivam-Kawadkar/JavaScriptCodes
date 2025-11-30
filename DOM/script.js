let h2= document.querySelector('h2');
h2.innerText=h2.innerText + " OR banayega new  new Websites ";

let divs = document.querySelectorAll('.box');
let idx = 1;
for(div of divs)
{
    div.innerText = `Shivam Kawadar ${idx}`;
    idx++;
}
