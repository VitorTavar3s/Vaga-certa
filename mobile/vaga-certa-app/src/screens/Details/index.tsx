import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api'
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
    Title,
    Description
} from '../Details/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import { Button } from '../../components/Button';

import { VagaType } from '../../utils/Types';
import { Linking } from 'react-native';


export default function Details({route, navigation }) {

    const [id, setId] = useState(route.params.id);
    const [vaga, setVaga] = useState<VagaType>();

    function handleContactBtn(){
        Linking.openURL(`https://wa.me/${vaga?.telefone}`);
    }

    const fetchVaga = async () => {
        try{
            const response = await api.get(`/api/vagas/${id}`);
            const data = response.data.job;
            setVaga({
                id: data.id,
                titulo: data.titulo,
                dataCadastro: data.dataCadastro,
                descricao: data.descricao,
                telefone: data.telefone,
                status: data.status,
                empresa: data.empresa
            })
        }catch(error){
            console.error(error)
        }
    };

    useEffect(() => {
        fetchVaga();
    },[id])

    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>
            {vaga ? (
                <Container>
                    <ContentContainer>
                        <Title>{vaga.titulo}</Title>
                        <Description>{vaga.descricao}</Description>
                    </ContentContainer>
                    {vaga.status === "Vago" &&
                        <Button 
                            title="Entrar em contato" 
                            noSpacing={true} 
                            variant='primary'
                            onPress={handleContactBtn}
                        />
                    }
                    
                </Container>
            ) : (
                <Title>A vaga não foi encontrada</Title>
            )}
            
        </Wrapper>
    );
}
