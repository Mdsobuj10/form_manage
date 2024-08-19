const user_create = document.getElementById('user_create');




user_create.onsubmit = (even) =>{
    even.preventDefault()
    let name = document.getElementById('name');
    let contact = document.getElementById('contact');
    let email = document.getElementById('email');
    

     if (name.value == '' || contact.value == '' || email.value == '' ) {
          console.log('must filap');
          
     }else{
        console.log('stable data');
        
     }
    
}