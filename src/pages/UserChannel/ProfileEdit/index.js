import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import queryString from "query-string";
import { StyledButtonSimpleFluid } from "components"

import './styles.css';
import ImageUploader from "react-images-upload";

import img_edit from "assets/images/icons/edit.png";
import { dataJessica, dataDavidJacob } from "fakeapi";

const UserChannelProfileEdit = (props) => {
  const params = queryString.parse(props.location.search);

  const [file0, setFile0] = useState(params.id ? dataJessica[0].backGround : null);
  const [file1, setFile1] = useState(params.id ? dataJessica[0].imgsrc : dataDavidJacob[0].ChanelLogoW);
  const [profileData, setProfileData] = useState(params.id ? dataJessica : [
    {
      id: 0,
      imgsrc: null,
      backGround: null,
      title: "",
      motto: "",
      description: "",
    }
  ])

  const [desc, setDesc] = useState(profileData[0].description);

  const editBanner = (e) => {
    setFile0(URL.createObjectURL(e[e.length - 1]));
    profileData[0].backGround = file0;
  };
  const editPhoto = (e) => {
    setFile1(URL.createObjectURL(e[e.length - 1]));
    profileData[0].imgsrc = file1;
  };
  const editProfile = (selectedID) => {
    console.log("ddddddddddd");
  };

  return (
    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerBackground)}>
        <img className={css(styles.imgProfileBackground)} src={file0} alt="" />
        <div className={css(styles.bannerChangeBtn)}>
          <ImageUploader
            withIcon={false}
            withPreview={true}
            label=""
            // buttonText="buttonText"
            buttonText={
              <div className={css(styles.imguploadbtn)}>
                <button className={css(styles.simpleButtonFluid)} >{file0 ? "Change Banner" : "Add Banner"}</button>
              </div>
            }
            onChange={(e) => editBanner(e)}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
            maxFileSize={1048576}
            fileSizeError=" file size is too big"
          />
        </div>
      </div>

      <div className={css(styles.containerProfiledata)}>
        <ImageUploader
          withIcon={false}
          withPreview={true}
          label=""
          // buttonText="buttonText"
          buttonText={
            <div className={css(styles.coverImg)}>
              <img
                src={file1}
                alt={""}
                className={css(styles.imgPopularLarge)}
              />
              {profileData[0].imgsrc && <div className={css(styles.cover)} ></div>}
              {profileData[0].imgsrc && <div className={css(styles.editPhone)} >
                <img
                  src={img_edit}
                  alt=""
                  className={css(styles.img_24)}
                />
                <span className={css(styles.chPhotoTxt)}>Change Photo</span>
              </div>}
            </div>
          }
          onChange={(e) => editPhoto(e)}
          imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
          maxFileSize={1048576}
          fileSizeError=" file size is too big"
        />
        <div className={css(styles.formGroup)}>
          <label>Profile Name</label>
          <input type="text" defaultValue={profileData[0].title ? profileData[0].title : ""} className={css(styles.profileName)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label>Motto</label>
          <input type="text" defaultValue={profileData[0].motto ? profileData[0].motto : ""} className={css(styles.motto)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label>Description</label>
          <textarea value={desc} className={css(styles.profileDes)} onChange={(e) => setDesc(e.target.value)}/>
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