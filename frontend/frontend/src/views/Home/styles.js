import styled from 'styled-components'

export const  Container = styled.div`
    width: 100%;
`

export const  FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background: none;
        border: none;
    
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #090fcb;
    display: flex;
    justify-content: center;
    margin-top: -25px;
    margin-bottom: 15px;

    h3{
        color: #090fcb;
        font-weight: bold;
        text-transform: uppercase;
        position:relative;
        top: 30px;
        background: white;
        padding: 0 10px;
    }
`