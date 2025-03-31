export interface IButton{
    label: string | React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: string;
}