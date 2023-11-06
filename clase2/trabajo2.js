function sumar() {
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").value = num1 + num2;
  }
  
  function restar() {
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").value = num1 - num2;
  }
  
  function multiplicar() {
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").value = num1 * num2;
  }
  
  function dividir() {
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("resultado").value = num1 / num2;
  }
  