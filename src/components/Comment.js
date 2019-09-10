import React, { Component } from "react";

import "./Comment.css";

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <>
        {data && (
          <div className="comment">
            <img src={data.author.avatar} alt="" />
            <p>
              <strong>{data.author.name}</strong> {data.content}
            </p>
          </div>
        )}
      </>
    );
  }
}
