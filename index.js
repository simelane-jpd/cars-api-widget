const cars = document.querySelector('.cars');
//const colours = document.querySelector('.colours');


axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (result) {
        result.data.forEach(car => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${car.model}<strong></strong></td></tr>`
            cars.appendChild(li);

        });

    });

    //axios
    //.get("http://api-tutor.herokuapp.com/v1/colors")
    //.then(function (result) {
    //    result.data.forEach(car => {
            //const li = document.createElement('tr');
           // li.innerHTML = `<tr>
       // <td>${car}<strong></strong></td></tr>`
          //  cars.appendChild(li);

       // });

    //});