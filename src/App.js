
import './App.css';
import LeftMenu from './Components/LeftMenu';
import MainContainer from './Components/MainContainer';
import RightMenu from './Components/RightMenu';


function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>
     <div className='background'></div>
    </div>
  );
}

export default App;




// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LeftMenu from './Components/LeftMenu';
// import MainContainer from './Components/MainContainer';
// import RightMenu from './Components/RightMenu';
// //import Home from './Home'; // Предполагается, что у вас есть компонент Home
// import Radio from './Components/Radio'; // Предполагается, что у вас есть компонент Radio

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <LeftMenu />
//         <Routes>
//           <Route path="/" element={<MainContainer />} />
//           {/* <Route path="/home" element={<Home />} /> */}
//           <Route path="/radio" element={<Radio />} />
//         </Routes>
//         <RightMenu />
//       </Router>
//       <div className='background'></div>
//     </div>
//   );
// }

// export default App;
