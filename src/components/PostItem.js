import React, { Component } from "react";

import Comment from "./Comment";

import "./PostItem.css";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <>
        {data && (
          <li className="post-item">
            <header>
              <img src={data.author.avatar} alt="" />
              <p className="content">
                {data.author.name}
                <small>{data.date}</small>
              </p>
            </header>
            <div className="body">
              <p>{data.content}</p>
            </div>
            {data.comments.length > 0 && (
              <div className="comments">
                {data.comments.map(comment => (
                  <Comment key={comment.id} data={comment} />
                ))}
              </div>
            )}
          </li>
        )}
      </>
    );
  }
}
