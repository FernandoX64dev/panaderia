from flask import Flask, render_template

app = Flask(__name__)

NEGOCIO = {
    "nombre": "Panadería La Espiga",
    "slogan": "Pan recién horneado todos los días",
    "direccion": "Calle Principal 123, Col. Centro, Ciudad Nezahualcóyotl",
    "horario": "Lunes a sábado: 7:00 - 20:00 | Domingo: 8:00 - 15:00",
    "telefono": "55 1234 5678",
}

PRODUCTOS = [
    {"nombre": "Concha", "descripcion": "Pan dulce clásico con cubierta de azúcar.", "precio": 12, "imagen": "concha.jpg"},
    {"nombre": "Cuernito", "descripcion": "Hojaldrado y mantequilloso.", "precio": 15, "imagen": "cuernito.jpg"},
    {"nombre": "Bolillo", "descripcion": "Crujiente por fuera, suave por dentro.", "precio": 4, "imagen": "bolillo.jpg"},
    {"nombre": "Pastel de tres leches", "descripcion": "Rebanada individual.", "precio": 45, "imagen": "pastel.jpg"},
]

@app.route("/")
def inicio():
    return render_template("index.html", negocio=NEGOCIO, productos=PRODUCTOS)

if __name__ == "__main__":
    app.run(debug=True)