import {StyledButton} from './styles.js';

export default function Button({label,variant,onClick}){
    return(
        <StyledButton variant={variant} onClick={onClick}>
            {label}
        </StyledButton>
    )
}