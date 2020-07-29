import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchInput({ search, onSearchChange, onSearch}) {
  return (
    <Form onSubmit={onSearch}>
      <Form.Group controlId="translate-in">
        <Form.Label>Text to translate</Form.Label>
        <Form.Control
          value={search}
          placeholder="input the phrase you want to translate"
          onChange={evt => onSearchChange(evt.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}