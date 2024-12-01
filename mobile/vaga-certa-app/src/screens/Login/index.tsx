import { Image } from 'react-native';
import {useState, useEffect} from 'react'
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import api from '../../services/api';
import { useUsuario } from '../../context/UsuarioContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BGTop from '../../assets/BGTop.png';
import vagaTres from '../../assets/vagaTres.jpg'
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login({ navigation }) {

    const { setUsuario } = useUsuario(); 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
          const response = await api.get('/api/usuarios');
          const users = response.data.usuarios;
          console.log(users);
    
          const user = users.find(u => u.email === email && u.senha === senha);
    
          if (user) {
            setUsuario(user); // Atualiza o usuário no contexto
            const userJsonFormat = JSON.stringify(user);
            await AsyncStorage.setItem('@user', userJsonFormat);// Armazena os dados do usuario localmente
            console.log('Login successful', `Welcome, ${user.nome}!`);
            navigation.navigate('Auth', { screen: 'Home' });
          } else {
            console.log('Login failed', 'Email or password is incorrect');
          }
        } catch (error) {
          console.error(error);
          console.log('Login failed', 'An error occurred during login');
        }
      };

      useEffect(()=>{
        const getAuthUser = async () => {
          try{
            const authUser = await AsyncStorage.getItem('@user');
            if(authUser){
              setUsuario(JSON.parse(authUser));// Atualiza o usuário no contexto
              navigation.navigate('Auth', { screen: 'Home' });
            }
          }catch(error){
              console.error(error)
          }
        };
        getAuthUser();
      }, [])

    return (
        <Wrapper>
            <Image source={vagaTres} />

            <Container>

                <Form>
                    <Logo />
                    <Input
                      label='E-mail'
                      placeholder='digite seu e-mail'
                      value={email}
                      onChangeText={setEmail}/>
                    <Input
                      label='Senha'
                      placeholder='digite sua senha'
                      value={senha}
                      onChangeText={setSenha}/>
                    <Button 
                      title="Entrar" 
                      noSpacing={true} 
                      variant='primary'
                      onPress={handleLogin}
                    />
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
                            <TextLink>
                                    Crie agora mesmo.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}