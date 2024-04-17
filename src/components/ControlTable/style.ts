import styled from "styled-components";

export const ControlTableStyle = styled.table`
  margin: 16px 5%;
  border: 1px solid gray;
  border-radius: 8px;
  width: 90%;
  thead {
    background-color: #eaeaea;
    tr {
      border-bottom: 1px solid gray;
    }
  }
  tr {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.4fr 1.1fr 1.1fr 1fr 1.2fr 1.1fr 1fr 1.2fr 1fr 0.7fr;
    text-align: center;
    th {
      padding: 8px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      width: 100%;
      max-width: 100%;
    }
    td {
      padding: 8px;
        width: 100%;
        max-width: 100%;
    }
    th:not(:last-child) {
      border-right: 1px solid gray;
    }
    td:not(:last-child) {
      border-right: 1px solid gray;
    }
  }
  tr:not(:last-child) {
    border-bottom: 1px solid gray;
  }
  .actions {
    display: flex;
    justify-content: space-around;
    button {
        border: none;
    }
  }
`;