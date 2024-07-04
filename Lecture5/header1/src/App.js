import './App.css';
import Header from './component/Header';

function App() {

  const firstName = "Mahendra" ;
  const lastName = "Purohit";

  const arr = ["hello","world","univers","galaxy","air"] ;

  return (

     <div className="grid justify-center h-[500px] " >
       <h3>
        my name is {firstName}{lastName}
       </h3>
     <hr />

       <h1>10 + 20 = {10+20}</h1>

       {arr.map((cvalue ,index , arr ) => {
        return (
          <div>
            <p>my name is {cvalue}</p>
          </div>
        )
       })}
       <hr />
       <h1>img in react.js</h1>
       <Header/>
     </div>


  );
}

export default App;
