let placa,npa,ruta
    placa=prompt('ingrese su placa')
    npa=Number(prompt('numero de pasajeros'))
    ruta=prompt('ingrese la ruta a o b')
    if (ruta=='a') {
        alert('recolecto'+(npa*1200))
    }else if (ruta=='b') {
        alert('recolecto'+(npa*1000))
    }