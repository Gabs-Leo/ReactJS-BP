type NavbarProps = {
    text?:string;
}

export const Navbar = (props:NavbarProps) => {
    return(
        <div>{props.text || ""}</div>
    )
}