let colors = (prompt.parseInt("Введи колір(Червоний, зелений або жовтий):"));

switch (menu.toLowerCase()) {
    case "червоний":
        alert("стоп");
        break;
    case "Зелений":
        alert("йти");
        break;
    case "Жовтий":
        alert("чекати");
        break;
    default:
        alert("Такого кольору немає у світлофорі.")
}
