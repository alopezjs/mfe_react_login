import React, { Component } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import reactLogo from "../../assets/logo.png";

import firebase from "../../utils/firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: "",
    };
  }

  componentDidMount() {
    // firebase.auth().onAuthStateChanged(
    //   (user) => {
    //     if (user) {
    //       location.href = "/home";
    //     } else {
    //       console.log("Not logged");
    //     }
    //   },
    //   (error) => {
    //     console.log("ERROR onAuthStateChanged", error);
    //   }
    // );
  }

  login() {
    console.log(this.state.email, this.state.password);
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const user = response.user;
        sessionStorage.setItem("userId", user.uid);
        sessionStorage.setItem("userEmail", user.email);
        // location.href=
      })
      .catch((error) => {
        this.setState({ err: error.message });
        console.log("ERROR login", error);
      });
  }

  render() {
    return (
      <div className="flex justify-center h-full">
        <div className="w-1/3 mt-8 p-8 border border-gray-300 bg-white shadow-xl rounded justify-center">
          <div className="flex justify-center mb-8">
            <img className="w-24" src={reactLogo} />
          </div>
          {/* <p className="text-center"></p> */}
          <Input
            label="Email"
            // placeholder="Your email Address"
            value={this.state.email}
            onChange={(email) => {
              this.setState({ email });
            }}
          />
          <Input
            label="Password"
            type="password"
            // placeholder="Your password"
            value={this.state.password}
            onChange={(password) => {
              this.setState({ password });
            }}
          />
          <div className="flex justify-center">
            <Button
              onClick={() => {
                this.login();
              }}
            >
              Login
            </Button>
          </div>
          {this.state.err && (
            <p className="mt-4 text-center text-red-600">{this.state.err}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
