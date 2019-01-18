window.onload = function() {

    //**************** Campos formulario ****************

    let txtFecha = document.getElementById("fechaEnvio");
    let txtCpOrigen = document.getElementById("cpOrigen");
    let txtCpDestino = document.getElementById("cpDestino");
    let txtRepartidor = document.getElementById('repartidor');
    let txtPeso = document.getElementById('peso');
    let txtX = document.getElementById('dimensionx');
    let txtY = document.getElementById('dimensiony');
    let txtZ = document.getElementById('dimensionz');
    let txtTarjetaBancaria = document.getElementById('tarjetaBancaria');
    let txtCodigoDescuento = document.getElementById('codigoDescuento');
    let divInformacion = document.getElementById('informacion');
    let divErrores = document.getElementById('errores');
    let chkverificacion = document.getElementById('condiciones');
    let btnValidacion = document.getElementById("validar");


    //****************Inivialización *******************

    divErrores.style.display = 'none';
    divInformacion.style.display = 'none';
    btnValidacion.disabled = true;
    chkverificacion.checked = false;

    //************** Eventos ****************************

    chkverificacion.addEventListener('change', function() {
        if (this.checked == true) btnValidacion.disabled = false;
        else {
            btnValidacion.disabled = true;
            divInformacion.style.display = 'none';
        }
    })

    btnValidacion.addEventListener('click', function() {
        //Código de validaciones
        let error = "";
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
        if (!(dimensionValida(txtX.value) && dimensionValida(txtY.value) && dimensionValida(txtZ.value))) error = error + '<p>Dimensiones no válidas</p>';
        //Tarjeta bancaria 16 digitos continuos o en grupos de cuatro
        if (!(tarjetaValida(txtTarjetaBancaria.value))) error = error + '<p>Tarjeta no válida<p>';
        //codigo descuento 5 letras seguidas de dos digitos
        if (!(codigoDescuento(txtCodigoDescuento.value))) error = error + '<p>Código de descuento no válido</p>'

        //Logica de muestra de errores e información
        if (error != "") {
            divErrores.style.display = 'block';
            divInformacion.style.display = 'none';
            divErrores.innerHTML = error;
        } else {
            divErrores.style.display = 'none';
            divInformacion.style.display = 'block';
            divInformacion.innerHTML = "Todos los capos son correctos";
        }
    })

    //******************** Funciones de validación ************************

    function fechaValida(fecha) {
        //Usamos función regular
        if (/^[0-2][0-9][\-/.][0-1][0-2][\-/.][0-9]{4}$/.test(fecha)) return true;
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
        if (/^[5-9][0-9]$|^[1-4][0-9][0-9]$|^500$/.test(peso)) return true;
        return false;
    }

    function dimensionValida(d) {
        if (/^[1-9][0-9]?$|^100$/.test(d)) return true;
        return false;
    }

    function tarjetaValida(tarjeta) {
        if (/^[0-9]{16}$|^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/.test(tarjeta)) return true;
        return false;
    }

    function codigoDescuento(codigo) {
        if (/^[A-z]{5}[0-9]{2}$/.test(codigo)) return true;
        return false;
    }
    console.log(tarjetaValida('1111 1111 1111 1111'));
}