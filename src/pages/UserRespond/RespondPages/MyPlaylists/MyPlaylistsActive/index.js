import React from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";

const UserRespondMyPlaylistsActive = () => {
    return (

        <Container fluid className={css(styles.container)}>
           <div>Active Playlist</div>
        </Container>
    );
}

export default UserRespondMyPlaylistsActive;
