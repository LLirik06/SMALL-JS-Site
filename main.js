//Кнопка показа Резюме
let CV = document.getElementById('CV')
let CV_button = document.getElementById('Small_CV')
CV_button.addEventListener('click', function(){
    CV.style.display = 'block'
})

//Кнопка показа регистрационной формы
let registration = document.getElementById('registration')
let Form_button = document.getElementById('formregistation')
Form_button.addEventListener('click', function(){
    registration.style.display = 'block'
})

//Кнопка изменения резюме
let my_name = document.getElementById('my-name')
let myCV_content = document.getElementById('myCV-content')
let myCV_content_2 = document.getElementById('myCV-content_2')
let change_CV_button = document.getElementById('backgroundCV')
change_CV_button.addEventListener('click', function(){
    CV.style.height = '450px'
    CV.style.borderRadius = '20px'
    CV.style.background = 'url(./img/giphy.gif)'
    my_name.style.color = 'white'
    my_name.style.fontFamily = 'Dongle, sans-serif'
    my_name.style.fontSize = '30px'
    my_name.style.lineHeight = '10px'
    myCV_content.style.fontFamily = 'Dongle, sans-serif'
    myCV_content.style.color = 'white'
    myCV_content.style.fontSize = '30px'
    myCV_content.style.lineHeight = '10px'
    myCV_content_2.style.fontFamily = 'Dongle, sans-serif'
    myCV_content_2.style.color = 'white'
    myCV_content_2.style.fontSize = '30px'
})

//Кнопка изменнения формы регистрации
let title = document.getElementById('title')
let login = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let send_button = document.getElementById('send_button')
let change_registration_form_button = document.getElementById('backgroundform')
change_registration_form_button.addEventListener('click', function(){
    registration.style.background = 'url(./img/giphy.gif)'
    registration.style.backgroundPosition = 'right'
    registration.style.borderRadius = '20px'
    title.style.fontFamily = 'Dongle, sans-serif'
    title.style.fontSize = '30px'
    title.style.color = 'white'
    login.style.height = '30px'
    login.style.borderRadius = '7px'
    login.style.border = 'none'
    login.style.backgroundColor = 'rgba(10, 237, 195, 0.618)'
    email.style.height = '30px'
    email.style.borderRadius = '7px'
    email.style.border = 'none'
    email.style.backgroundColor = 'rgba(10, 237, 195, 0.618)'
    password.style.height = '30px'
    password.style.borderRadius = '7px'
    password.style.border = 'none'
    password.style.backgroundColor = 'rgba(10, 237, 195, 0.618)'
    send_button.style.backgroundColor = 'rgba(234, 0, 255, 0.425)'
    send_button.style.padding = '9px 30px'
    send_button.style.color = 'white'
})