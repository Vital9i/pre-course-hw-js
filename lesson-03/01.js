const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const newColors = colors.filter((item) => {
        return item === "черный" || item === "красный" || item === "желтый";
    });
    return newColors.join('-')
}
console.log(createColorString());


