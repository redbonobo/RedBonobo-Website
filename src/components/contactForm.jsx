import React, { Component } from "react";
import FormError from "./common/formError";
import Joi from "joi-browser";

class ContactForm extends Component {
  state = {
    formData: { contactName: "", email: "", message: "" },
    errors: {}
  };

  schema = {
    contactName: Joi.string()
      .required()
      .label("Contact Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    message: Joi.string()
      .required()
      .label("Message")
  };

  handleChange = e => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(e.currentTarget);
    // if (errorMessage) errors[e.currentTarget.name] = errorMessage.message;
    // else delete errors[e.currentTarget.name];

    const formData = { ...this.state.formData };
    formData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ formData }); // if I uncomment the upper section, I shall add "errors" to the state
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
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // when everything is correct, call the server
  };

  render() {
    return (
      <form style={{ width: "500px" }} onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              value={this.state.formData.contactName}
              onChange={this.handleChange}
              type="text"
              className="form-control input input-short"
              id="contactName"
              placeholder="Contact name"
              name="contactName"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              value={this.state.formData.email}
              onChange={this.handleChange}
              type="email"
              className="form-control input input-short"
              id="email"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            value={this.state.formData.message}
            onChange={this.handleChange}
            className="form-control input input-long"
            id="message"
            rows="5"
            placeholder="Message"
            name="message"
          />
        </div>
        {this.state.errors.contactName && (
          <FormError error={this.state.errors.contactName} />
        )}
        {this.state.errors.email && (
          <FormError error={this.state.errors.email} />
        )}
        {this.state.errors.message && (
          <FormError error={this.state.errors.message} />
        )}
        <button className="btn btn-primary">
          <i
            className="fab fa-telegram-plane"
            style={{ margin: "0 10px 0 0" }}
          />
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
