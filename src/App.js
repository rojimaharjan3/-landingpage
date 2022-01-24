import Fashion from './components/Fashion';
import Slider from './components/Slider';
import './App.css';
import fashion_1 from "./assests/fashion-01.jpg"
import fashion_2 from "./assests/fashion-1.jpg"
import fashion_3 from "./assests/fashion-2.jpg"
function App() {
  return (
    <div className="App">
      <Fashion imageSrc={fashion_1}/>
      <Slider 
        imageSrc={fashion_2} 
        title={"I am fashionista"}  
        subtitle={"Try new trends with me"}/>
      <Slider 
        imageSrc={fashion_3} 
        title={"Fashion defines you"}  
        subtitle={"Exploring new fashion in life , arounnd the world."}
        flipped={true}/>
    </div>
  );
}

export default App;
