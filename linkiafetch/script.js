function sendA() {

  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;

  let configFetch = {
    method: "GET",
    Headers: { "Content-Type": "application/x-www-form-urlencoded" }
  };
  let promesa = fetch("action.php?" + "n1=" + num1 + "&n2=" + num2, configFetch);
  promesa.then(function (response) {
    if (response.ok) {
      console.log("respuesta ok");
    }
    response.json().then(
      function (objetoJSON) {
        let respuesta = objetoJSON.resp;
        document.getElementById("respuesta").innerHTML = respuesta;
      }
    );
  }).catch (function (error) {
    console.log("error en la petición" + error.message);
  });
}
