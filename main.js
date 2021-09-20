const menu = document.querySelectorAll(".menu li")
const entradas = [{
    "nombre":"Nachos",
    "precio":35,
    "imagen":"/imagenes/entradas/nachos.png"
},
{
    "nombre":"dedos",
    "precio":50,
    "imagen":"/imagenes/entradas/dedos.png"
},
{
    "nombre":"papas",
    "precio":40,
    "imagen":"/imagenes/entradas/papas.png"
}]

const refrescos = [{
    "nombre": "coca cola",
    "precio":15,
    "imagen": "/imagenes/bebidas/cocacola.png"
},{
    "nombre": "coca cola light",
    "precio":15,
    "imagen": "/imagenes/bebidas/cocolalight.png"
},{
    "nombre": "fanta",
    "precio":15,
    "imagen": "/imagenes/bebidas/fanta.png"
},{
    "nombre": "sprite",
    "precio":15,
    "imagen": "/imagenes/bebidas/sprite.png"
},{
    "nombre": "agua",
    "precio":15,
    "imagen": "/imagenes/bebidas/epura.png"
}]

const burgers = [{
    "nombre": "clasica",
    "precio":95,
    "imagen": "/imagenes/burgers/clasica.png"
},{
    "nombre": "doble",
    "precio":115,
    "imagen": "/imagenes/burgers/doble.png"
},{
    "nombre": "tocino",
    "precio":110,
    "imagen": "/imagenes/burgers/tocino.png"
},{
    "nombre": "champiñones",
    "precio":110,
    "imagen": "/imagenes/burgers/champiñones.png"
}]

const contenido = document.getElementById("contenido")
const fragmento = document.createDocumentFragment()

function crearComida(nombre,precio,imagen){
    imagen = `<img class="comida-img" src="${imagen}">`
    nombre = `<h2 class="nombre-platillo">${nombre}</h2>`
    precio = `<p class="precio-platillo">Precio: <b> $${precio} MXN</b></p>`
    return [imagen, nombre, precio]
}

menu.forEach((elemento,i) => {
    elemento.addEventListener("click",()=>{
        fragmento.innerHTML = "";
        contenido.innerHTML = "";
        menu.forEach(elemento => elemento.classList.replace("menu-selected","menu-unselected"))
        console.log(elemento)
        elemento.classList.replace("menu-unselected","menu-selected")
        if(elemento.innerHTML == "Entradas"){
            for(let i = 0; i < entradas.length; i++){
                let div = document.createElement("div");
                let comidaAAgregar = crearComida(entradas[i].nombre, entradas[i].precio, entradas[i].imagen);
                console.log(comidaAAgregar[0], comidaAAgregar[1], comidaAAgregar[2])
                div.classList.add("comida")
                div.innerHTML = comidaAAgregar[0] + comidaAAgregar[1] + comidaAAgregar[2];
                fragmento.appendChild(div);
            }
            contenido.appendChild(fragmento)
        } else if(elemento.innerHTML == "Refresco"){
            for(let i = 0; i < refrescos.length; i++){
                let div = document.createElement("div");
                let comidaAAgregar = crearComida(refrescos[i].nombre, refrescos[i].precio, refrescos[i].imagen);
                console.log(comidaAAgregar[0], comidaAAgregar[1], comidaAAgregar[2])
                div.classList.add("comida")
                div.innerHTML = comidaAAgregar[0] + comidaAAgregar[1] + comidaAAgregar[2];
                fragmento.appendChild(div);
            }
            contenido.appendChild(fragmento)
        }else if(elemento.innerHTML == "Burgers"){
            for(let i = 0; i < burgers.length; i++){
                let div = document.createElement("div");
                let comidaAAgregar = crearComida(burgers[i].nombre, burgers[i].precio, burgers[i].imagen);
                console.log(comidaAAgregar[0], comidaAAgregar[1], comidaAAgregar[2])
                div.classList.add("comida")
                div.innerHTML = comidaAAgregar[0] + comidaAAgregar[1] + comidaAAgregar[2];
                fragmento.appendChild(div);
            }
            contenido.appendChild(fragmento)
        }
        
    })
})

function insertar(contenido){
    for(let i = 0; i < contenido.length;i++){
        let li = document.createElement("li");
        li.innerText = contenido[i]
        console.log(li)
        li.tabIndex = i
        fragmento.appendChild(li)
    }
}