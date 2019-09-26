import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout/layout"
import PrivateRoute from "../components/routs/privateRoute"
import Profile from "../components/profile"
import Login from "./login/login"
import About from "./about/about"

const App = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
      <PrivateRoute path="/app/about" component={About} />
      <PrivateRoute path="/app/profile" component={Profile} />
    </Router>
  </Layout>
)

export default App
