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
            gap: 16px;
            margin-top: 8px;

            button {
                border: none;
                width: 50%;
                padding: 16px;
                border-radius: 8px;
                color: white;
                text-transform: uppercase;
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