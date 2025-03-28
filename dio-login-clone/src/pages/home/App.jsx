import {ContentContainer, Text, Login, Title, Desc, Highlight, Form, InputContainer, TextField, Center} from './App.js'
import {MdPerson,MdEmail,MdLock} from 'react-icons/md'
import Header from '../../components/Header'
import Button from '../../components/Button'

export default function App() {

  return (<>
    <Header/>
    <ContentContainer>
      <Text>
        A plataforma para você aprender com experts, 
        dominar as principais tecnologias e entrar mais 
        rápido nas empresas mais desejadas.
      </Text>
      <Login>
        <Title>Comece agora grátis</Title>
        <Desc>Crie sua conta e make the change._</Desc>
        <Form>
          <InputContainer>
            <MdPerson size={"16px"} color='#8647ad'/>
            <TextField placeholder='Nome completo'/>
          </InputContainer>
          <InputContainer>
            <MdEmail size={"16px"} color='#8647ad'/>
            <TextField placeholder='E-mail'/>
          </InputContainer>
          <InputContainer>
            <MdLock size={"16px"} color='#8647ad'/>
            <TextField placeholder='Senha'/>
          </InputContainer>
          <Center><Button label="Criar minha conta" variant="secondary"/></Center>
        </Form>
        <Desc>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Desc>
        <Desc small>Já tenho conta. <Highlight href='#' rel='noreferrer'>Fazer login</Highlight></Desc>
      </Login>
    </ContentContainer>
    </>
  )
}
