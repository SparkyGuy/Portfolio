import './main.css';
import Header from './components/header/header';
import Habilities from './components/habilities/habilities';

function Main() {
  return (
    <div className="main">
     <Header/>
     <div className='container'>
        <div className='light-text'>
          <h3>OLÁ, MEU NOME É</h3>
          <h1>ARTHUR ROBERTO</h1>
        </div>
        <div class="icons-comp">
            <Habilities />
            <Habilities />
        </div>
    </div>
    </div>

  );
}

export default Main;
