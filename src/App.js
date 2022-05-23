

import { Route, Routes } from 'react-router-dom';
import { Home } from './pugazh-project/home';
import {  Regis } from './pugazh-project/regis';
import { SignIn } from './pugazh-project/signin';
import { SuccessFully } from './pugazh-project/successfully';
import { SignUp } from './signup';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/'element={<Regis />} />
       <Route path='/signin'element={<SignIn />} />
       <Route path='/signin/successfully'element={<SuccessFully />} />
       <Route path='/signup'element={<SignUp />}></Route>
       <Route path='/signin/successfully/Home'element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
