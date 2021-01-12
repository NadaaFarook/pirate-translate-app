var input = document.getElementById('toTranslate')
var submit = document.getElementById('submit')
var output = document.querySelector('#outputt')

submit.addEventListener('click' , function(){

    fetch(`https://api.funtranslations.com/translate/pirate.json?text=${input.value}`)
    .then(res=>res.json())
    .then(json=> {
    output.innerHTML = json.contents.translated
    console.log(json);
    }
    ).catch(()=>{
        alert('There is an error. Please try again after some time')
    
        }    )
    
})