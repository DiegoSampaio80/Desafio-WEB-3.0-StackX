import React from "react";
import { ButtonIdioma } from "./Button.ts";


export default function Button({idioma, bandeira, clickFunction}){

    return(
        <>
            <ButtonIdioma  onClick={clickFunction}>
                <img src={bandeira} alt='bandeira do país'/>
                <span>{idioma}</span>
            </ButtonIdioma>
        </>
    );
}
