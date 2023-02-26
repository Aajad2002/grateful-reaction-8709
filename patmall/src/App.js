// import './App.css';
import Navbar from './Navbar/Navbar';
import Question from './Components/footer';
import Furniture from './ProductPage/Furniture';
import Signup from './SignIn/Signup';
import Login from './SignIn/Login';
import UserPage from './SignIn/UserPage';
import Grid from './Components/Grid';
import Home from './Pages/Home';
import Nav from './Navbar/search';
import Ornament from './ProductPage/Ornament';
import AllRoutes from './AllRoutes/AllRoutes';
import Admin from './ProductPage/Admin';
import Adress from './Pages/Adress';
import Payment from './Pages/Payment'
function App() {
  return (
    <div className="App">
 {/* <Question/>      */}
 <Nav/>

 <Navbar/>

 {/* <Payment/> */}
{/* <Home/> */}
 {/* <Admin/> */}
 {/* <Ornament/> */}
      {/* <Furniture/> */}
{/* <Adress/> */}
 <AllRoutes/>
  {/* <Login/>
  <Signup/> */}
  {/* <UserPage/> */}
  {/* <Grid/>
   */}
   
    </div>
  );
}

export default App;
