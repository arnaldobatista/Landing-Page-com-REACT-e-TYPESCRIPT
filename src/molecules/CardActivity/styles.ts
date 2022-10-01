import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 105px;
    left: 80px; 
    background-color: #daaaff;
    color: #fff;
    width: 154px;
    height: 77px;
    border-radius: 12px;
    text-align: left;
    padding: 11px;
    overflow: hidden;

    small {
        font-size: 15px;
    }

    div {
        displey: flex;
        align-items: center;

        span {
            font-size: 23px;
            font-weight: 400;
            margin-right: 5px;
        }
    }

    i {
        width: 154px;
        height: 77px;
        position: absolute;
        border-radius: 50px;
        &.circle1 {
            left: 90px;
            top: -20px;
            border: 1px solid black;
       }
        &.circle2 {
            left: 90px;
            bottom:-20px;
            border: 1px solid black;
            transform: rotate(45deg);
       }
       
`  