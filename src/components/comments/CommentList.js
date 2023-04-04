import React, { useRef } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./List.css";

const CommentList = ({ commentList, setCommentList }) => {
  const editInputRef = useRef(null);

  const isEdit = (id) => {
    setCommentList(
      commentList.map((item) => { 
        if (item.id === id) {
          item.isEdit = !item.isEdit;
        }
        return item;
      })
    );
  };

  const delBtn = (id) => {
    if (window.confirm('정말로 지우실건가요?')) {
    setCommentList(commentList.filter((task) => task.id !== id))};
  };


  const editBtn = (id) => {
    isEdit(id);
  };

  const onChange = (event, id) => {
    setCommentList(
      commentList.map((item) => {
        if (item.id === id) {
          item.data = event.target.value;
        }
        return item;
      })
    );
  };

  const pressEnterKey = (event, id) => {
    if (event.charCode === 13) {
      isEdit(id);
    }
  };

  return (
    <ul  className="commentapp__list-ul">
      {commentList
        .filter((itemfilter) => itemfilter !== "")
        .map((item) => (
          <div key={item.id} className="commentapp__item">
            <li className="commentapp__item">
              {item.isEdit ? (
                <input
                  className="commentapp__inputbox-inp"
                  type="text"
                  defaultValue={item.data}
                  onKeyPress={(event) => pressEnterKey(event, item.id)}
                  ref={editInputRef}
                  autoFocus="autofocus"
                  onChange={(event) => onChange(event, item.id)}
                />
              ) : (
                <span
                className={`commentapp__item-ctx ${''}`}
                >
                {item.data}
              </span>
              )}
            </li>
            <div className="btnContainer">
                <button className="commentapp__item-edit-btn" onClick={() => editBtn(item.id)}>
                  <RateReviewIcon sx={{ fontSize: 25 }} />
                </button>
              <button className="commentapp__item-delete-btn" onClick={() => delBtn(item.id)}>
                <DeleteForeverIcon sx={{ fontSize: 30 }} />
              </button>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default CommentList;