import styled from "styled-components"

export const HeaderTag = styled.header`
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        background: #FFC639;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    h1{
        color: #fff;
    }
    h1:hover{
        color: #FF8A47;
        cursor: pointer;
    }
    .list {
        list-style-type: none;
        background: #FFC639;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .items {
        margin-right: 20px;
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;
    }
    .items > a{
        text-decoration: none;
        color: #FFF;
    }
    a:hover{
        color: #FF8A47;
    }
    .btn {
        display: none;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 7px;
        padding: 5px;
        background-color: #FF8A47;
        color: #000;
        font-size: 18px;
    }

    @media screen and (max-width: 856px){
        nav{
            display: block;
            flex-direction: column;
            height: 80px;
            
            h1{
                text-align: center;
            }
        }
        .list {
            flex-direction: column;
            height: auto;
        }
        .items:nth-child(1){
            border-top: 1px solid rgba(255, 255, 255, 0.555);
            margin-top: 50px;
        }
        .items {
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, 0.555);
            text-align: center;
            margin-right: 0px;
            padding: 20px 0;
        }
        .btn {
            display: block;
        }
}

`