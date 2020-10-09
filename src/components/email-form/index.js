import React, { createContext, useContext, useState } from "react";
import { Button, Container, Input, Text, Break, ErrorMsg, Wrapper } from "./styles/email-form";

const EmailContext = createContext();
export default function EmailForm({children, ...restProps}) {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleResetEmail = () => {
        if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
            setMessage("Email is required!")
        } else {
            setEmail("")
            setMessage("")
            alert(`Mail to ${email} has been sent!`)
        }
    };
    return (
        <EmailContext.Provider value={{email, setEmail, handleEmail, handleResetEmail, message}}>
            <Container {...restProps}>{children}</Container>
        </EmailContext.Provider>
    )
};
EmailForm.Input = function EmailFormInput({...restProps}) {
    const {email, handleEmail} = useContext(EmailContext)
    return <Input onChange={handleEmail} value={email} name={"email"} {...restProps} type={"email"}/>
};
EmailForm.Button = function EmailFormButton({children, ...restProps}) {
    const {handleResetEmail} = useContext(EmailContext)
    return (
        <Button onClick={handleResetEmail} {...restProps}>
            {children}
            <img src={"/images/icons/chevron-right.png"} alt={"Try Now"}/>
        </Button>
    );
};
EmailForm.Text = function EmailFormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};
EmailForm.Break = function EmailFormBreak({...restProps}) {
    return <Break {...restProps}/>
};
EmailForm.ErrorMsg = function EmailFormErrorMsg({...restProps}) {
    const {message} = useContext(EmailContext)
    return (
        <Wrapper>
            {
                message && <ErrorMsg>{message}</ErrorMsg>
            }
        </Wrapper>
    )
}