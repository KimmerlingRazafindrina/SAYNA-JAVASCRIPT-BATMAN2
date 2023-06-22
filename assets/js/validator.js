window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
        let email = document.getElementById('email');
        if(email.value ==''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut pas etre vide';

        }
        e.preventDefault();
        document.getElementById('popupbox').style.display = 'block';
        window.scrollTo(top);
    });
}
