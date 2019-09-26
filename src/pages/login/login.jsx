import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import { LANDING_PAGE } from "../../data/constants"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
    navigate(LANDING_PAGE)
  }

  render() {
    console.log(">>> IS LOGGED IN?", isLoggedIn())

    // if (isLoggedIn()) {
    //   navigate(`/app/profile`)
    // }

    return (
      <>
        <h1>Log in</h1>
        <form method="post" onSubmit={event => this.handleSubmit(event)}>
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login
