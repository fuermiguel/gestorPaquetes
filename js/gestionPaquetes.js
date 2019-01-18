window.onload = function() {
    //Cargamos los campos en variables
    let txtFecha = document.getElementById("fechaEnvio");
    let txtCpOrigen = document.getElementById("cpOrigen");
    let txtCpDestino = document.getElementById("cpDestino");
    let btnValidacion = document.getElementById("validar")
    let txtRepartidor = document.getElementById('repartidor');
    let txtPeso = document.getElementById('peso');
    let txtX = document.getElementById('dimensionx');
    let txtY = document.getElementById('dimensiony');
    let txtZ = document.getElementById('dimensionz');
    let tarjetaBancaria = document.getElementById('tarjetaBancaria');
    let txtCodigoDescuento = document.getElementById('codigoDescuento');

    //Ahora asignamos los eventos
    btnValidacion.addEventListener('click', function() {
        //Código de validaciones
        let errores = "";
        //Fecha de envio: Obligatorio y con formato dd/mm/aaaa
        if (!fechaValida(txtFecha.value)) error = error + '<p>Formato fecha invalido<p>';
        //CP Origen: 5digitos
        if (!cpValido(txtCpOrigen.value)) error = error + '<p>Formato cp origen invalido<p>';
        //CP Destino: 5digitos
        if (!cpValido(txtCpDestino.value)) error = error + '<p>Formato cp destino invalido<p>';
        //Codigo repartidor 2letras mayúsculas+ $ + 4digitos (ES$3302)
        if (!codigoValido(txtRepartidor.value)) error = error + '<p>Formato de código repartidor</p>';
        //Peso de 50 a 500 g
        if (!pesoValido(txtPeso.value)) error = error + '<p>Peso no válido</p>';
        //Dimensiones entre 10 y 100 
        if (!(dimensionValida(txtX) && dimensionValida(txtY) && dimensionValida(txtZ))) error = error + '<p>Dimensiones no válidas</p>';
        //Tarjeta bancaria

        //codigo descuento

    })

    //Funciones de validación
    function fechaValida(fecha) {
        //Usamos función regular
        if (/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(fecha)) return true;
        return false;
    }

    function cpValido(cp) {
        if (/^[0-9]{5}$/.test(cp)) return true;
        return false;
    }

    function codigoValido(codigo) {
        if (/^[A-Z]{2}[$][0-9]{4}$/.test(codigo)) return true;
        return false;
    }

    function pesoValido(peso) {
        if (/^[1-4][0-9]?$|^50$|^0$/.test(peso)) return true;
        return false;
    }

    function dimensionValida(d) {
        if (/^[1-9][0-9]?$|^100$/.test(d)) return true;
        return false;
    }

    console.log(dimensionValida(1));
}