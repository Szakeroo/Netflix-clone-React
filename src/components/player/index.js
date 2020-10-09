import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
import { PlayerContext } from "../../app";

export default function Player({ children, ...restProps }) {
    return (
            <Container {...restProps}>{children}</Container>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)} data-testid="player" {...restProps}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src={src} type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        )
        : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
            Play
        </Button>
    );
};
