import styled from "styled-components";

export const ContentContainer = styled.div`
    margin: 141px 158px 0 63px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export const Text = styled.aside`
    font-weight:700;
    font-size:32px;
    width:388px;
`

export const Login = styled.main`
    width:374px;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
`
export const Desc = styled.p`
    margin: 15px 0;
    font-size:${({small})=>small?"14px":"18px"};
    font-weight:${({small})=>small?"700":"400"};
`
export const Highlight = styled.a`
    color:var(--text-highlight-color);
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
`

export const Form = styled.form`
    width:80%;
`
export const InputContainer = styled.div`
    border-bottom: 1px solid #FFFFFF45;
    display:flex;
    flex-direction:row;
    gap:8px;
    margin-bottom: 7px;
`
export const TextField = styled.input`
    background:transparent;
    border:none;
    width:calc(100% - 24px);
    font-size:18px;
    color:var(--text-color);
    margin-bottom:7px;
    &:focus{
        outline:none;
    }
`
export const Center = styled.div`
    margin-top:20px;
    justify-self:center;
`