import {HeaderBG,HeaderContainer, LogoContainer, ButtonsContainer} from './styles.js';
import dioLogo from '../../assets/dio-logo.png';
import Button from '../Button';

export default function Header(){
    return(
        <HeaderBG>
            <HeaderContainer>
                <LogoContainer>
                    <img src={dioLogo} alt="Logo da Digital Innovation One - DIO." />
                </LogoContainer>
                <ButtonsContainer>
                    <Button label="Home" variant='no-bg'/>
                    <Button label="Entrar" variant='primary'/>
                    <Button label="Cadastrar" variant='primary'/>
                </ButtonsContainer>
            </HeaderContainer>
        </HeaderBG>
    )
}