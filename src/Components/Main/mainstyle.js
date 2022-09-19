import styled from "styled-components"

export const Mainstyle = styled.main`
    margin: 15vh auto;
    width: 80%;
    height: 100vh;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid #19C5BE;
    color: #000;
    display: flex;
    justify-content: center;

    .container{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        color: #19C5BE;
    }
    .wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .image{
        width: 70%;
        height: 10vh;
    }
    .item{
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 15px;
        padding: 15px;
        border-radius: 10px;
        border: 3px solid #19C5BE;
        align-items: center;
        
        .icon{
            width: 10%;
        }

    }
    .item:hover{
            transition: all .5s;
            background-color: #19C5BE;
            color: #fff;
    }

    .orcamento{
        width: 60%;
        background-color: #5F6DB0;
    }

    .orcamento .form{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 10px;
        padding: 10px;
        border-radius: 8px;
    }

    .form input{
        width: 100%;
        margin: 5px;
        padding: 15px;
        border: 1px solid #fff;
        border-radius: 4px;
    }

    @media screen and (max-width: 856px){
        width: 98%;
        .container{
            margin-top: 40px;
        }
        .item{
            width: 80%;
        }
        .icon{
            width: 50%;
        }
    }
`