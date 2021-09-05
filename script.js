function calcular() {

    let adults = document.querySelector('#adults');
    let kids = document.querySelector('#kids');
    let time = document.querySelector('#time');
    let kgBeef = document.querySelector('#kgCarne');
    let ltBeer = document.querySelector('#ltCerveja');
    let ltStDrink = document.querySelector('#ltBebida');

    let people = parseFloat(adults.value) + parseFloat((kids.value) / 2)

    if (time.value == "" || adults.value == "" || kids.value == "") {
        ltBeer.innerHTML = ``;
        ltStDrink.innerHTML = ``;
        kgBeef.innerHTML = `Digite os dados do Churrasco`
    } else if  (time.value < 4) {
        beef = (people * 0.4).toFixed(1)
        beer = (adults.value * 3.5).toFixed(0)
        stDrink = (people * 1).toFixed(1)
        kgBeef.innerHTML = `${beef} Kg de Carne &#127830`
        ltBeer.innerHTML = `${beer} latas de 350 ml de Cerveja &#127866`;
        ltStDrink.innerHTML = `${stDrink} Garrafas de 2L de Bebida &#127865`;
    } else {
        beef = (people * 0.65).toFixed(1)
        beer = (adults.value * 5.5).toFixed(0)
        stDrink = (people * 1.5).toFixed(1)
        kgBeef.innerHTML = `${beef} Kg de Carne &#127830`
        ltBeer.innerHTML = `${beer} latas de 350 ml de Cerveja &#127866`;
        ltStDrink.innerHTML = `${stDrink} Garrafas de 2L de Bebida &#127865`;
    }

}