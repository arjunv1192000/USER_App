import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css'
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Loadingpage from './pages/Landingpage';
import { useSelector } from 'react-redux';


type RootState = {
  user: {
    value: {
      id: string | null;
      name: string | null;
      email: string | null;
      phone: string | null;
      access_token: string;
    };
  };
};


function App() {
  const userdata = useSelector((state: RootState) => state.user.value);
  

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Suspense fallback={<Loadingpage />}><Loginpage/></Suspense>} />
            <Route path='/home' element={<Suspense fallback={<Loadingpage />}>{userdata.name ? <Homepage/>: <Loginpage/>}</Suspense>} />
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
