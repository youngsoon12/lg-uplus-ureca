import React from "react";
import Comment from "./components/Comment";

interface CommentType {
  name: string;
  comment: string;
}

function App() {
  const comments: CommentType[] = [
    { name: "고명진", comment: "hi" },
    { name: "고은진", comment: "hello" },
    { name: "최우진", comment: "진남매화이팅 ~!" },
  ];

  console.log(comments);

  return (
    <div className="App">
      {comments.map((comment, idx) => (
        <Comment key={idx} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
}

export default App;
