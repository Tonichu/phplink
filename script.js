function sendA() { 
    //obtenemos los valores a enviar al servidor 
    let num1 = document.getElementById("n1").value; 
    let num2 = document.getElementById("n2").value; 
    //Declarar el objeto XMLHttpRequest 
    let xmlHttp = new XMLHttpRequest(); 
    //Configurar la petición pasando los parámetros que queramos 
    xmlHttp.open("POST", "action.php?n1=" + num1 + "&n2=" + num2, true); 
    //Establecer el HEADER de la petición 
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    //asignar una función encargada de gestionar cada cambio 
    xmlHttp.onreadystatechange = function () { 
      if (xmlHttp.readyState == 4) { 
        if (xmlHttp.status == 200) { 
          //obtenemos la respuesta y la parseamos a JSON 
          let textoRespuesta = xmlHttp.responseText; 
          let objetoJSON = JSON.parse(textoRespuesta); 
          let respuesta = objetoJSON.resp; 
          //mostramos la respuesta en el HTML 
          document.getElementById("respuesta").innerHTML = respuesta; 
        } 
      } 
    } 
    xmlHttp.send(); //enviar la petición 
  } 
 