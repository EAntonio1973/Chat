const http = require("http");
const express = require("express");
const app = express();

const servidorHttp = http.createServer(app);

const io = require("socket.io")(servidorHttp);

app.use(express.static("public"));

//io.addListener('connection', () => {
//    console.log("alguém entrou na sala");
//})

function comportamentoDoSocket(socket) {
    console.log("novo usuário na sala");
    socket.addListener("nova mensagem",(msg) =>{
        io.emit("nova mensagem",msg);
    });
}
io.addListener("connection", comportamentoDoSocket);

//servidorHttp.listen(3000);
servidorHttp.listen(1000, '192.168.15.15');
