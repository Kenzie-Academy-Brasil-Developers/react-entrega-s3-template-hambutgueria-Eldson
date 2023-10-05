import styled from "styled-components";

export const ProductCardStyle = styled.li `
    width: 300px;
    border-radius: 7px;
    border: 2px solid var(--grey-100);

    &:focus {
        border-color: var(--color-primary);
        transition: .5s;
    }

    .container_image {
        width: 100%;
        height: 150px;

        border-radius: 7px 7px 0px 0px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--grey-0);
    }

    .container_info {
        padding: 20px 21px;
        width:calc(100% - 42px);
        height: calc(196px - 40px);

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
            margin-bottom: 5px;
            color: #333333;
        }

        span {
            margin-bottom: 14px;
            color: var(--grey-300);
        }

        .color-span-body {
            margin-bottom: 20px;
            color: var(--color-primary);
        }

        button {
            padding: 10px 20px;
            border-radius: 8px;

            background-color: var(--grey-400);
            color: #fff;

            cursor: pointer;
        }
    }
`;