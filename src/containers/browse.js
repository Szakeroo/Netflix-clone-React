import React, { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading, Card } from "../components";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BrowseContainer({slides}) {
    const [profile, setProfile] = useState({});
    const [category, setCategory] = useState("series");
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    },[slides, category])

    return profile.displayName ? (
        <>
            {
                loading ? <Loading src={user.photoURL}/> : <Loading.RelaseBody/>
            }
            <Header src={"joker1"} dontShowOnSmallVP>
                <Header.Frame>
                    <Header.Wrapper>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt={"Netflix logo"}/>
                        <Header.TextLink
                            active={category === "series" ? "true" : "false"}
                            onClick={() => setCategory("series")}>
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === "films" ? "true" : "false"}
                            onClick={() => setCategory("films")}>
                            Films
                        </Header.TextLink>
                    </Header.Wrapper>
                    <Header.Wrapper>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <Header.Profile>
                            <Header.Picture src={user.photoURL}/>
                            <Header.Dropdown>
                                <Header.Wrapper>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Wrapper>
                                <Header.Wrapper>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign
                                        out</Header.TextLink>
                                </Header.Wrapper>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Wrapper>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureText>
                        Watch Joker Now!
                    </Header.FeatureText>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets
                        of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he
                        projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {
                    slideRows.map((slideItem) =>
                        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map((item) =>
                                    <Card.Item key={item.docId} item={item}>
                                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                    )}
                            </Card.Entities>
                            {/*<Card.Feature category={category}>*/}
                            {/*    <Player>*/}
                            {/*        <Player.Button/>*/}
                            {/*        <Player.Video src={"/videos/bunny.mp4"}/>*/}
                            {/*</Card.Feature>*/}
                        </Card>
                    )
                }
            </Card.Group>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile}/>
    )
}