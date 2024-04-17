import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  gap: 20px;
  background-color: var(--primary);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;

  .logo {
    height: 50px;
    background-color: rgba(255,255,255,0.3);
    box-sizing: content-box;
    border-radius: 10px;
    padding: 8px;

    img {
        max-height: 100%;
    }
  }

  nav {
    width: 100%;
    ul {
        display: flex;
        list-style: none;
        width: 100%;
        justify-content: space-around;
        a {
            text-decoration: none;
            color: white;
            background-color: blue;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 700;
        }
    }
  }

  @media screen and (min-width: 768px){
    flex-direction: row;
    padding: 16px 5%;

    nav {
        ul {
            justify-content: flex-end;
            gap: 20px;
            a {
                padding: 16px;
            }
        }
    }
  }
`;