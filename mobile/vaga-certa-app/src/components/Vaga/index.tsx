import React from "react";
import { Container,Title,Date,Company, Content,OpenButton } from "./styles";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../utils/Types';

type Props = {
    id: number;
    titulo: string;
    dataCadastro: string;
    empresa: string;
}

type PropsNav = NativeStackScreenProps<RootStackParamList>;

export function Vaga({id,titulo,dataCadastro,empresa}:Props){
    const navigation = useNavigation<PropsNav['navigation']>();

    return(
        <Container onPress={() => navigation.navigate('Details', { id })}>
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