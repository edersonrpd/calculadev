import Head from "next/head";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import MinVarejo from "./MinVarejo";
import SenhaDiaria from "./SenhaDiaria";

export default function Home() {
    return (
        <div>
            <Header />
            <Container>
                <MinVarejo />
                <br />
                <br />
                <SenhaDiaria />
            </Container>
        </div>
    );
}
