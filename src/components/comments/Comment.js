import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./List.css";

const Comment = ({ setCommentList, commentList }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const inputRefFocus = () => {
    inputRef.current.focus();
  };

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onClickBtn = () => {
    if (!input) {
      inputRefFocus();
      return;
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    setCommentList([...commentList, { id, data: input, isComplete: true }]);
    setInput("");
    inputRefFocus();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRefFocus();
  }, []);

  return (
    <div className="commentapp__list">
      <form className="commentapp__item" onSubmit={onSubmit}>
        <input className="commentapp__inputbox-inp" value={input} onChange={onChange} ref={inputRef} placeholder="Comments.." />
        <IconButton type="commentapp__inputbox-add-btn" size="small" style={{ padding: 0 }} onClick={onClickBtn}>
          <AddCircleIcon
            style={{
              color: "#f71d83",
            }}
            sx={{ fontSize: 50 }}
          />
        </IconButton>
      </form>
    </div>
  );
};

export default Comment;