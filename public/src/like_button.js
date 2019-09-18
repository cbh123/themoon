"use strict";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <div
        className="card-title"
        onClick={() => this.setState({ liked: true })}
      >
        Like
      </div>
    );
  }
}

let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<LikeButton />, domContainer);
