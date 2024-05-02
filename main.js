document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar el div para mostrar el texto de la calculadora
    const display = document.querySelector(".display");
  
    // Variable para almacenar el valor actual en la pantalla
    let currentInput = "";
  
    // Función para actualizar la pantalla
    const updateDisplay = () => {
      display.textContent = currentInput;
    };
  
    // Función para agregar dígitos y operadores a la pantalla
    const addToInput = value => {
      if (currentInput === '0') {
          currentInput = value;
      } else {
          currentInput += value;
      }
      updateDisplay();
  };
  
    // Función para limpiar la pantalla
    const clearInput = () => {
      currentInput = "";
      updateDisplay();
    };
  
    // Función para realizar el cálculo y mostrar el resultado
    const calculate = () => {
      try {
          // Verificar si currentInput está vacío o solo contiene un cero
          if (currentInput.trim() === '' || currentInput === '0') {
              currentInput = '0';
          } else {
              const result = eval(currentInput);
              currentInput = result.toString();
          }
      } catch (error) {
          currentInput = 'Error';
      } finally {
          updateDisplay();
      }
  };
  
    // Agregar event listener a cada botón
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonValue = button.textContent;
  
        // Realizar acciones según el valor del botón
        switch (buttonValue) {
          case "=":
            calculate();
            break;
          case "C":
            clearInput();
            break;
          default:
            addToInput(buttonValue);
            break;
        }
      });
    });
  });
  