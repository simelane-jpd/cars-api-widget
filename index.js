const cars = document.querySelector('.cars');
const colors = document.querySelector('.colors');
const carbrands = document.querySelector('.carbrands');


axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (result) {
        result.data.forEach(car => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${car.make},
        
        ${car.model},
        ${car.color},
        ${car.price},
        ${car.reg_number}</td></tr>`
            cars.appendChild(li);

        });

    });

    axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (result) {
        result.data.forEach(color => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${color}<strong></strong></td></tr>`
            colors.appendChild(li);

        });

    });

    axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (result) {
        result.data.forEach(carbrand => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${carbrand}<strong></strong></td></tr>`
            carbrands.appendChild(li);

        });

    });