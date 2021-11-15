import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col, Dropdown, } from "react-bootstrap";
import { StyledImageCircle, StyledButtonSimpleFluid, StyledCardChanel } from "components"

import img_edit from "assets/images/icons/edit.png";
import { dataQcastersProfile, dataJessica, dataDavidQ, dataDavidJacob } from "fakeapi";

import { ROUTES } from "../../../constants";
import { Link, useLocation, NavLink } from "react-router-dom";

const UserChannelProfileEdit = (props) => {

  const { pathname } = useLocation();

  const [search, setSearch] = React.useState(' ');

  const handleOnClickForward = (selectedID) => {
    console.log("Forward");
  };
  const editBanner = (selectedID) => {
    console.log(selectedID);
  };
  const editPhoto = (selectedID) => {
    console.log(selectedID);
  };
  const editProfile = (selectedID) => {
    console.log(selectedID);
  };

  return (
    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerBackground)}>
        <img className={css(styles.imgProfileBackground)} src="" alt="" />
        <div className={css(styles.bannerChangeBtn)}>
          <StyledButtonSimpleFluid
            size={16}
            value={"Add Banner"}
            buttonOnClick={(e) => editBanner(dataJessica[0].id)}
          />
        </div>
      </div>
      <div className={css(styles.containerProfiledata)}>
        <div className={css(styles.coverImg)}>
          <StyledImageCircle size="large" imgSrc={dataDavidJacob[0].logo} />
          <div className={css(styles.cover)} ></div>
          <div className={css(styles.editPhone)} onClick={(e) => editPhoto(dataJessica[0].id)}>
            <img
              src={img_edit}
              alt=""
              className={css(styles.img_24)}
            />
            <span className={css(styles.chPhotoTxt)}>Change Photo</span>
				</div>
        </div>
        <div className={css(styles.formGroup)}>
          <label>Profile Name</label>
          <input type="text" className={css(styles.profileName)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label>Motto</label>
          <input type="text" className={css(styles.motto)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label>Description</label>
          <textarea className={css(styles.profileDes)}> </textarea>
        </div>
        <div className={css(styles.submitBtn)}>
          <StyledButtonSimpleFluid
            size={16}
            value={"Update Profile"}
            buttonOnClick={(e) => editProfile(dataJessica[0].id)}
          />
        </div>
      </div>
    </Container>

    
  );
}

export default UserChannelProfileEdit;