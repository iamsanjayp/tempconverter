const celButton = document.getElementById("cel");
const farButton = document.getElementById("far");
const kelButton = document.getElementById("kel");
const inputBox = document.getElementById("main_input_box");
const form = document.getElementById("main_form");


const celciusOutput = document.getElementById("celcius");
const fahrenheitOutput = document.getElementById("Farenheit");
const kelvinOutput = document.getElementById("Kelvin");


let inputType = 'Celsius';


celButton.addEventListener('click', () => inputType = 'Celsius');
farButton.addEventListener('click', () => inputType = 'Fahrenheit');
kelButton.addEventListener('click', () => inputType = 'Kelvin');

// Conversion functions
const convertFromCelsius = (value) => ({
    Fahrenheit: (value * 9/5) + 32,
    Kelvin: value + 273.15,
    Celsius: value
});

const convertFromFahrenheit = (value) => ({
    Celsius: (value - 32) * 5/9,
    Kelvin: ((value - 32) * 5/9) + 273.15,
    Fahrenheit: value
});

const convertFromKelvin = (value) => ({
    Celsius: value - 273.15,
    Fahrenheit: ((value - 273.15) * 9/5) + 32,
    Kelvin: value
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = inputBox.value;

    let convertedValues;
    if (inputType === 'Celsius') {
        convertedValues = convertFromCelsius(inputValue);
    } else if (inputType === 'Fahrenheit') {
        convertedValues = convertFromFahrenheit(inputValue);
    } else if (inputType === 'Kelvin') {
        convertedValues = convertFromKelvin(inputValue);
    }

    celciusOutput.innerHTML = convertedValues.Celsius;
    fahrenheitOutput.innerHTML = convertedValues.Fahrenheit;
    kelvinOutput.innerHTML = convertedValues.Kelvin;
});
