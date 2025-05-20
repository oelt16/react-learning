import {  type ReactNode } from "react";

import "./Button.css";

interface Props {
    children :  ReactNode,
    parentMethod ?: () => void

}

export const Button = ({children, parentMethod}: Props) => {
    return (
        <button className="custom-button" onClick={parentMethod}>
            {children}
        </button>
    )
};


/* 
Prop drilling: pasando de app al button, y del button al childrenbutton... 
=> ahora Button siempre depende de ChildrenButton! problema!

=> podemos utilizar un context; pero ya lo haremos...

*/
export const ChildrenButton = ({children}: Omit<Props, "parentMethod">) => {

    return (
    {children}
    )
};


export const ColorRed = ({children}: Omit<Props, "parentMethod">) => {

    return (
    {children}
    )
};

