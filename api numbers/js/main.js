let fact =document.querySelector('.fact');
let factText =document.querySelector('.text');
let moreInfo = document.querySelector('.text-info')

document.getElementById('numberInput').addEventListener('input', () =>{
    let number =document.getElementById('numberInput').value
    if (isNaN(number)){
        fact.style.display ='block';
        factText.innerText='please enter Number value';
    } else if( number!=''){
        fetch(`http://numbersapi.com/${number}/year`)
        .then(response => response.text())
        .then(data => {
            fact.style.display ='block';
            factText.innerText=data;
            moreInfo.innerText='Press Enter and get more facts about this year'
        })
    }    
})

let enter =document.getElementById('enter').addEventListener('click', () => {
    let number =document.getElementById('numberInput').value
    if (isNaN(number)){
        fact.style.display ='block';
        factText.innerText='please enter Number value';
    } else if(number!=''){
            fetch(`http://numbersapi.com/${number}/year`)
            .then(response => response.text())
            .then(data => {
                fact.style.display ='block';
                factText.innerText=data;
                moreInfo.innerText='Press Enter and get more facts about this year'
            })
        }  
    })
const close =document.getElementById('close').addEventListener('click', () => {
        let number =document.getElementById('numberInput')
        fact.style.display ='none';
        number.value=''
})
 