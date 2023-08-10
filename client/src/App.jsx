import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Pay from "./pages/Pay"
import Success from "./pages/Success";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(state=> state.user.currentUser );
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/products"><ProductList/></Route>
          <Route path="/products/:category"><ProductList/></Route>
          <Route path="/product/:id"><Product/></Route>
          <Route path="/cart"><Cart/></Route>
          <Route path="/login">
            {user?<Redirect to="/"/>:<Login/>}
          </Route>
          <Route path="/register">
          {user?<Redirect to="/"/>: <Register/>} </Route>
          <Route path="/pay"><Pay/></Route>
          <Route path="/success"><Success/></Route>
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
