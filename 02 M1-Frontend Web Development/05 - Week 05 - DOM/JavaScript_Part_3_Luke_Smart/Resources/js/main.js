let m = document.getElementsByClassName('modal')[0]
let form = document.getElementById('login-form')
function dismissModal(){
    m.classList.toggle('modal')
}

function validateLogin(){

   
    form.addEventListener('submit',()=>{
        const {pwd,uname} = form.elements
        if (pwd == 'password123' && uname == 'admin'){
            return alert('works')
        }else{
            m.style.display = 'block';
            return
        }
        // if{

        // } 
    })
}