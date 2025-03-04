//retriving document objects
let m = document.getElementsByClassName('modal')[0]
let form = document.getElementById('login-form')
//this function toggles the modal to show of be hidden.Then after being toggled, reload the page
function dismissModal(){
    m.classList.toggle('modal')
    location.reload()
}
//this function prevents the page from being reloaded by form submission and then checks for login credentials, if correct it redirects to index.html, if incorrect it displays the modal.
function validateLogin(e){
    e.preventDefault();
    
    const {pwd,uname} = form.elements
    if (pwd.value == 'password123' && uname.value =='admin'){
        window.location.href = 'index.html';
        alert('Login Sucessful')
    }else{
        console.log('Invalid Credentials');            
        m.style.display = 'block';
    }  
}

//this adds an event listener so that the 'preventDefault' is initialized without errors
form.addEventListener('submit',validateLogin)

//this function allows the nav-bar to expand and be made vssible by changing the width and setting the vissibility to 'visible'.
function toggleNav(){
    let p = document.getElementsByClassName('nav-sidebar')[0]
    let show = document.querySelector('.nav-sidebar ul')
    let butp = document.querySelector('.btn-toggle-nav')
    
    
    if(p.style.width == '50px'){
        p.style.width = '500px'
        show.style.visibility = 'visible'
        butp.classList.add('rotate');
    }else{
        p.style.width = '50px'
        show.style.visibility = 'hidden'
        butp.classList.remove('rotate');
    }
        
}