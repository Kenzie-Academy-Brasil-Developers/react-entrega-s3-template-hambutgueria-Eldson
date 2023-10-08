import styled from "styled-components";

export const HomeStyle = styled.main `
    padding: 17px 118px;
    width: calc(100vw - 260px); 

    @media screen and (max-width: 560px) {
        padding: 17px 10px;
        width: calc(100vw - 20px);
    }
`;