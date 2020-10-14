import React from "react";
import faqsData from "../fixtures/faqs.json"
import { Accordion } from "../components";
import EmailForm from "../components/email-form";

export function FaqsContainer() {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {
                faqsData.map(item =>
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
                )
            }
            <EmailForm >
                <EmailForm.Input placeholder={"Email Adress"}/>
                <EmailForm.Button id={"padding"}>GET STARTED</EmailForm.Button>
                <EmailForm.ErrorMsg/>
                <EmailForm.Break/>
                <EmailForm.Text id={"margin-left"}>Ready to watch? Enter your email to create or restart your membership</EmailForm.Text>
            </EmailForm>
        </Accordion>
    )

}
