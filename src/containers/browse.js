import React, {useContext, useEffect, useState} from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BrowseContainer( { slides } ) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },3000);
    },[profile.displayName]);

    return profile.displayName ? (
        <>
            {
                loading ? <Loading src={user.photoURL} /> : <Loading.RelaseBody />
            }
            <Header src={"joker1"}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt={"Netflix logo"}/>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureText>
                        Watch Joker Now!
                    </Header.FeatureText>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                </Header.Feature>
            </Header>
            </>
    ):(
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}