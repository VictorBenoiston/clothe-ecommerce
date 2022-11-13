import { useEffect } from "react";
import { useDispatch } from 'react-redux'

import { Routes, Route, Link } from 'react-router-dom'

import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from './utils/firebase/firebase.utils'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { setCurrentUser } from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        // If there is not current user with the google log in, it will create.
        if(user){
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
    })

    return unsubscribe
}, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>  {/* The '/' is the raw url. */}
        <Route index element={<Home />} />  {/* /home/ */}
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
