import React, { Component } from "react";
import Joi from "joi-browser";

class ContactForm extends Component {
  state = {
    formData: { name: "", email: "", message: "" },
    errors: { name: "", email: "", message: "" } // it should be empty but like this we start with an invalid form and text of the button is "all fields required"
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    message: Joi.string()
      .required()
      .label("Message")
  };

  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage.message;
    else delete errors[e.currentTarget.name];
    const formData = { ...this.state.formData };
    formData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ formData, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0] : null;
  };

  validateForm = () => {
    const result = Joi.validate(this.state.formData, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) {
      e.preventDefault();
      return;
    }
    // if everything is ok, default behaviour
  };

  getButtonText = () => {
    if (Object.keys(this.state.errors).length === 0) return "SEND";
    if ("email" in this.state.errors) {
      if (this.state.errors.email.includes("valid")) {
        return "Invalid email";
      }
    }
    return "All fields required";
  };

  render() {
    this.validateForm();
    return (
      <React.Fragment>
        <form method="POST" data-netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                value={this.state.formData.name}
                onChange={this.handleChange}
                type="text"
                className="form-control input"
                id="name"
                placeholder="Name *"
                name="name"
              />
            </div>
            <div className="form-group col-md-12">
              <input
                value={this.state.formData.email}
                onChange={this.handleChange}
                type="email"
                className={`form-control input ${
                  this.state.errors.email !== "" ? "1" : "2"
                }`}
                id="email"
                placeholder="Email *"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              value={this.state.formData.message}
              onChange={this.handleChange}
              className="form-control input"
              id="message"
              rows="6"
              placeholder="Message *"
              name="message"
            />
          </div>
          <button
            type="submit"
            disabled={this.validateForm()}
            className={`col-sm-12 submit-button ${
              this.validateForm() ? "disabled" : "enabled"
            }`}
          >
            {this.getButtonText()}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
