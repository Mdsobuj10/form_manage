const user_create = document.getElementById('user_create');




user_create.onsubmit = (e) =>{
    e.preventDefault();

     let form_data = new FormData(e.target);

     const data = Object.fromEntries(form_data.entries())
     console.log(data);
     
   
}