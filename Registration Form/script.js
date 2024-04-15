// import {add, subtract } from './math.js';
console.log("connected")

const form = document.getElementById('myForm');

// console.log(form)
form.addEventListener('submit',function (event) {
   event.preventDefault();
   
   const signupData = new FormData(form);
   const username = signupData.get('username');
   const password = signupData.get('password');

//    console.log(username, password)

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    alert('User registered')

    window.location.href = 'login.html'

    
})

