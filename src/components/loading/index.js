import React from "react";
import {LockBody, Picture, ReleaseBody, Spinner} from "./loading";


export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
    )
}
Loading.RelaseBody = function LoadingReleaseBody() {
    return <ReleaseBody/>
}