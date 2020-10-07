import React from "react";
import {Link as ReactRouterLink } from "react-router-dom";
import {
    Background,
    ButtonLink,
    Container,
    Feature,
    FeatureText,
    Logo,
    Link,
    Text,
    Wrapper,
    Picture, Dropdown, Profile,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background { ...restProps }>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container { ...restProps }>{children}</Container>
};

Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
};
Header.FeatureText = function HeaderFeatureText({ children, ...restProps}) {
    return <FeatureText {...restProps}>{children}</FeatureText>
};
Header.Text = function HeaderText({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
};
Header.TextLink = function HeaderTextLink({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
};
Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return <Wrapper{ ...restProps }>{children}</Wrapper>
};
Header.Picture = function HeaderPicture({ src ,...restProps }) {
    return <Picture src={`images/users/${src}.png`}{ ...restProps }/>
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile{ ...restProps }>{children}</Profile>
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo { ...restProps }/>
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}) {
    return <ButtonLink { ...restProps }>{children}</ButtonLink>
}
