import React from "react"
import { Mainstyle } from "./mainstyle"
import popcorn_icon from "../../Icons/popcorn_icon.png"
import popcorn_candy_icon from "../../Icons/popcorn_candy_icon.png"
import cotton_candy_icon from "../../Icons/cotton_candy_icon.png"

export default function Main(){
    function submitForm(){
        alert("SUBMIT")
    }
    return(
        <Mainstyle className="main">
            <div className="container">
                    <h1>SERVIÇOS</h1>
                    <div className="wrapper">
                        <div className="item">
                            <img src={popcorn_candy_icon} className="icon"/>
                            <h2>Pipoca Doce</h2>
                        </div>
                        <div className="item">
                            <img src={popcorn_icon} className="icon"/>
                            <h2>Pipoca de Sal</h2>
                        </div>
                        <div className="item">
                            <img src={cotton_candy_icon} className="icon"/>
                            <h2>Algodão Doce</h2>
                        </div>
                    </div>  
                    <h1>ORÇAMENTO</h1>
                    <div className="wrapper orcamento">
                        <form action="./" method="POST" className="form">
                            <input type={"text"} placeholder="Nome Completo" minLength={5} maxLength={45}/>
                            <input type={"email"} placeholder="email@email.com" minLength={5} maxLength={45}/>
                            <input type={"number"} placeholder="34 991223344" minLength={8} maxLength={9}/>

                            <button onClick={() => {submitForm()}}>ENVIAR</button>
                        </form>
                    </div>
            </div>
        </Mainstyle>
    )
}