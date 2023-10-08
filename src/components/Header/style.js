import styled from "styled-components";

export const HeaderStyle = styled.header `
    margin: 0 auto;
    padding: 0 118px;
    width: calc(100% - 236px);
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--grey-0);

    .card_button {
        background-color: transparent;
        
        span {
            padding: 3px 5px;
            background-color: var(--color-primary);
            border-radius: 7px;

            position: relative;
            right: 10px;
            bottom: 23px;
            
            color: white;
            font-size: 14px;
            font-weight: 700;
        }

        cursor: pointer;
    }

    @media screen and (max-width: 560px) {
        padding: 0 10px;
        width: calc(100vw - 20px) ;
    }
`;