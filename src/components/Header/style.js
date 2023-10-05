import styled from "styled-components";

export const HeaderStyle = styled.header `
    padding: 0px 118px;
    width: calc(100vw - 236px);
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
    }
`;