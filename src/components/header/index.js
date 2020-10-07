import React from "react";
import {Link as ReactRouterLink } from "react-router-dom";
import {Background, ButtonLink, Container, Feature, FeatureText, Logo, Text} from "./styles/header";

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
