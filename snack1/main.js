const cars = [
    { marca: 'Audi', modello: 'A1', alimentazione: 'Benzina'},
    { marca: 'BMW', modello: 'Serie 1', alimentazione: 'Benzina'},
    { marca: 'Mercedes', modello: 'Classe A', alimentazione: 'Benzina'},
    { marca: 'Alfa Romeo', modello: 'Giulietta', alimentazione: 'Diesel'},
    { marca: 'Peugeot', modello: '206', alimentazione: 'Gpl'},
    { marca: 'Tesla', modello: 'Model X', alimentazione: 'Elettrico'},
    { marca: 'Cupra', modello: 'Formentor', alimentazione: 'Elettrico'},
    { marca: 'Toyota', modello: 'Yaris', alimentazione: 'Metano'},
    { marca: 'Ford', modello: 'Fiesta', alimentazione: 'Diesel'},
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'Diesel'}
];

const benzina_cars = cars.forEach((car) => {
    if (car.alimentazione === 'Benzina') {
        console.log(car)
    }
})

const diesel_cars = cars.forEach((car) => {
    if (car.alimentazione === 'Diesel') {
        console.log(car)
    }
})

const other_cars = cars.forEach((car) => {
    if (car.alimentazione !== 'Diesel' && car.alimentazione !== 'Benzina') {
        console.log(car)
    }
})

