import './header.css';
import { VscGithub } from "react-icons/vsc";

function Header() {
    return (
      <div className="header-container">
       <div className='topics'>
            <div className='topics-item'><h5>Arthur</h5></div>
            <div className='topics-item'><h5>Sobre Mim</h5></div>
            <div className='topics-item'><h5>Projetos</h5></div>
            <div className='topics-item'><h5>Contato</h5></div>            
       </div>
            <div className='icons-container'>
                <div className='icon' >
                    <a href="https://github.com/SparkyGuy"><VscGithub size="40px" color="#B6B6B6"/></a>
                </div>
            </div>
      </div>
    );
  }

export default Header;