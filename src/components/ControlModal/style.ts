import styled from "styled-components";

export const ControlModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    background-color: white;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
    max-width: 300px;
    text-align: start;
    padding: 16px;
    overflow: auto;
    max-height: 90vh;
    
    header {
        display: flex;
        justify-content: space-between;
        
        h2 {
            margin-bottom: 8px;
        }
        button {
            background-color: red;
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 22px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;

        li {
            display: flex;
            justify-content: space-between;
        }
    }
  }
`;
