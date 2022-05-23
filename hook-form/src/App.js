import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [ID, setID] = useState(null);

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = {ID_USUARIO:14,
        "NOME":"Ju",
        "EMAIL":"Ju123@gmail.com",
        "CNPJ":"Ju",
        "RAZAOSOCIAL":"Ju",
        "TELEFONE":"Ju",
        "CELULAR":"Ju",
        "CIDADE":"Ju",
        "ESTADO":"Ju",
        "SENHA":"Ju"};
        axios.post('http://localhost:3333/criaUsuario', article)
            .then(response => setID(response.data.mensagem))
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {ID}
            </div>
        </div>
    );
}

export default  App ;