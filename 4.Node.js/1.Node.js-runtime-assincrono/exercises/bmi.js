// const weightInKg = 83;
// const heightInCm = 192;
const { askHeight, askWeight } = require('./askData');

const calcIMC = (weight, height) => {
    console.log(`Height: ${height}, Weight: ${weight}`);

    const heightInMetersSquared = (height / 100) ** 2;

    const BMI = weight / heightInMetersSquared;

    return BMI;

    // if(height.length === 0 || weight.length === 0)
    // console.log('parâmetros inválidos')
    // console.log(weight / ((height / 100) ** 2));
}

const BMI_MAX_MIN = {
    'Underweight': {
        minBMI: 0,
        maxBMI: 18.4,
    },
    'Normal Weight': {
        minBMI: 18.5,
        maxBMI: 24.9,
    },
    'Overweight': {
        minBMI: 25,
        maxBMI: 29.9,
    },
    'Obese Class I': {
        minBMI: 30,
        maxBMI: 34.9,
    },
    'Obese Class II': {
        minBMI: 35,
        maxBMI: 39.9,
    },
    'Obese Class III': {
        minBMI: 40,
        maxBMI: 200,
    },
}

const main = () => {
    const weightInKg = askWeight();
    const heightInCm = askHeight();

    const BMI = calcIMC(weightInKg, heightInCm).toFixed(2);

    console.log(`BMI: ${BMI}`);

    const BMI_CLASS = Object.keys(BMI_MAX_MIN);

    const classBMIFound = BMI_CLASS.find((string) => {
        const { minBMI, maxBMI } = BMI_MAX_MIN[string];
        return BMI >= minBMI && BMI <= maxBMI;
    });

    console.log(classBMIFound);
    // const underWeight = BMI < 18.5;
    // const normalWeight = BMI >= 18.5;
    // const overWeight = BMI >= 25;
    // const overWeightI = BMI >= 30;
    // const overWeightII = BMI >= 35;
    // const overWeightIII = BMI >= 40;
    // if(underWeight) {
    //     console.log('Abaixo do peso (magreza)');
    // }
    // if(normalWeight) {
    //     console.log('Peso normal');
    // }
    // if(overWeight) {
    //     console.log('Acima do peso (sobrepeso)');
    // }
    // if(overWeightI) {
    //     console.log('Obesidade grau I');
    // }
    // if(overWeightII) {
    //     console.log('Obesidade grau II');
    // }
    // if(overWeightIII) {
    //     console.log('Obesidade grau III e IV');
    // }
}

main();