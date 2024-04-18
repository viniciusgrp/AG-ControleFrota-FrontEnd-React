import { HeaderStyle } from "./style"
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

interface IProps {
  changePages?: () => void;
}

export const Header = ({ changePages= () => console.log() } : IProps) => {
  return (
    <HeaderStyle>
      <div className="logo">
        <img src={Logo} alt="Logo da empresa" />
      </div>
      <nav>
        <ul>
          <li>
            <Link onClick={() => changePages()} to={"/"}>
              Página Inicial
            </Link>
          </li>
          <li>
            <Link to={"/veiculos"}>Veículos</Link>
          </li>
          <li>
            <Link to={"/motoristas"}>Motoristas</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};