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
import { useUsuario } from '../../context/UsuarioContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';
import api from '../../services/api';


export default function Profile({navigation}) {

    const { usuario, setUsuario } = useUsuario(); 
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userID, setUserID] = useState('');

    useEffect(()=>{
        const getData = async () => {
            try{
                const response = await api.get(`/api/usuarios/${usuario.id}`);
                const user = response.data.user;
                setNome(user.nome);
                setEmail(user.email);
                setSenha(user.senha);
                setUserID(user.id);
                console.log(user)
            }catch(error){
                console.error(error)
            }
        };
        getData();
    }, [])

    async function handlePressButton(){
        try{
            const userData = {
                'id': userID,
                'nome': nome,
                'email': email,
                'senha': senha
            };
            const response = await api.put(`/api/usuarios/${userID}`,userData);

            if(response){
                const userJsonFormat = JSON.stringify(userData);
                await AsyncStorage.setItem('@user', userJsonFormat);
                setUsuario(userData); // Atualiza o usuário no contexto
                navigation.navigate('Auth', {screen: 'Home'})
            }else{
                console.error('falha ao atualizar os dados do usuário.')
            }
        }catch(error){
            console.error(error)
        }        
    }

    async function handlePressButtonLogout(){
        try{
            
            await AsyncStorage.removeItem('@user')

            navigation.reset({ index: 0, routes: [{name: 'Login'}]})
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
            </Header>

            <Container>
                <ContentContainer>
                    <Input
                        label='Nome'
                        placeholder='digite seu nome'
                        value={nome}
                        onChangeText={setNome}
                    />
                    <Input
                        label='E-mail'
                        placeholder='digite seu e-mail'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        label='Senha'
                        placeholder='digite sua senha'
                        value={senha}
                        onChangeText={setSenha}
                    />
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handlePressButton}
                    />
                <Button 
                    title="Logout" 
                    noSpacing={true} 
                    variant='secondary'
                    onPress={handlePressButtonLogout}
                />
            </Container>
        </Wrapper>
    );
}