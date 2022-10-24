import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Button from './components/button/Button.component'
import Checkout from './routes/checkout/checkout.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>  {/* The '/' is the raw url. */}
        <Route index element={<Home />} />  {/* /home/ */}
        <Route path='shop' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
