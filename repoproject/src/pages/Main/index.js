import React, { useState } from "react";
import { Container, Form, SubmitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newRepo);
  }

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} color="red" />
        Meus Repositórios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="+ add Repository"
          value={newRepo}
          onChange={handleInputChange}
        />
        <SubmitButton >
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}