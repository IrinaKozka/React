import {useState} from 'react';
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebaseConfig'
import UserPage from './components/UserPage/UserPage';
import SearchPage from './components/SearchPage/SearchPage';
import { authContext } from './helpers/authContext'

// nazwy importow z docsow

function App() {
  const [ loggedIn, setLoggedIn] = useState(false)
  onAuthStateChanged(auth, (user) => {
    if(user) {
      setLoggedIn(true);
    }else{
setLoggedIn(false);
      }
    
  })

  return (
    <div className="App">
      <BrowserRouter>
      <authContext.Provider value={loggedIn}>
        {/* tu komp maja wyswietlac sie caly czas */}
        <Navbar />
        {/* ------------- */}
        {/*  Routy - tu komp kt beda pojawiac i znikac, podstrony kt beda sie przelaczac */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/search" element={<SearchPage />} />

          {/* manipulacja urlem jak innerhtml '/' routs -tu ul
  route to li
  zawsze w parze 
  Routy to podstrony 
  dzialaja na podstawie urla
  / - homepage */}
        </Routes>
        <HomePage />
        {/* tu ponizej znow komp kt sie wyswietlac caly czas, np footer */}
        </authContext.Provider>
      </BrowserRouter>
      {/* browser zawszwe ogolnie ale poza Routs statyczne ktore zawsze wyswietlone niezalaznie od wszystkiego */}
    </div>
  );
}

export default App;
