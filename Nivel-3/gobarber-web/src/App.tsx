import React from 'react';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import AuthContextState from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContextState.Provider value={{ name: 'Thales' }}>
      <SignIn />
    </AuthContextState.Provider>

    <GlobalStyle />
  </>
);
export default App;
