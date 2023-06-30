import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Coocked from './scenes/coocked/Coocked'
import Header from './scenes/header/Header'
import Screen from './scenes/screen/Screen'
import Contacts from './scenes/contacts/Contacts'
import Footer from './scenes/footer/Footer';
import Catalog from './scenes/catalog/Catalog';
import Order from './scenes/order/Order';
import Benefits from './scenes/benefits/Benefits';

function App() {

  return (
    <>
      <Header/>
      <main>
        <Screen/>
        <Coocked/>
        <Catalog/>
        <Benefits/>
        <Order/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}

export default App
