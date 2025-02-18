import {heroes} from './Data/hero.js'


export function ThirdComp() {


    const getHeroesByName = (name) => heroes.find((heroe) => heroe.name === name);

    console.log(getHeroesByName('Batman'));

    

    const cantHeroesByFrachise = (franchise) => heroes.filter((heroe) => heroe.owner === franchise).length;

    console.log('Cantidad de heroes de DC '+ cantHeroesByFrachise('DC'));
    console.log('Cantidad de heroes de Marvel '+ cantHeroesByFrachise('Marvel'));
}


export default ThirdComp;