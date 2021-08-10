import React from "react";
import {connect} from 'react-redux'
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";


 const App = props => {
  return (



    
    <div className="App"> 
      <h1>
        Kitap  Alışveriş
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

const mapStateToProps = state => {
return {
  datam: state
}

}

export default connect(mapStateToProps)(App)