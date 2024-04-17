import styled from "styled-components";

export const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);

    .modal {
        background-color: white;
        border-radius: 10px;
        width: 90%;
        margin: 0 auto;
        max-width: 500px;
        text-align: start;
        padding: 16px;

        header {
            display: flex;
            justify-content: space-between;
            button {
                border: none;
            }
        }

        ul {
            margin-top: 16px;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                font-size: 18px;
            }
        }
    }
`