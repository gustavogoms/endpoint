import express from 'express';
import "../database";

const app = express();


app.use(express.json());

const servico:any = [];


app.post("/botlia", (request, response) => {
    const { numserv, msg, dh_resposta, dh_envio, tel } = request.body;

    servico.push({
        numserv,
        msg,
        dh_resposta,
        dh_envio,
        tel

    });

    

    return response.status(201).send();
})

app.get("/ocorrencia/:numserv", (request, response) => {
    const { numserv } = request.params;

    const mensagem = servico.find(mensagem => mensagem.numserv === numserv)

    return response.json(servico);
})




//localhost 33333
app.listen(3333, () => console.log ("Endpoint Funcionando"));


