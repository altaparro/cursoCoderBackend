class Persona {
  constructor(info) {
    this.nombre = info.nombre;
    this.apellido = info.apellido;
    this.edad = info.edad;
    this.pais = info.pais;
  }

  hablar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona1 = new Persona({
  nombre: "Matías",
  apellido: "Altaparro",
  edad: 28,
  pais: "Argentina",
});

console.log(persona1);
persona1.hablar();
