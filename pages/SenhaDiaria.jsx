import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";

import Input from "./components/Form/Input";

export default function SenhaDiaria() {
    const data = new Date();

    const [dia, setDia] = React.useState(data.getDay());
    const [mes, setMes] = React.useState(data.getMonth() + 1);
    const [ano, setAno] = React.useState(data.getFullYear());

    const calculoAno = ano * 365;
    const calculoMes = mes * 30;
    const senha = calculoAno + calculoMes + dia;

    React.useEffect(() => {
        document.title = `Senha: ${senha}`;
    }, [senha]);

    return (
        <div>
            <h1>Senha Diaria</h1>

            <Form>
                <Input
                    type="number"
                    value={dia}
                    label="Dia"
                    change={(e) => setDia(parseInt(e.target.value))}
                />

                <Input
                    type="number"
                    value={mes}
                    label="Mes"
                    change={({ target }) => setMes(parseInt(target.value))}
                />
                {console.log(mes)}
                {console.log(typeof mes)}
                <Input
                    type="number"
                    value={ano}
                    label="Ano"
                    change={({ target }) => setAno(parseInt(target.value))}
                />
            </Form>
            <p>
                <strong>Senha: </strong>
                {calculoMes + calculoAno + dia}
            </p>
            <div className="tips">
                <p>
                    Fórmula do Calculo: (Ano * 365) + (Mês * 30) + Dia = Senha
                </p>
            </div>
            <div className="tips">
                <p>{`(${ano} * 365) + (${mes} * 30) + ${dia} = ${senha}`}</p>
            </div>
            <hr />
        </div>
    );
}
