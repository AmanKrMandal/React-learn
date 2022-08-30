//App.js

import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
function App() {
  return (
    <div className="App">
    <Profile />
    </div>
  );
}

export default App;

//Profile.js

import { useState } from 'react'
function Profile() {
    const [loggedIn, setLoggedIn] = useState(3)
    return (
        <div>
           ? {loggedIn==1?
            <h1>Welcome User 1</h1>
            :loggedIn==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>}
        </div>
    )
}
export default Profile;
