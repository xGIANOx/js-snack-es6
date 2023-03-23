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

const benzina_cars = cars.filter((car) => {
    if (car.alimentazione === 'Benzina') {
        return true
    }
})
console.log(benzina_cars)


const diesel_cars = cars.filter((car) => {
    if (car.alimentazione === 'Diesel') {
        return true
        
    }
})
console.log(diesel_cars)

const other_cars = cars.filter((car) => {
    if (car.alimentazione !== 'Diesel' && car.alimentazione !== 'Benzina') {
      return true  
        
    }
})
console.log(other_cars)



