import React, { Component } from "react";

class Input extends Component {
  render() {
    const {
      id,
      type = "text",
      placeholder,
      onChange,
      label,
      customClasses,
      value,
    } = this.props;
    return (
      <div className={`${customClasses} mb-4`}>
        {label && (
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(evt) => {
            onChange(evt.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
