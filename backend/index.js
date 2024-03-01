const express = require("express");
const cors = require("cors");

const routerApi = require("./routes");
const { registrarVisita, obtenerFechaHoy } = require("./functions/visitas");

const app = express();
const port = 3080;

app.use(express.json());
const whiteList = [
	"http://localhost:5173",
	"http://localhost:15105",
	"http://127.0.0.1:5173",
	"http://127.0.0.1:3090",
	"http://localhost",
	"http://127.0.0.1:5500",

    "http://10.140.0.16:15106",
    "http://10.140.0.16:15105",
    "http://10.140.0.16:15201",

	"https://buscadordeempleo.gov.co/",
	"https://ambientesdepruebas.serviciodeempleo.gov.co",
];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido"));
        }
    }
}
app.use(cors(options));


// app.use(async (req, res, next) => {
// 	try {
// 		const fechaHoy = obtenerFechaHoy();
// 		await registrarVisita(fechaHoy);
// 		next();
// 	} catch (err) {
// 		console.error('Error al registrar visitas:', err.message);
// 		res.status(500).send('Error interno del servidor');
// 	}
// });



app.get("/", (request, response) => {
    response.send("Hola mi server backend para Buscador de Empleo");
});

routerApi(app);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})
