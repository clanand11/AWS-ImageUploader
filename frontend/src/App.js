import './App.css';
import Navbar from './Components/Navbar/Navbar'
import UploadPage from './Pages/UploadPage';
import Uploads from './Pages/Uploads'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<UploadPage/>}/>
            <Route path='/uploadedImages' element={<Uploads/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
