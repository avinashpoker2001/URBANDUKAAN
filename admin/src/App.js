import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login"

function App() {
  let admin;

  if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null){
    admin= false
  }
else
 { if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser){
    admin = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).isAdmin;
} else{
  admin = false
}}
  // const admin = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).isAdmin
  return (
    <Router>
      <Switch>
      <Route path="/login">
         { admin?<Redirect to="/"/>:<Login/> }
      </Route>
      {
        admin && <>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Route path="/">
          {admin? <Home/> : <Redirect to="/login"/>}
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
      </div>
      </>
      }
      </Switch>
    </Router>
  );
}

export default App;
