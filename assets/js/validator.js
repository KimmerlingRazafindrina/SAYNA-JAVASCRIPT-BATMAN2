window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
        let email = document.getElementById('email');
        if(email.value ==''){
            e.preventDefault();
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut pas etre vide';
            invalid.style.color = 'red';

        }
        else {

        }
        let message = document.getElementById('message');
        if(message.value ==''){
            e.preventDefault();
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = "This space should not be empty";
            invalid.style.color = 'blue';
        }
        else{
            
        }


        e.preventDefault();
        document.getElementById('popupbox').style.display = 'block';
        window.scrollTo(top);
    });
}
