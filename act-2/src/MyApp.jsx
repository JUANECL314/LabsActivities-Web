import {heroes} from './Data/hero.js'

export function MyApp() {
    const valor = 7;
    if(true) {
        let valor  = 5;
        // console.log(valor);
    }
    // console.log(valor);


    const nombre = 'Juan';
    const apellido = 'Cibrian';

    const nombreCompleto = nombre+' '+apellido;
    // console.log(nombreCompleto);


    const nombreComp = `${nombre} ${apellido}`;
    // console.log(nombreComp);


    function getSaludo(nombre){
        return 'Hola ' + nombre;
    }
    // console.log(`Este es un texto: ${getSaludo(nombre)} `);
    const estudiante = {
        matricula: 'A000001',
        nombre: 'Jorge',
        edad: '20',
        dirección: {
            ciudad: 'Mty',
            zip: 64800
            }
            };
    // console.table(estudiante);
    const estudiante2 ={...estudiante};
    estudiante2.nombre ='Ramon';
    // console.table (estudiante);
    // console.table (estudiante2);


    const arreglo = [1,2,3,4,5];
    arreglo.push(1);
    console.log(arreglo);
    const arreglo2 = [...arreglo,15];
    console.log(arreglo2);

    const dobles = arreglo2.map( function (i) {return i *2});
    console.log(dobles);
    
    const saludo = function (nombre) {
        return nombre;
    }   

    const saludo2 = (nombre ) =>{
        return `Hola, ${nombre}`;
    }

    const saludo3 = (nombre) => `Hola, ${nombre}`;

    console.log(heroes);

    //IMPORTANTE
    const  getHeroeById = (id) =>  heroes.find ( (heroe)=>  heroe.id===id); 
    console.log(getHeroeById(2));
    const  getHeroeByEmpresa = (empresa) =>  heroes.filter( (heroe) =>  heroe.owner===empresa); 
    console.log(getHeroeByEmpresa('Marvel'));
   
}



export default MyApp