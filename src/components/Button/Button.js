import React, { Component } from "react";

const types = {
  main: "bg-purple-600 text-white font-bold rounded",
  secondary:
    "bg-blue-500 text-white font-semibold hover:border-transparent rounded",
  other:
    "bg-blue-500 border border-white text-white font-semibold hover:border-transparent rounded",
  danger: "bg-red-500 hover:bg-red-600 text-white font-bold rounded",
  link: "bg-transparent text-blue-500 font-semibold",
  disabled: "opacity-50 cursor-not-allowed",
};

class Button extends Component {
  render() {
    const { onClick, children, type, isDisabled, id } = this.props;
    return (
      <button
        id={id}
        disabled={isDisabled}
        className={`focus:outline-none py-2 px-4  ${types[type || "main"]} ${
          isDisabled ? types.disabled : ""
        } ${this.props.customClasses || ""} `}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
