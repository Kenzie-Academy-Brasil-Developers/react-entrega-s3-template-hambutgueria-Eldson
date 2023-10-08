import styled from "styled-components";

export const ProductListStyle = styled.ul `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 56px;

    @media screen and (max-width: 560px) {
        width: 100%;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`;