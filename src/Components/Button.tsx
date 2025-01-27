type ButtonType = {
    name: string,
    disabled: boolean,
    onclick:()=>void,
}

export const Button = ({name, disabled, onclick}: ButtonType) => {
    return (
        <button disabled={disabled} className={`button ${disabled ? 'dis' : 'active'}`} onClick={onclick}>
            {name}
        </button>
    );
};