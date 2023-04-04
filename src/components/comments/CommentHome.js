import React, { useState } from "react";
import "./List.css";
import Comment from "./Comment"; // Todo input과 button을 compoent로 구성
import CommentList from "./CommentList"; // list 부분을 component로 설정
function CommentHome() {

  const [commentList, setCommentList] = useState([]); // hooks의 useState로 state관리, 배열로 초기화
  return (
    <div className="homepage__container">
      <p className="commentapp__list-tit">댓글</p>
      <Comment commentList={commentList} setCommentList={setCommentList} />
      <CommentList commentList={commentList} setCommentList={setCommentList}/>
    </div>
  );
}

export default CommentHome;