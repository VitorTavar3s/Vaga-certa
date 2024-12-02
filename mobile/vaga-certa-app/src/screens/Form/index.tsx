import React, { useEffect, useState } from 'react';
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
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';
import { useUsuario } from '../../context/UsuarioContext';
import api from '../../services/api';


export default function Profile({navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handlePressButton(){
        try{
            const userData = {
                'nome': nome,
                'email': email,
                'senha': senha
            };
            const response = await api.post('/api/usuarios/',userData);
            
            navigation.navigate('Login', {screen: 'Login'})

        }catch(error){
            console.error(error)
        }        
    }

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

            <Container>
                <ContentContainer>
                    <Input label='Nome' value={nome}
                        onChangeText={setNome} placeholder='digite seu nome'/>
                    <Input label='E-mail' value={email}
                        onChangeText={setEmail} placeholder='digite seu e-mail'/>
                    <Input label='Senha' value={senha}
                        onChangeText={setSenha} placeholder='digite sua senha'/>
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handlePressButton}
                    />
            </Container>
        </Wrapper>
    );
}
