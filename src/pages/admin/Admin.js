import Create from "./Create";
import Update from "./Update";
import DeleteProd from "./DeleteProduct";
import { useState } from "react";
import { SelectList, SelectContainer } from "./adminStyles";

export default function Admin() {
  const [create, setCreate] = useState(true);
  const [update, setUpdate] = useState(false);
  const [deletePost, setDeletePost] = useState(false);

  const handleCreate = () => {
    setCreate(true);
    setUpdate(false);
    setDeletePost(false);
  };
  const handleUpdate = () => {
    setCreate(false);
    setUpdate(true);
    setDeletePost(false);
  };
  const handleDelete = () => {
    setCreate(false);
    setUpdate(false);
    setDeletePost(true);
  };
  return (
    <div>
      <SelectContainer>
        <SelectList
          style={{ textDecoration: create && "underline" }}
          onClick={handleCreate}
        >
          Creat a Product
        </SelectList>
        <SelectList
          style={{ textDecoration: update && "underline" }}
          onClick={handleUpdate}
        >
          Update a Product
        </SelectList>
        <SelectList
          style={{ textDecoration: deletePost && "underline" }}
          onClick={handleDelete}
        >
          Delete a Product
        </SelectList>
      </SelectContainer>
      {create && <Create />}
      {update && <Update />}
      {deletePost && <DeleteProd />}
    </div>
  );
}
