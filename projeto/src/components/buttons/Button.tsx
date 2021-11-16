type ButtonProps = {
    text:string;
}

//Utilizando o double pipe, podemos atribuir um valor DEFAULT para o texto
export const Button = (props:ButtonProps) => {
    return(
        <button>{props.text || "Gabs"}</button>
    )
}