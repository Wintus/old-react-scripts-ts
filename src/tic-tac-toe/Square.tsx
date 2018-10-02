import * as React from "react";

export class Square extends React.Component<{}, { value: "X" | "O" | null }> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={this.setX}>
        {this.state.value}
      </button>
    );
  }

  private setX = () => this.setState({ value: "X" });
}
