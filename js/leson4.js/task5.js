let name = prompt("Введіть ім'я користувача");
let email = prompt("Введіть електрону почту користувача");
let password = prompt("Введіть пароль");
let charactersInName = name.length > 3;
let dogIndex = email.includes("@");
let dotIndex = email.includes(".", dogIndex);
let doesEmailHaveDogDot = dogIndex > 0 && dotIndex + 1;
let charactersInPassword = password.length > 6;
if(charactersInName, doesEmailHaveDogDot, charactersInPassword){
    console.log("Перенаправлення на іншу сторінку")
}else{
    console.log("Помилка: неправильне заповнення")
}