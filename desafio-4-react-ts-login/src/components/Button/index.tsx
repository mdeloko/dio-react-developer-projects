import { ButtonCont } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonCont onClick={onClick} disabled={disabled} >
    {title}
    </ButtonCont>
  );
};

export default Button;
