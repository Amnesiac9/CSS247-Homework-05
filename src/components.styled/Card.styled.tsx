import styled, { keyframes, DefaultTheme } from 'styled-components';

export default function Card(props: { title: string, summary: string, image: string, link: string }) {

    return (
        <StyledCard onClick={() => { window.open(props.link) }}>
            <TopImage alt={props.title} src={props.image} />
            <Title>{props.title}</Title>
            <Summary>{props.summary}</Summary>
        </StyledCard>
    )
}



const grow = (theme: DefaultTheme) => keyframes`
    from {
        /* 00 is opacity 0 */
        box-shadow: 0 0 0px ${theme.accentColor};
        transform: scale(1);
    }
    to {
        box-shadow: 0 0 8px ${theme.accentColor};
        transform: scale(1.02);
    }
`

const shrink = (theme: DefaultTheme) => keyframes`
    from {
        box-shadow: 0 0 8px ${theme.accentColor};
        transform: scale(1.02);
    }
    to {
        box-shadow: 0 0 0px ${theme.accentColor};
        transform: scale(1);
    }
`

const StyledCard = styled.div`
    width: 200px;
    height: 200px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.borderColor};

    &:hover{
        animation: ${({ theme }) => grow(theme)} 250ms forwards;
    }

    &:not(:hover){
        animation: ${({ theme }) => shrink(theme)} 225ms forwards;
    }
    
`

const TopImage = styled.img`
    width: 100%;
    height: 50%;
    overflow: hidden;
    object-fit: contain;
    object-position: center;
`

const Title = styled.h5`
    padding: 0px 10px;
    margin: 2px 0;
`

const Summary = styled.p`
    padding: 10px;
    margin: 0px;
    font-size: 0.7rem;
`