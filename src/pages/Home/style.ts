import styled from "styled-components";

export const HomeStyle = styled.main`
  .infos {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 16px 5%;
    h1 {
      font-weight: 600;
    }
    button {
      background-color: var(--primary);
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
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

  .filter {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 8px;
    max-width: 300px;

    button {
      padding: 12px;
      border: none;
      border-radius: 8px;
    }

    .clean {
      background-color: gray;
      color: white;
    }

    .search {
      background-color: blue;
      color: white;
    }
  }
  h1 {
    font-weight: 600;
  }
  select {
    width: 500px;
    max-width: 100%;
  }

  form {
    margin: 0 auto;
    margin-top: 16px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .delete {
      background-color: red;
      color: white;
    }

    input {
      padding: 0 16px;
    }

    .timeLabel {
      text-align: center;
      width: 100%;
      max-width: 500px;
      .timeInput {
        width: 100%;
        height: 50px;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid gray;
      }
    }

    .button {
      width: 100%;
      max-width: 500px;
      padding: 16px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
    }

    .confirm {
      background-color: var(--primary);
    }

    .cancel {
      background-color: red;
      color: white;
    }
  }

  .react-date-picker__wrapper {
    width: 500px;
    height: 40px;
    border-radius: 8px;
    max-width: 90vw;
  }
  .MuiFormControl-root {
    margin-left: 5%;
    width: 100%;
    max-width: 500px;
  }
  .MuiInputBase-root {
    label {
      text-align: unset;
    }
    width: 100%;
    max-width: 500px;
    height: 50px;
  }
  form {
    .MuiFormControl-root {
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .filterTitle {
        margin: 12px 5%;
    } 
    .filter {
      margin: 0 5%;
      flex-direction: row;

      .clean {
        min-width: 150px;
      }
      .search {
        min-width: 150px;
      }

      .react-date-picker__wrapper {
        max-width: 250px;
      }
    }
  }
`;