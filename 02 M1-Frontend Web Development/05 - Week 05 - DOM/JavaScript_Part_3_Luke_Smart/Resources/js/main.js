let m = document.getElementsByClassName('modal')[0]
let form = document.getElementById('login-form')
let p = document.getElementsByClassName('nav-sidebar')[0]
let butp = document.getElementsByClassName('btn-toggle-nav')[0]
let show = document.getElementsByClassName('show')[0]

function dismissModal(){
    m.classList.toggle('modal')
    location.reload()
}

function validateLogin(e){
    e.preventDefault();
    form.addEventListener('submit',()=>{
        const {pwd,uname} = form.elements
        if (pwd.value == 'password123' && uname.value =='admin'){
            window.location.href = 'index.html';
            alert('Login Sucessful') 
        }else{
            console.log('Invalid Credentials');            
            m.style.display = 'block';
        }
         
    })
}

form.addEventListener('submit',validateLogin)

function toggleNav(){
    butp.addEventListener('click',()=>{
        if(p.style.width == '50px'){
            p.style.width = '500px'
            show.style.visibility = 'block'
        }else{
            p.style.width = '50px'
            show.style.visibility = 'hidden'
        }
        
    })
}   