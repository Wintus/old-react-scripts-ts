import * as React from "react";

export class Square extends React.Component<{ value: number }> {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
