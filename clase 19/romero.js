function Hamburguesas() {
    let cant=0;
    let tipo;
    let metodopago;
    let pago=0;
    cant=parseInt(prompt("ingrese cantidad de hamburguesas que pedira."));
    for (i=0; i<cant; i++) {
        tipo=parseInt(prompt("ingrese tipo de hamburguesa: 1-simple, 2-doble, 3-triple."));
         if (tipo===1) {
            pago=pago+20;
        } else {
            if (tipo===2) {
                pago=pago+25;
            } else {
                if (tipo===3) {
                    pago=pago+28;
                }
            }
        }
    }
    metodopago=parseInt(prompt("ingrese etodo de pago: 1-credito, 2-otro."));
    if (metodopago===1) {
        pago=pago*1.05
    }
    document.getElementById("rta5").textContent=("el total a pagar es "+pago+"$");
}

function Focos() {
    let cantfocos=0;
    let colorfoco;
    let rojos=0;
    let verdes=0;
    let blancos=0;
    cantfocos=parseInt(prompt("ingrese cantidad de focos del lote."))
    for (i=1; i<=cantfocos; i++) {
        colorfoco=parseInt(prompt("ingrese color del foco "+i+": 1-verde, 2-blanco, 3-rojo."));
        if (colorfoco===1) {
            verdes=verdes+1
        } else {
            if (colorfoco===2) {
                blancos=blancos+1
            } else {
                if (colorfoco===3) {
                    rojos=rojos+1
                } else {
                    alert("el numero ingresado no corresponde a ningun color, intentelo nuevamente.")
                    i-1
                }
            }
        }
    }
    document.getElementById("rta1").textContent=("focos verdes: "+verdes)
    document.getElementById("rta2").textContent=("focos blancos: "+blancos)
    document.getElementById("rta3").textContent=("focos rojos: "+rojos)
}

function Ahorro() {
    let num=0;
    num=parseInt(prompt("¿cuanto dinero ingresara inicialmente?"))
    for (i=0; i<365; i++) {
        document.write("dia "+i+": "+num+"$<br>");
        num=num*3
    }
}

function Tabla() {
    let num;
    let mult=0;
    let i=0;
    num=parseInt(prompt("ingrese un numero."));
    do {
        mult=num*i
        document.write(num+" x "+i+" = "+mult+"<br>")
        i++
    } while (i<=10)
}
