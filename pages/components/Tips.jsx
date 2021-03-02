import { Children } from "react";
import styled from "styled-components";

const Tip = styled.div`
    background: black;
    color: white;
    padding: 0.3rem 0.2rem;
    border-left: 6px solid #6d1cac;
`;

export function Tips(props) {
    return <Tip>{props.Children}</Tip>;
}
