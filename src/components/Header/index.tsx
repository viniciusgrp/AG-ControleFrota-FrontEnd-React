import { HeaderStyle } from "./style"
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <HeaderStyle>
            <div className="logo">
                <img src={Logo} alt="Logo da empresa" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Página Inicial</Link>
                    </li>
                    <li>
                        <Link to={'/veiculos'}>Veículos</Link>
                    </li>
                    <li>
                        <Link to={'/motoristas'}>Motoristas</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}