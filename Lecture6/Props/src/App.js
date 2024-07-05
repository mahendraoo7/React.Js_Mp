// import './App.css';
// import TemplateMain from './component/Demo/Template';

// function App() {

//   return ( 
//       //  <div>
//       //     <Template name="Template1" price="200" />        
//       //     <Template name="Template2" price="500" />        
//       //     <Template name="Template3" price="700" />        
//       //     <Template name="Template4" price="1000" />        
//       //  </div>

//       <div>
//          {/* <TemplateMain/>  */}
         
//       </div>

//   );
// }

// export default App;


import "./App.css";
// import Header from './components/Header';
import Template from "./Demo/Template";
import image1 from "./Assets/demo11(1).avif";
import image2 from "./Assets/demo11(2).jpg";
import image3 from "./Assets/demo11(3).jpg";
import image4 from "./Assets/demo11(4).jpg";
import image5 from "./Assets/demo11(5).jpg";
import image6 from "./Assets/demo11(6).jpg";

function App() {
  return (
    <div className="App">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product Template grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 justify-center">
        <Template image={image1} delPrice="199$" curPrice="149$" />
        <Template image={image2} delPrice="299$" curPrice="249$" />
        <Template image={image3} delPrice="399$" curPrice="349$" />
        <Template image={image4} delPrice="499$" curPrice="449$" />
        <Template image={image5} delPrice="599$" curPrice="549$" />
        <Template image={image6} delPrice="699$" curPrice="649$" />
      </div>
    </div>
  );
}

export default App;