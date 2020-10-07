import React from "react";
import {Header} from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import {Profiles} from "../components";

export function SelectProfileContainer({user, setProfile}) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Wrapper>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt={"Netflix logo"}/>
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Films</Header.TextLink>
                    </Header.Wrapper>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who is watching ?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile(
                        {
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}>
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}