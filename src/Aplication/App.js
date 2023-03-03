import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Mail from './Mail/Mail';
import EmailList from './EmailList/EmailList';
import SendMail from './SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../features/mailSlice';
import { login, selectUser } from '../features/userSlice';
import Login from './Login/Login';
import { auth } from './firebase';

function App() {
const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        //the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      } else {

      }
    })
  }, []
  )

  return (
    <Router>

    {!user ? (
      <Login />
      ) : (
        <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Routes>
          <Route path="/mail" element={<Mail />} />
          <Route path="/" element={<EmailList />} />
        </Routes>      
      </div>

      {sendMessageIsOpen && <SendMail />}
    </div>
      )}
    </Router>
  );
}

export default App;
