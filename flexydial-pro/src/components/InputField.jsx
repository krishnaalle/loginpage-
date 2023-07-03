import React from 'react';

class InputField extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        className={this.props.className}
      />
    );
  }
}