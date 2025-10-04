import cardScientist from "./Components/CardSientist";
import {cientist} from './data/cientist';

function App(){
  return (
    <div style={{padding:'2rem', fontFamily:'sans-serif'}}>
      <h1>Científicos Notables</h1>
      {cientist.map((cientist, index) => (
        <cardScientist>
          key={index}
          name={cientist.name}
          image=[cientist.image]
          profession={cientist.profession}
          discoveries={cientist.discoveries}
        </cardScientist>
      ))}
    </div>
  );
}

export default App;