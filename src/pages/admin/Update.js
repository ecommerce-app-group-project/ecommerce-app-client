import { useState } from "react";
import {
  Box,
  Container,
  InputText,
  InputNumber,
  Label,
  Button,
  TextArea,
  Form,
  ErrorMessage,
  SuccessMessage,
} from "./adminStyles";

const Update = () => {
  const [errorContainer, setErrorContainer] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = "https://retail-app-server.herokuapp.com/api/v1/products/";

  const formSubmitted = (e) => {
    e.preventDefault();
    const id = e.target.elements.id.value;
    const formData = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      quantity: Number(e.target.elements.quantity.value),
      price: Number(e.target.elements.price.value),
      image: e.target.elements.image.value,
    };

    if (formData.title.trim() === "") {
      setError("Title field can not be empty.");
      setErrorContainer(true);
      setTimeout(function () {
        setError("");
        setErrorContainer(false);
      }, 3000);
      return;
    } else if (isNaN(formData.price) || formData.price <= 0) {
      setError("Price must be greater than $0");
      setErrorContainer(true);
      setTimeout(function () {
        setError("");
        setErrorContainer(false);
      }, 3000);
      return;
    } else if (formData.description.trim() === "") {
      setError("Description field can not be empty.");
      setErrorContainer(true);
      setTimeout(function () {
        setError("");
        setErrorContainer(false);
      }, 3000);
      return;
    } else if (formData.quantity <= 0) {
      setError("Quantity must be greater than 0");
      setErrorContainer(true);
      setTimeout(function () {
        setError("");
        setErrorContainer(false);
      }, 3000);
      return;
    }

    updateProduct(formData, id);

    async function updateProduct(product, id) {
      const res = await fetch(API_URL + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      setSuccess("Successfully Posted");
      return await res.json();
    }

    e.target.elements.title.value = "";
    e.target.elements.description.value = "";
    e.target.elements.quantity.value = "";
    e.target.elements.price.value = "";
    e.target.elements.image.value = "";
  };
  return (
    <Box>
      <Container>
        <Form onSubmit={formSubmitted}>
          {errorContainer ? (
            <ErrorMessage id="errorMessage">{error}</ErrorMessage>
          ) : (
            ""
          )}
          {success === "Successfully Posted" && (
            <SuccessMessage>{success}</SuccessMessage>
          )}
          <Label htmlFor="title">Product Title</Label>
          <InputText type="text" id="title" name="title" />
          <Label htmlFor="description">Product Description</Label>
          <TextArea type="text" id="description" name="description" />
          <Label htmlFor="quantity">Quantity</Label>
          <InputNumber type="number" min="0" id="quantity" name="quantity" />
          <Label htmlFor="price">Price</Label>
          <InputNumber
            type="number"
            min="0"
            id="price"
            step="0.01"
            name="price"
          />
          <Label htmlFor="imageURL">Image URL</Label>
          <InputText type="text" id="imageURL" name="image" />
          <Label htmlFor="id">Product ID</Label>
          <InputNumber type="number" min="0" id="id" name="id" />
          <Button type="submit">Update</Button>
        </Form>
      </Container>
    </Box>
  );
};

export default Update;
