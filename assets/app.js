//https://rickandmortyapi.com/api/character

/*
1-toma el campo donde se va a insertar el resultado de la busqueda(querySelector)
2-tener la referencia al id del formulario 
3-utilizar la funcion window.onload que contiene el 
addEventListener de formulario lleva como parametro el 'submit',
 y la funcion Validar formulario
4-crear una funcion que se llame validarFormulario
si el input.value  esta vacios llame a una funcion
llamada mostrarAlert (si no existe) que recibe como parametro
un mensaje sera una etiqueta p , ademas añadir la alerta al formulario
usar el setTimeout para remover la alerta
5-si existe valores en el input.value llamar a la funcion buscarImagenes
que recibe como parametro input.value ,ademas contiene la key y la url
y la busqueda con fetch para obtener el  resultado
y llamar otra funcion mostrarImagenes(pasando el resultado)
*/

const resultado  = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario') 



window.onload = ()=>{
    formulario.addEventListener('submit', validarFormulario)
}

const validarFormulario =(e)=>{
    e.preventDefault();
   const inputValue = document.querySelector('#input').value

   if(inputValue === ''){
       mostrarError('Debe digitar el nombre del personaje')
       return; 
    }

    cargarData(inputValue)



}

const mostrarError = (mensaje) =>{
    const p = document.createElement('p')
    p.innerHTML = `<strong>Error</strong><br>
                ${mensaje} `
    p.classList.add('error')            
   formulario.appendChild(p) 
   
   setTimeout(() => {
       p.remove()
   }, 3500);
}



const cargarData = (inputValue) => {

    const url = `https://rickandmortyapi.com/api/character/?name=${inputValue}&status=alive`
    
    fetch(url)
        .then(resp => resp.json())
        .then(result =>{
           
        render(result.results)
        })

}



//get all character

//https://rickandmortyapi.com/api/character
const getAll = ()=>{
    const url = "https://rickandmortyapi.com/api/character"

    fetch(url)
        .then(resp => resp.json())
        .then(result =>{
           
            render(result.results)
        })
}


//https://rickandmortyapi.com/api/episode
//get all episode

const getAllEpisodes = () =>{
    const url = "https://rickandmortyapi.com/api/episode"

    fetch(url)
        .then(resp => resp.json())
        .then(result => {
            console.log(result);
        })
}


const render = (data) =>{

   

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
 
   data.forEach(result=>{ 
        const {name,gender,species,status,image} = result

        resultado.innerHTML += `
            <div class="card">
                <h4>Description</h4>
                <p>Name: ${name}</p>
                <p>Gender: ${gender}<p>
                <p>Species: ${species}<p>
                <p>Status: ${status}<p>
                <img src="${image}" class="image">
            </div>
        `
     })  

}
