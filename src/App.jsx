import './App.css'
import { Navbar, Nav, Form, Button, Image  } from 'react-bootstrap';
import myData from './assets/data'
import MyCard from './components/MyCard';
import logo from './assets/logo.png'
function App() {
 const myCards = myData.map((place,index)=>{
    return(
      <MyCard
      key= {index}
      {...place}
      />
    )
  })
  return (
    <div className='container'>
   <Navbar className='nav d-flex justify-content-center p-2 navbar--bg-clr'>
    <Navbar.Brand className='text-light' href="#home"> <Image src={logo} /> my travel journal.</Navbar.Brand>
   </Navbar>
   <div className="container p-0">
      {myCards.length && myCards}
   </div>
   </div>
  )
}

export default App
