import styled from "styled-components";

export const CartModalStyle = styled.dialog `
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0px;

    background-color: #00000040;

    .container_dialog {
        width: 484px;
        background-color: #fff;
        border-radius: 8px;

        .header_dialog {
            padding: 0px 14px;

            width: calc(100% - 28px);
            height: 57px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            background-color: var(--color-primary);
            border-radius: 8px 8px 0px 0px;

            h2 {
                color: #fff;
            }

            button {
                background-color: transparent;
                cursor: pointer;
            }
        }
    }
    
`;