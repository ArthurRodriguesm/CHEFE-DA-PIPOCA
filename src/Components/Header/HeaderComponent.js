import React, {useState, useEffect}from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderTag } from "./headerstyle"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
    }, [])

    return(
        <HeaderTag>
            <div className="container">
                <nav>                  
                    <h1>CHEFE DA PIPOCA</h1>  
                    {(toggleMenu || screenWidth > 856) && (
                            <ul className="list">
                                <li className="items"><a href="#">HOME</a></li>
                                <li className="items"><a href="#">SOBRE</a></li>
                                <li className="items"><a href="#">ORÇAMENTO</a></li>
                                <li className="items"><a href="#">REDES SOCIAIS</a></li>    
                            </ul>                        
                    )}
                    <button className="btn" onClick={toggleNav}>
                        {<FontAwesomeIcon icon={faBars} />}
                    </button>
                </nav>
            </div>
        </HeaderTag>
    )    
}