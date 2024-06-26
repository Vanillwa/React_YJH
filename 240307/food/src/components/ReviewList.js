import { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";
import localeContext from "../contexts/localeContext";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onEdit, onDelete }) {
  const local = useContext(localeContext)

  const handleEditClick = () => {
    onEdit(item.id);
  };

  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  return (
    <div className='ReviewListItem'>
      <img className='ReviewListItem-img' src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <p>현재 언어 : {local}</p>
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onUpdate, onUpdateSuccess, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <ul>
      {items.map((el) => {
        // 수정 데이터
        if (el.id === editingId) {
          const { id, title, rating, content, imgUrl } = el;
          const initialValues = { title, rating, content, imgFile: null };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <li key={el.id}>
              <ReviewForm initialValues={initialValues} initialPreview={imgUrl} onSubmit={handleSubmit} onSubmitSuccess={handleSubmitSuccess} onCancel={handleCancel} />
            </li>
          );
        }
        // 수정하는 데이터가 아닐때
        return (
          <li key={el.id}>
            <ReviewListItem item={el} onEdit={setEditingId} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
