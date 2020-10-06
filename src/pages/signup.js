import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes"

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = firstName === "" || emailAddress === "" || password === "";

    const handleSignUp = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    <Form.Base onSubmit={handleSignUp} method={"POST"}>
                        <Form.Input
                        placeholder={"First Name"}
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder={"Email Address"}
                            value={emailAddress}
                            type={"email"}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder={"Password"}
                            value={password}
                            autoComplete={"off"}
                            type={"password"}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type={"submit"}>
                            Sign Up
                        </Form.Submit>
                        <Form.Error>{error}</Form.Error>
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensue you're not a bot. Learn more
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}