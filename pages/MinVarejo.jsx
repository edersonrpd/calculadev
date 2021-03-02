import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function MinVarejo() {
    const [valorVarejo, setValorVarejo] = useState("");
    const [margemProduto, setMargemProduto] = useState("");
    const [margemMinima, setMargemMinima] = useState("");
    const minimoVarejo = (
        (valorVarejo / (1 + margemProduto / 100)) *
        (1 + margemMinima / 100)
    ).toFixed(4);

    useEffect(() => {
        document.title = `Minimo Varejo: R$${minimoVarejo}`;
    }, [minimoVarejo]);

    return (
        <div>
            <h1>Calculo Minimo Varejo</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Preço Varejo</Form.Label>
                    <Form.Control
                        type="number"
                        value={valorVarejo}
                        onChange={(e) =>
                            setValorVarejo(parseFloat(e.target.value))
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Margem Produto (%)</Form.Label>
                    <Form.Control
                        type="number"
                        value={margemProduto}
                        onChange={(e) =>
                            setMargemProduto(parseFloat(e.target.value))
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Margem Minima (%)</Form.Label>
                    <Form.Control
                        type="number"
                        value={margemMinima}
                        onChange={(e) =>
                            setMargemMinima(parseFloat(e.target.value))
                        }
                    />
                </Form.Group>
            </Form>
            <hr />
            <div>
                <strong>Valor Varejo: </strong>
                R$ {valorVarejo ? valorVarejo : null} <br />
                <strong>Margem Varejo:</strong>{" "}
                {margemProduto ? margemProduto : null} (%)
                <br />
                <strong>Margem Minima:</strong>{" "}
                {margemMinima ? margemMinima : null} (%) <br />
                {minimoVarejo > 0 && (
                    <>
                        <strong> Minimo Varejo: </strong>
                        R$ {minimoVarejo}
                    </>
                )}
            </div>
            <hr />
            <div className="tips">
                <strong>Calculo: </strong>{" "}
                <span style={{ marginLeft: "1rem" }}>
                    (Preço Varejo/ (1+ (Margem / 100))) * (1+(Margem Minima /
                    100)) = Minimo Varejo
                </span>
            </div>
        </div>
    );
}
