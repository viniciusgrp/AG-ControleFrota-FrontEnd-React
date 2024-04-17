import styled from "styled-components";

export const VeiculosStyle = styled.main`
  .container {
    width: 100%;
    height: 100%;
    margin: 50px auto;
    padding-top: 30px;
    padding-bottom: 50px;
    max-width: 1100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--secundary);
    border-radius: 15px;
  }
  h1 {
    font-weight: 600;
  }
  select {
    width: 500px;
  }

  form {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    button {
      width: 90%;
      margin-left: 5%;
      max-width: 500px;
      border: none;
      background-color: var(--primary);
      padding: 16px;
      border-radius: 10px;
      color: white;
      text-transform: uppercase;
      font-weight: 700;
    }

    .delete {
      background-color: red;
      color: white;
    }
  }

  .MuiFormControl-root {
    margin-left: 5%;
    width: 90%;
    max-width: 500px;
  }
  .MuiInputBase-root {
    width: 100%;
  }
`;