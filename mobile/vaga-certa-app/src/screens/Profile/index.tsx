import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';



export default function Profile() {

    const navigation = useNavigation();
    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={"#007bff"} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
            </Header>

            <Container>
                <ContentContainer>
                    <Input label='Nome' placeholder='digite seu nome'/>
                    <Input label='E-mail' placeholder='digite seu e-mail'/>
                    <Input label='Senha' placeholder='digite sua senha'/>
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary'
                    />
            </Container>
        </Wrapper>
    );
}