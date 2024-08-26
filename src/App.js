import './App.css';
import { MainMenu } from './MainMenu';
import AnaYemek from './AnaYemek';
import Soğukİçecek from './Soğukİçecek';
import Tost from './Tost';
import Sıcakİçecek from './Sıcakİçecek';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu/>}></Route>
          <Route path='/ana-yemekler' element={<AnaYemek/>}></Route>
          <Route path='/soguk-icecekler' element={<Soğukİçecek/>}></Route>
          <Route path='/tostlar' element={<Tost/>}></Route>
          <Route path='/sicak-icecekler' element={<Sıcakİçecek/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
