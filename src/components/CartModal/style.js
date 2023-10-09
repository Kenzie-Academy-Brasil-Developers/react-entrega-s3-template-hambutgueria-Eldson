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
        max-width: 95%;
        height: auto;
        max-height: 450px;

        /* overflow-y: scroll; */
        background-color: #fff;
        border-radius: 8px;

        .header_dialog {
            padding: 0px 14px;

            width: calc(100% - 28px);
            height: 57px;

            position: static;

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

        .body_dialog {
            padding: 14px;
            max-height: 200px;
            overflow-y: scroll;

            
            ul {
                border-bottom: 2px solid var(--grey-100);
                padding-bottom: 14px;
            }
        }

        .total_price_container {
            padding: 14px;

            .header_total {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    color: var(--grey-600);
                }

                .price {
                    color: var(--grey-300);
                }
            }

            button {
                margin-top: 30px;
                width: 100%;
                height: 60px;

                background-color: var(--grey-400);
                border-radius: 8px;
                color: #fff;

                cursor: pointer;
            }
        }
    }
    
`;