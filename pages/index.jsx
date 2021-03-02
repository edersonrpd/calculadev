import Head from "next/head";
import { Container } from "react-bootstrap";
import MinVarejo from "./MinVarejo";
import SenhaDiaria from "./SenhaDiaria";

export default function Home() {
    return (
        <Container>
            <MinVarejo />
            <SenhaDiaria />
        </Container>
    );
}
