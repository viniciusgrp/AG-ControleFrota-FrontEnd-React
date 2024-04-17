import styled from "styled-components";

export const ModalDeleteStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);

    .modal {
        background-color: white;
        padding: 22px;
        border-radius: 16px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 100%;
        max-width: 550px;

        .buttons {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 24px;

            button {
                border: none;
                border-radius: 8px;
                text-transform: uppercase;
                width: 50%;
                padding: 16px;
            }

            .delete {
                background-color: red;
                color: white;
            }

            .cancel {
                background-color: blue;
                color: white;
            }
        }
    }
`