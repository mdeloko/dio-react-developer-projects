import styled from 'styled-components';

export const StyledButton = styled.button`
    min-width:${({variant})=>variant!=="secondary"?"120px":"167px"};
    position:relative;
    background-color:${({variant})=>
        variant==="no-bg" ? "transparent":
        variant==="primary"?"var(--gray-button-color)":
        variant==="secondary"?"var(--pink-button-color)":
        "#FF0000"};
    color:var(--text-color);
    border:none;
    border-radius:22px;
    padding:2px 12px;
    height:33px;
    font-size:18px;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        ${({variant})=>variant==="no-bg"?"text-decoration:underline;":variant==="primary"||variant==="secondary"?"opacity:0.6;":""}
    }
    ${({variant})=>variant==="secondary"?
    "&::after{content:'';position:absolute;border:1px solid #e4105d;top:-6px;left:-6px;width:177px;height:43px;border-radius:22px;}":""}
`