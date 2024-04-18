import styled from "styled-components";

export const CardMobileStyle = styled.div`
    background-color: var(--secundary);
    padding: 12px;
    border-radius: 10px;
    width: 90%;
    margin: 16px auto;
    cursor: pointer;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;

        li {
            display: flex;
            justify-content: space-between;
        }

        .actions {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            gap: 16px;
            margin-top: 8px;

            button {
                border: none;
                width: 100%;
                padding: 16px;
                border-radius: 8px;
                color: white;
                text-transform: uppercase;
            }
            .see {
                background-color: green;
            }
            .edit {
                background-color: blue;
            }

            .delete {
                background-color: red;
            }
        }
    }
`