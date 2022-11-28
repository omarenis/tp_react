import React, {Component} from "react";

export default class ComponentWithProps extends Component{
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>{this.props.title}</div>)
  }
}
