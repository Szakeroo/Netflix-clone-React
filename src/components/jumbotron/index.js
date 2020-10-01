import React from "react";
import { Container, Inner, Wrapper, Title, SubTitle, Image, Item } from "./styles/jumbotron";

export default function Jumbotron({children, direction = "row", ...restProps}) {
    return (
        <Item  {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Wrapper = function JumbotronWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({...restProps}) {
    return <Image {...restProps}/>
}