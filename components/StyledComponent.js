import styled from 'styled-components'




export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor};
    width: 164px;
    height: 45px;
    color:  ${(props) => props.color};
    font-weight: bold;
    border: none;
    border-radius: .2rem;
`

export const CardWide= styled.div`
    background: #F8F8F8;
    border-radius: 34px 0px 35px 35px;
    width: 863px;
    height: 283px;
`