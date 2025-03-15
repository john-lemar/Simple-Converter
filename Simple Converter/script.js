document.addEventListener("DOMContentLoaded", () => {
    updatePlaceholder();
});

function convert() {
    const unitType = document.getElementById("unitType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const result = document.getElementById("result");

    if (isNaN(inputValue)) {
        result.textContent = "0";
        return;
    }

    let convertedValue;

    switch (unitType) {
        case "meter-kilometer":
            convertedValue = (inputValue / 1000).toFixed(4) + " km";
            break;
        case "inch-centimeter":
            convertedValue = (inputValue * 2.54).toFixed(2) + " cm";
            break;
        case "pound-kilogram":
            convertedValue = (inputValue * 0.453592).toFixed(3) + " kg";
            break;
        default:
            convertedValue = "Invalid unit";
    }

    result.textContent = convertedValue;
}

function updatePlaceholder() {
    const unitType = document.getElementById("unitType").value;
    const inputField = document.getElementById("inputValue");

    const placeholders = {
        "meter-kilometer": "Enter meters",
        "inch-centimeter": "Enter inches",
        "pound-kilogram": "Enter pounds"
    };

    inputField.placeholder = placeholders[unitType] || "Enter value";
}
