//const carsdisplayed = document.querySelector('.carsdisplayed');
//first part//
const cars = document.querySelector('.cars');
const colors = document.querySelector('.colors');
const carbrands = document.querySelector('.carbrands');
//filter//
const display = document.querySelector('.display');
const info = document.querySelector('.data').innerHTML
const carsElem = Handlebars.compile(info)
const thecars = document.querySelector('.allthecars').innerHTML
const allthecars = Handlebars.compile(thecars)
//first part//
axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        cars.innerHTML = allthecars({
            car: result.data
        });
    })

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        carbrands.innerHTML = carsElem({
            info: result.data
        });
    })

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        colors.innerHTML = carsElem({
            info: result.data
        });
    })


//filter//

display.addEventListener('click', () => {
    const carcolors = document.getElementById("carcolors").value;
    const carmodels = document.getElementById("carmodels").value;

    if (carcolors && carmodels) {

        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carmodels}/color/${carcolors}`)
            .then(function (result) {
                cars.innerHTML = allthecars({
                    car: result.data
                });

            })
    }
    else if (carmodels) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carmodels}`)
            .then(function (result) {
                cars.innerHTML = allthecars({
                    car: result.data
                });

            })
    } else if
        (carcolors) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/${carcolors}`)
            .then(function (result) {
                cars.innerHTML = allthecars({
                    car: result.data
                });

            })
    } else {
        axios
            .get('https://api-tutor.herokuapp.com/v1/cars')
            .then(function (result) {
                cars.innerHTML = allthecars({
                    car: result.data
                });
            })
    }

})