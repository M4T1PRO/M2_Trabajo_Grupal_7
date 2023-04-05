function validarFormulario(formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario

        const Vacios = []; // Array para almacenar los campos vacíos

        // Verifica si el campo email está vacío
        const email = formulario.inputEmail.value.trim();
        if ( email === "") {
            Vacios.push("Email");
        }

        // Verifica si el campo name está vacío
        const name = formulario.inputName.value.trim();
        if (name === "") {
            Vacios.push("Nombre");
        }

        // Verifica si el campo inputAdress está vacío
        const address = formulario.inputAddress.value.trim();
        if (address === "") {
            Vacios.push("Dirección 1");
        }

        // Verifica si el campo inputAdress2 está vacío
        const address2 = formulario.inputAddress2.value.trim();
        if (address2 === "") {
            Vacios.push("Dirección 2");
        }

        // Verifica si el campo inputCity está vacío
        const city = formulario.inputCity.value.trim();
        if (city === "") {
            Vacios.push("Ciudad");
        }


        // Verifica si el campo inputZip está vacío
        const cpostal = formulario.inputZip.value.trim();
        if (cpostal === "") {
            Vacios.push("Codigo Postal");
        }

        // Verifica si el campo textMsg está vacío
        const textMsj = formulario.textMsj.value.trim();
        if (textMsj === "") {
            Vacios.push("Mensaje");
        }

        // Mostrar los campos vacíos, si los hay
        if (Vacios.length > 0) {
            alert("Los siguientes campos están vacíos: " + Vacios.join(", "));
        } else { // Si no hay campos vacíos, enviar el formulario
            formulario.submit();
        }
    });
}

// Usar la función validarFormulario para validar el formulario
const form = document.querySelector("#formulario");
validarFormulario(form);