let nu1,nu2,nu3
nu1=Number(prompt('ingrese primer numero'))
nu2=Number(prompt('ingrese segundo numero'))
nu3=Number(prompt('ingrese tercer numero'))
if (nu1>nu2 && nu1>nu3) {
    alert('el numero mayor es'+ nu1)
}else if (nu2>nu1 && nu2>nu3) {
    alert('el numero mayor es'+ nu2)
}else if (nu3>nu1 && nu3>nu2) {
    alert('el numero mayor es'+ nu3)
}