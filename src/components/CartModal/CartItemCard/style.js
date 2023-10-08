import styled from "styled-components";

export const CartItemCardStyle = styled.li `
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left_container {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .image {
            width: 82.26px;
            height: 80px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 5px;
            background-color: var(--grey-100);

            img {
                width: 55px;
            }
        }

        .info_dialog {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;

            h3 {
                color: #333333;
            }

            p {
                color: var(--color-primary);
            }

        }
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }
`;