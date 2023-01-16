import styled from 'styled-components'

export const TileGroupDiv = styled.div`
    margin: 5%;
`;

export const TitleContainer = styled.div`
    border-bottom: 5px solid black;
    display: inline-block;
    min-width: 430px;

    @media only screen and (max-width: 768px) {
        border-bottom: 2px solid black;
        min-width: 100px;
    }

    @media only screen and (max-width: 360px) {
        text-align: center;
        align-self: center;
    }
`;

export const TileGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 5%;
    column-gap: 20px;
    padding: 3%;

    @media only screen and (max-width: 1520px) {
        grid-template-columns: 1fr 1fr 1fr;  
    }

    @media only screen and (max-width: 1140px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 620px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 410px) {
        grid-template-columns: 1fr;
    }
`;


export const Tiles = styled.div`
    border: 1px solid #4A6E82;
    width: 280px;
    height: 280px;
    background: #FFFFFF;
    box-shadow: 4px 4px 15px rgba(114, 141, 149, 0.15);
    border-radius: 30px;
    overflow: hidden;
    cursor:pointer;
    justify-self: center;
    
    @media only screen and (max-width: 768px) {
        border: 1px solid #4A6E82;
        width: 150px;
        height: 125px;
        background: #FFFFFF;
        box-shadow: 4px 4px 15px rgba(114, 141, 149, 0.15);
        border-radius: 10px;
    }
`;

export const Heading = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 30px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
        line-height: 10px;
    }
`;
