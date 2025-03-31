export interface IInput{
    placeholder: string;
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}