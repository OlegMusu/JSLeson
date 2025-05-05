let week = prompt("Введи день тижня з великої букви:").toLowerCase();

switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четверг":
    case "П'ятниця":
        alert("Цей день робочий");
        break;
    case "Субота":
    case "Неділя":
        alert("Це вихідні");
    default:
        alert("Такого дня тиждня не існує");
}