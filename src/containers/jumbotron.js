import React from 'react';
import jumboData from "../fixtures/jumbo"
import { Jumbotron } from "../components/";

export  function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) =>
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Wrapper>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Wrapper>
                    <Jumbotron.Wrapper>
                        <Jumbotron.Image src={item.image} alt={item.alt}/>
                    </Jumbotron.Wrapper>
                </Jumbotron>)}
        </Jumbotron.Container>

    )

}
