// import logo from "./logo.svg";
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Our libraries
import Contacts from "./components/contacts/Contacts"; // shift option down
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Test from "./components/test/Test";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "The App Component")
// );
// const name = "Larry";
// const showHello = true;
// const showMath = true;
// const num1 = 40;
// const num2 = 23;

// let math;
// if (showMath) {
//   math = (
//     <h4>
//       {num1} + {num2} = {num1 + num2}
//     </h4>
//   );
// } else {
//   math = null;
// }
