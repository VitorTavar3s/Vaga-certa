import React from "react";
import { Container,Title,Date,Company, Content,OpenButton } from "./styles";
import { Feather } from "@expo/vector-icons";

type Props ={
    titulo: string;
    descricao: string;
    dataCadastro: string;
    telefone: string;
    status: string;
    empresa: string;
}

export function Vaga({titulo,descricao,dataCadastro,empresa}:Props){

    return(
        <Container>
            <Content>
                <Title>{titulo}</Title>
                <Date>{dataCadastro}</Date>
                <Company>{empresa}</Company>
            </Content>
            <OpenButton>
                <Feather name="chevron-right" size={24} color={'#3D6CB9'} />
            </OpenButton>
        </Container>
    );
}