let arrayAnalizar = [];
let arrayAIncluir = [];
let txtEncriptado;

document.getElementById("texto-usuario").addEventListener("input", function() {
    var textoOriginal = this.value;
    var textoModificado = textoOriginal.replace(/[áéíóúÁÉÍÓÚ]/g, "")
                                        .toLowerCase();
    this.value = textoModificado;
});

function recorrerYEncriptar() {
    let textoNoEncriptado = document.getElementById("texto-usuario").value;
    
    arrayAnalizar = [];
    console.log(textoNoEncriptado);
    if(textoNoEncriptado ==""){
        noEscribio();
    }else{
    for (let i = 0; i < textoNoEncriptado.length; i++) {
        arrayAnalizar.push(textoNoEncriptado[i]);

    }

    for (let i = 0; i < arrayAnalizar.length; i++) {
        console.log(arrayAnalizar[i]);

    }


    for (let i = 0; i < arrayAnalizar.length; i++) {
        console.log("analizando " + arrayAnalizar[i]);
        switch (arrayAnalizar[i]) {
            case 'a':
                console.log("se encontro un a");
                arrayAnalizar.splice(i + 1, 0, "i");
                i += 1;
                break;
            case 'e':
                console.log("se encontro un e");
                arrayAnalizar.splice(i + 1, 0, "n");
                arrayAnalizar.splice(i + 2, 0, "t");
                arrayAnalizar.splice(i + 3, 0, "e");
                arrayAnalizar.splice(i + 4, 0, "r");
                i += 4;


                break;
            case 'i':
                console.log("se encontro un i");
                arrayAnalizar.splice(i + 1, 0, "m");
                arrayAnalizar.splice(i + 2, 0, "e");
                arrayAnalizar.splice(i + 3, 0, "s");
                i += 3;
                break;
            case 'o':
                console.log("se encontro un o");
                arrayAnalizar.splice(i + 1, 0, "b");
                arrayAnalizar.splice(i + 2, 0, "e");
                arrayAnalizar.splice(i + 3, 0, "r");
                i += 3;
                break;
            case 'u':
                console.log("se encontro un u");
                arrayAnalizar.splice(i + 1, 0, "f");
                arrayAnalizar.splice(i + 2, 0, "a");
                arrayAnalizar.splice(i + 3, 0, "t");
                i + 3;
                break;





        }

        if (i >= arrayAnalizar.length) {
            console.log("todos analizados " + i + " " + arrayAnalizar.length);
        }
    }
    for (let i = 0; i < arrayAnalizar.length; i++) {
        console.log(i);
        console.log(arrayAnalizar[i]);

    }
    txtEncriptado = arrayAnalizar.join('');
    console.log(txtEncriptado);
    
    document.getElementById("muneco").style.visibility="hidden";
    document.getElementById("aviso").textContent = txtEncriptado;
    var textarea = document.getElementById("texto-usuario");
    textarea.value="";
    }
}

function descencriptar() {
    let txtNoEncriptado="";
    arrayAnalizar=[];
    let textoEncriptado = document.getElementById("texto-usuario").value;
    
    if(textoEncriptado ==""){
        noEscribio();
    }else{
    let mensaje;
    for (let i = 0; i < textoEncriptado.length; i++) {
        arrayAnalizar.push(textoEncriptado[i]);

    }

    for (let i = 0; i < arrayAnalizar.length; i++) {
        mensaje="";
        switch (arrayAnalizar[i]) {
            case 'a':
                mensaje= arrayAnalizar[i] + arrayAnalizar[i+1];
                console.log(mensaje + "mensaje");
                if(mensaje=="ai"){
                    arrayAnalizar.splice(i,2,"a");
                }
                
                break;
            case 'e':
                mensaje= arrayAnalizar[i] + arrayAnalizar[i+1] + arrayAnalizar[i+2] +arrayAnalizar[i+3]+arrayAnalizar[i+4];
                console.log(mensaje + "mensaje");
                if(mensaje=="enter"){
                    arrayAnalizar.splice(i,5,"e");
                }

                break;
            case 'i':
                mensaje= arrayAnalizar[i] + arrayAnalizar[i+1]+arrayAnalizar[i+2]+arrayAnalizar[i+3];
                console.log(mensaje + "imes");
                if(mensaje=="imes"){
                    arrayAnalizar.splice(i,4,"i");
                }

                break;
            case 'o':
                mensaje= arrayAnalizar[i] + arrayAnalizar[i+1]+arrayAnalizar[i+2]+arrayAnalizar[i+3];
                console.log(mensaje + "ober");
                if(mensaje=="ober"){
                    arrayAnalizar.splice(i,4,"o");
                }

                break;
            case 'u':
                mensaje= arrayAnalizar[i] + arrayAnalizar[i+1]+arrayAnalizar[i+2]+arrayAnalizar[i+3];
                console.log(mensaje + "mensaje");
                if(mensaje=="ufat"){
                    arrayAnalizar.splice(i,4,"u");
                }

                break;



           
        }
    }
    
    for (let i = 0; i < arrayAnalizar.length; i++) {
        console.log(i);
        console.log(arrayAnalizar[i]);

    }
    txtNoEncriptado = arrayAnalizar.join('');
    console.log(txtNoEncriptado);
    var textarea = document.getElementById("texto-usuario");
    textarea.value="";
    document.getElementById("muneco").style.visibility="hidden";
    document.getElementById("aviso").textContent = txtNoEncriptado;
    }
}

function noEscribio() {
    var elemento = document.getElementById("muneco");
    elemento.style.visibility = "initial";
    elemento = document.getElementById("aviso");
    elemento.textContent = "¡Todavia no has escrito nada!";
}


function copiarAlPortapapeles() {
    let id_elemento="aviso";
    var aux = document.createElement("textarea");
    aux.innerHTML = document.getElementById(id_elemento).innerHTML
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }