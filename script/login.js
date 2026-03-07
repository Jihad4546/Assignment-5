function login (){
    let user = document.getElementById('Username').value;
    let pass = document.getElementById('Password').value;
    if(user === 'admin' && pass === 'admin123'){
          window.location.href = "home.html"
    }
    else{
        alert('password and username invaild')
    }
}