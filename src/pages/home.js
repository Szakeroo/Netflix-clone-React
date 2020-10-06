import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { EmailForm } from "../components"
import { Feature } from "../components";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
                    <EmailForm id={"center"}>
                        <EmailForm.Input placeholder={"Email Address"}/>
                        <EmailForm.Button>GET STARTED</EmailForm.Button>
                        <EmailForm.ErrorMsg id={"center"}/>
                        <EmailForm.Break/>
                        <EmailForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                        </EmailForm.Text>
                    </EmailForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}