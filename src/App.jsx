import Hero from './components/Hero'
import Header from './components/Header'
import './App.css'
import MyCard from './components/MyCard'
// import MyCarousel from './components/MyCarousel'



// import img1 from './assets/image 12.png'
// import img2 from './assets/wedding-photography 1.png'
// import img3 from './assets/mountain-bike 1.png'
import data from './assets/data.js'
import { Card } from 'react-bootstrap'
import Footer from './components/Footer'



function App() {
  const myCards = data.map((item)=>{
    return(
      <MyCard
      // in order to make some code compression, we pass the whole item to the component
      // key       = {item.id}
      // img       = {item.coverImg}
      // rate      = {item.stats.rating}
      // rate1     = {item.stats.reviewCount}
      // title     = {item.title}
      // price     = {item.price} 
      // openSpots = {item.openSpots}
      // location  = {item.location}
      key  = {item.id}
      // instead of props = props.item use the spread operator
      {...item}
      />
    )
  })

// how do you render an array of components through a for loop? I should ask this!
  //  console.log(myCards)
  
  return (
    <div className="container-fluid">
        <Header/>
        <Hero/>
        <div className="card-list d-flex flex-row justify-content-between ">
          {myCards}
        </div>
        <Footer/>
      
    </div>
  
  )
}

export default App
