import React,{ useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form} from "../components";

export default function SignIn() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInValid = password === "" || emailAddress === "";
    const handleSignIn = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method={"POST"}>
                        <Form.Input
                            placeholder={"Email Address"}
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type={"password"}
                            placeholder={"Password"}
                            autoComplete={"off"}
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disable={isInValid} type={"submit"}>
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}