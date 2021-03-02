import { Form } from "react-bootstrap";

export default function Input(props) {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.type}
                value={props.value}
                onChange={props.change}
            />
        </Form.Group>
    );
}
