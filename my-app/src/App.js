import React from 'react'
import DogCard from './DogCard'
import Counter from './Counter'

const App = () => {
  const imageData = {imageUrl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqRNGjpgj_trfUKqFwEvpcq1ttRPzgmQXLNQJgKUIMS0lqDKuY",imageName:"test1"}
  return (
    <div>
      <DogCard image = {imageData} />
      {/* <DogCard imageUrl = "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"/> */}
      {/* <DogCard imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEahq5SmQSC4D3gYNsifrmTHh7lpBPjqLhsg&s"/> */}
      {/* <Counter /> */}

    </div>
  )
}
 
export default App