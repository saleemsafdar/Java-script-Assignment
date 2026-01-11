function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    
    // Loop through the rest of the arguments (which are arrays like ['color', 'red'])
    options.forEach(option => {
        let [key, value] = option;
        car[key] = value;
    });

    return car;
}

let myCar = create_car("Toyota", "Corolla", ["color", "white"], ["sunroof", true]);
console.log(myCar);