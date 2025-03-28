import styled from 'styled-components';

export const HeaderBG = styled.header`
    width:100%;
    background-color: var(--header-bg-color);
    height: 47px;
    position:fixed;
    top:0;
`
export const HeaderContainer = styled.div`
    width:100%;
    margin-top:8px;
    padding: 0 80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const LogoContainer = styled.div`
    width: fit-content;
`

export const ButtonsContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    gap:10px;
`