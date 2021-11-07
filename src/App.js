import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Home} from "./components/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";
import {Filter} from "./components/Filter/Filter";


const App = () => {
  return (
      <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route exact path="/">
                          <Header isHomePage={true}/>
                          <Home/>
                      </Route>
                      <Route path="/catalog">
                          <Header isHomePage={false}/>
                          <Filter/>
                          <Catalog/>
                      </Route>
                      <Route path="/cart">
                          <Header isHomePage={true}/>
                      </Route>
                  </Switch>
                  <Footer/>
              </div>
          </BrowserRouter>
      </div>
  );
};

export default App;
