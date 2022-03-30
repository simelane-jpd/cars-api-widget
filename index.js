const cars = document.querySelector('.cars');
const colors = document.querySelector('.colors');
const carbrands = document.querySelector('.carbrands');
const display = document.querySelector('.display');
const car_brands = document.querySelector('.car_brands');
const car_colors = document.querySelector('.car_colors');
const carsdisplayed = document.querySelector('.carsdisplayed');


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

    function filtercars() {
       
        const carbrands = document.getElementById("carbrands").value;
        const colors = document.getElementById("colors").value;
        if (carbrands && colors) {

    axios
    .get("https://api-tutor.herokuapp.com/v1/cars/make/${carbrands}/color/${colors}")
    .then(function (result) {
        result.data.forEach(car => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${car.make},
        ${car.color}
       
       </td></tr>`
            carsdisplayed.appendChild(li);

        });

    });
}
else if(carbrands){
    axios
    .get("https://api-tutor.herokuapp.com/v1/makes/${carbrands}")
    .then(function (result) {
        result.data.forEach(carbrand => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${carbrand}</td></tr>`
            carsdisplayed.appendChild(li);

        });

    });
}
else if (colors){
    axios
    .get("https://api-tutor.herokuapp.com/v1/color/${colors}")
    .then(function (result) {
        result.data.forEach(color => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
        <td>${color}</td></tr>`
            carsdisplayed.appendChild(li);

        });

    });

}
else {
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
            carsdisplayed.appendChild(li);

        });

    });
}
    }
display.addEventListener('click',filtercars)
            


//function filtercars() {
//axios
   // .get("https://api-tutor.herokuapp.com/v1/cars/make/:make/color/:car_color")
    //.then(function (result) {
       // result.data.forEach(car => {
          //  const li = document.createElement('tr');
           // li.innerHTML = `<tr>
       // <td>${car.make}
        
        
        //${car.color}
       
      // </td></tr>`
            //cars.appendChild(li);

       // });

    //});
//}
   // display.addEventListener('click',filtercars)
