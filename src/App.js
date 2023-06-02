import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnima() {
    const Animals =['bird','dog','gator','cow','horse','cat']
    return Animals[Math.floor(Math.random()*Animals.length)]
}

function App() {
    const [Animals, setAnimals] = useState([])
    const handleClick = () => {
        setAnimals([...Animals,getRandomAnima()])
    }
    const renderedAnimal = Animals.map((Animal,index)=>{
        return <AnimalShow type={Animal} key={index} />
    })
    return (
        <div className='app container'>
        <button onClick={handleClick}>Animal</button>
        <div className='animal-list'>{renderedAnimal}</div>
        </div>
    )
}

export default App;