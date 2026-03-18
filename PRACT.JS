let autoPrincipal = {
    marca: "Nissan",
    modelo: "Sentra",
    ruedas: 4,
    arrancar: function() {
        console.log(this.marca + " esta encendido")
    },
    frenar: function() {
        console.log(this.marca + " se detuvo")
    }
}

console.log(autoPrincipal)

autoPrincipal.marca = "Kia"

console.log(autoPrincipal)

autoPrincipal.arrancar()
autoPrincipal.frenar()


function Auto(marca, modelo, ruedas, year) {
    this.marca = marca
    this.modelo = modelo
    this.ruedas = ruedas
    this.year = year
    this.arrancar = function() {
        console.log(this.marca + " encendido")
    }
    this.frenar = function() {
        console.log(this.marca + " frenando")
    }
}

const auto1 = new Auto("Suzuki", "Swift", 4, 2018)
const auto2 = new Auto("Hyundai", "Tucson", 4, 2021)
const auto3 = new Auto("Renault", "Logan", 4, 2017)

const autos = [auto1, auto2, auto3]

auto1.arrancar()
auto1.frenar()

auto2.arrancar()
auto2.frenar()

console.log(autos)