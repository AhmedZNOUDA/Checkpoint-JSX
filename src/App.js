import logo from './logo.svg';
import './App.css';
import './style.css';
import mySrcImage from "./ImageInSrc.jpg";

function App() {
  return (
<div className="App">
  <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

  <h1 className="title red">Your name here</h1>

  <br/>

 <img src={mySrcImage} alt="image" />

 <br/>

 <img src="imageInPublic.jpg" alt="image" />

 </div>

 <br/>

 <video style={{width:"320", height:"240" }} controls>

 <source style={{src:"myVideo.mp4", type:"video/mp4"}} />

 </video>
</div>
  );
}

export default App;
