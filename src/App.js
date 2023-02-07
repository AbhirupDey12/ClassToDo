import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import './index.css'
import OrderSummary from "./component/OrderSummary";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import FeaturedProducts from "./component/FeaturedProducts";
import NewProducts from "./component/NewProducts";
import Users from "./component/Users";
import UserDetails from "./component/UserDetails";
import Admin from "./component/Admin";
import Profile from "./component/Profile";
import { AuthProvider } from "./component/auth";
import { Login } from "./component/Login";
import { RequireAuth } from "./component/RequireAuth";

const style = {
  textAlign: 'center'
}

export default function App() {
  return (

    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />} >
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />} >
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>

  )
};




























// let key = "2629cb07f801fedceda63abc5f4d1c51";
// let city = 'London';

// function App() {

//   const [data, setData] = React.useState([]);
//   const [city, setCity] = React.useState("");
//   const [temp, setTemp] = React.useState("");

//   React.useEffect(async () => {

//     let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
//     data = await data.json();
//     // data = data.dataseries;
//     // setData(data);
//     console.log(data);
//   }, []);


//   function cityHandler(e) {
//     setTemp(e.target.value);
//   }

//   function clickHandler() {
//     setCity(temp);
//   }



//   cloudcover
// : 
// 9
// lifted_index
// : 
// 6
// prec_type
// : 
// "none"
// rh2m
// : 
// 7
// seeing
// : 
// 6
// temp2m
// : 
// 21
// timepoint
// : 
// 3
// transparency
// : 
// key={index} style={style} 
// Key	Name	Status	Actions
// 726289ec156b0e5c8e53ce64db4a1b2f
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
// 3

// const style = {
//   border: "1px solid black",
//   backgroundColor: "yellow",
//   marginTop: "10px"
// }

// return (
//   <div>

//     <label htmlFor="CityName"> CityName </label>
//     <input type="text" id="CityName" value={city} onChange={temp} />
//     <button onClick={clickHandler} >Click Me</button>

{/* {
        data.map((ele, index) => {
          return (
            <div > */}
{/* <p> Timepoint : {ele.timepoint} </p>
              <p> Cloudcover : {ele.cloudcover} </p>
              <p> lifted_index : {ele.lifted_index} </p>
              <p> seeing : {ele.seeing} </p>
              <p> timepoint : {ele.timepoint} </p>
              <p> transparency : {ele.transparency} </p> */}
{/* 
            </div>
          )
        })
      }
    </div>
  ) */}

// }

// export default App;




// const style = {
//   textAlign: "center"
// }

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   render() {
//     return (
//       <div style={style}>

//         <PostForm />

{/* <PostList /> */ }
{/* <UserProvider value={"Vishwas"} >
          <ComponentC />
        </UserProvider> */}

{/* <Counter render = { (count , incrementCount) => 
        <ClickCounter2 count = {count} incrementCount = {incrementCount} 
        /> */}

{/* 
        <Counter render={(count, incrementCount) => {
          return (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )
        }} /> */}


{/* <Counter render={(count, incrementCount) => {
          return (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )
        }} /> */}

{/* <ClickCounter2 />
        <HoverCounter2 />
        <User render = { (isLoggedIn) =>  isLoggedIn ? "Vishwas" : "Guest" }  /> */}

{/* <ClickCounter /> */ }
{/* <HoverCounter name = "Vishwas" /> */ }
{/* <Hero heroName="Batman" />
          <Hero heroName="Superman" />
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ ErrorBoundary> */}
{/* <PortalDemo /> */ }
{/* <FRParentInput /> */ }
{/* <RefsDemo /> */ }
{/* <ParentComp /> */ }
{/* <Table /> */ }
{/* <FragmentDemo /> */ }
      // </div>
    // )
  // }

// }

// export default App;

