import './App.css';
import MyNavBar from './components/MyNavBar.js';
// import Text from './components/Text.js';
import MainCarousel from './components/MainCarousel.js';
//importing bgImage component
// import BgImage from './components/BgImage.js';


//example of bootstrap
// import { Button } from 'react-bootstrap';

// function CreateButton(){
//   return (
//     <Button variant="primary">Primary</Button>
//     // <h2> hellow world!!!!</h2>
//   );
// }


function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MainCarousel/>
    </div>
  );
}

export default App;
