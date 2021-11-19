import { useState } from "react";
import {
  Box,
  Container,
  InputNumber,
  Label,
  Button,
  Form,
  SuccessMessage,
} from "./adminStyles";

const DeleteProd = () => {
  const [success, setSuccess] = useState("");

  const API_URL = "http://localhost:5000/api/v1/products/";

  const formSubmitted = (e) => {
    e.preventDefault();
    const id = e.target.elements.id.value;

    deleteProd(id);

    async function deleteProd(id) {
      const res = await fetch(API_URL + id, {
        method: "DELETE",
      });
      setSuccess("Successfully Deleted");
      return await res.json();
    }

    e.target.elements.id.value = 0;
  };
  return (
    <Box>
      <Container>
        <Form onSubmit={formSubmitted}>
          {success === "Successfully Deleted" && (
            <SuccessMessage>{success}</SuccessMessage>
          )}
          <Label htmlFor="id">Product ID</Label>
          <InputNumber type="number" min="0" id="id" name="id" />
          <Button type="submit">Delete</Button>
        </Form>
      </Container>
    </Box>
  );
};

export default DeleteProd;
