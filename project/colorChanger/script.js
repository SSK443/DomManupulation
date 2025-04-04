const allButton =document.querySelectorAll('button');
console.log(allButton);

const body=document.querySelector('body');

allButton.forEach((allButton)=>{
      allButton.addEventListener('click',(event)=>{
            console.log(event);
            console.log(event.target);
            
            if (event.target.id === "grey") {
              body.style.backgroundColor = event.target.id;
            }else if (event.target.id === "red") {
              body.style.backgroundColor = event.target.id;
            }else if(event.target.id==="blue"){
                  body.style.backgroundColor=event.target.id;
            }else if(event.target.id==="orange"){
                  body.style.backgroundColor = event.target.id;

            }else if(event.target.id==='pink'){
                  body.style.backgroundColor = event.target.id;

            }
      })
})
