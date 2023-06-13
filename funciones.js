function pesosADolares(pesos, tipoCambio) {
	return pesos / tipoCambio;
  }
  
  function dolaresAPesos(dolares, tipoCambio) {
	return dolares * tipoCambio;
  }
  function convertir() {
	const pesos = document.getElementById("pesos").value;
	const dolares = document.getElementById("dolares").value;
	const tipoCambio = document.getElementById("tipoCambio").value;
  
	let resultado;
  
	if (pesos) {
	  resultado = pesosADolares(pesos, tipoCambio);
	  document.getElementById("dolares").value = resultado;
	} else if (dolares) {
	  resultado = dolaresAPesos(dolares, tipoCambio);
	  document.getElementById("pesos").value = resultado;
	}
  }
  
  function limpiar() {
	document.getElementById("pesos").value = "";
	document.getElementById("dolares").value = "";
	document.getElementById("tipoCambio").value = "";
  }
  