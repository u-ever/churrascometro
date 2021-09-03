function calcular() {

    let adults = document.querySelector('#adults');
    let kids = document.querySelector('#kids');
    let time = document.querySelector('#time');
    let kgBeef = document.querySelector('#kgCarne');
    let ltBeer = document.querySelector('#ltCerveja');
    let ltStDrink = document.querySelector('#ltBebida');

    let people = parseFloat(adults.value) + parseFloat((kids.value) / 2)

    if (time.value < 4) {
        beef = (people * 0.4).toFixed(1)
        beer = (adults.value * 1.2).toFixed(1)
        stDrink = (people * 1).toFixed(1)
        kgBeef.innerHTML = `${beef} Kg de Carne`
        ltBeer.innerHTML = `${beer} ml de Cerveja`;
        ltStDrink.innerHTML = `${stDrink} Garrafas de 2L de Bebida`;

    } else {
        beef = (people * 0.65).toFixed(1)
        beer = (adults.value * 2).toFixed(1)
        stDrink = (people * 1.5).toFixed(1)
        kgBeef.innerHTML = `${beef} Kg de Carne`
        ltBeer.innerHTML = `${beer} ml de Cerveja`;
        ltStDrink.innerHTML = `${stDrink} Garrafas de 2L de Bebida`;
    }
    
}