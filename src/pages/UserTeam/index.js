// @flow
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import { css } from "aphrodite";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { ROUTES } from "../../constants";
import styles from "./styles";
import { StyledCardPopular, StyledImageCircle, StyledButtonSimpleFluidLittle } from "components"

import img_cocacola from "../../assets/images/icons/cocacola.png";
import img_peugeot from "../../assets/images/icons/peugeot.png";
import img_lbc from "../../assets/images/icons/lbc.png";

import img_logo from "../../assets/images/teamImage5/teamImage5.png";
import img_add from "../../assets/images/icons/add.png";
import img_close from "assets/images/icons/close.png";
import img_search from "assets/images/icons/search.png";
import img_read from "assets/images/icons/read.png";

import img_smile from "assets/images/icons/smile.png";
import img_attach from "assets/images/icons/attach.png";
import img_msg_1 from "assets/images/icons/msg_1.png";
import img_send from "assets/images/icons/send.png";

import img_close_svg from "assets/images/icons/close.svg";
import img_clear_svg from "assets/images/icons/clear.svg";
import img_switch from "assets/images/icons/switch.png";
import img_op_0 from "assets/images/icons/op_0.png";
import img_op_1 from "assets/images/icons/op_1.png";

const UserTeam = (props) => {
  console.log("propssss 000", props);
  const location = useLocation();
  const params = queryString.parse(location.search);

  const closeIcon = (<span className={css(styles.closeBtn)}>
    <img
      src={img_close_svg}
      alt=""
      className={css(styles.img_24)}
    />
  </span>);
  const [open, setOpen] = useState(params.location == "addgroup" ? true : false);
  const onOpenModal = () => setOpen(open);
  const onCloseModal = () => {
    setOpen(false);
    setStep(1);
    props.history.push(ROUTES.USER_TEAM);
  };

  const [addOp, setAddOp] = useState(false)

  const handleOnClickForward = (selectedID) => {
    console.log("Forward");
    setOpen(true);
  };

  const handleSearch = (searchKey) => {
    // window.location.href = ROUTES.USER_HOME_DISCOVER_SEARCH;
    // history.push(ROUTES.USER_HOME_DISCOVER_SEARCH + "?key=" + searchKey);
  };
  const handleClear = (e) => {
    console.log("search clear");
  };
  const handleInputChange = (searchKey) => {
    // window.location.href = ROUTES.USER_HOME_DISCOVER_SEARCH;
    // history.push(ROUTES.USER_HOME_DISCOVER_SEARCH + "?key=" + searchKey);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      // showSearch(searchKey);
    }
  };
  const addMember = (e) => {
  };
  const setSetting = (e) => {
  };

  const [step, setStep] = useState(1);
  const enterName = (e) => {
    console.log(e.target.value);
  };
  const enterEmail = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      setStep(3);
    } else {
      setStep(2);
    }
  };

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.headerContainer)}>
        <div className={css(styles.logoList)}>
          <div className={css(styles.logoItem)}>
            <StyledImageCircle size="small" imgSrc={img_cocacola} />
          </div>
          <div className={css(styles.logoItem)}>
            <StyledImageCircle size="small" imgSrc={img_peugeot} />
          </div>
          <div className={css(styles.logoItem)}>
            <StyledImageCircle size="small" imgSrc={img_lbc} />
          </div>
          <div className={css(styles.logoItem)}>
            <img
              src={img_add}
              alt=""
              className={css(styles.img_add)}
            />
          </div>
        </div>
        <div className={css(styles.ctrlBtns)}>
          <div className={css(styles.searchBar)}>
            <div style={{ position: "relative" }} >
              <input
                type="text"
                className={css(styles.textInput)}
                placeholder={"Search Coca Cola"}
                name="search"
                onChange={(e) => handleInputChange(e)}
                onKeyDown={handleInputKeyDown}
              />

              <img
                src={img_close}
                alt="close"
                className={css([styles.imgClose])}
                onClick={e => handleClear(e)}
              />
              <img
                src={img_search}
                alt="search"
                className={css([styles.imgSearch])}
                onClick={e => handleSearch(e)}
              />
            </div>
          </div>
          <div className={css(styles.ctrlBtn)}>
            <StyledButtonSimpleFluidLittle
              size={18}
              value={"+ Add team members"}
              img_people={"none"}
              buttonOnClick={(e) => addMember()}
            />
          </div>
          <div className={css(styles.ctrlBtn)}>
            <StyledButtonSimpleFluidLittle
              size={18}
              value={"Settings"}
              img_people={"none"}
              buttonOnClick={(e) => setSetting()}
            />
          </div>
        </div>
      </div>

      <div className={css(styles.container)}>
        <div className={css(styles.containerLeft)}>
          <div className={css(styles.msgCard)}>
            <div className={css(styles.msgCardCol)}>
              <StyledCardPopular
                imgSrc={img_logo}
                txtTitle={"David Jacob"}
                txtContent={"12 Questions to ask yourself when raising more than one child"}
              />
            </div>
            <div className={css(styles.timeState)}>
              8:01 pm
              <img
                src={img_read}
                alt=""
                className={css(styles.img_read)}
              />
            </div>
          </div>
          <div className={css(styles.msgCard)}>
            <div className={css(styles.msgCardCol)}>
              <StyledCardPopular
                imgSrc={img_logo}
                txtTitle={"David Jacob"}
                txtContent={"12 Questions to ask yourself when raising more than one child"}
              />
            </div>
            <div className={css(styles.timeState)}>
              8:01 pm
              <img
                src={img_read}
                alt=""
                className={css(styles.img_read)}
              />
            </div>
          </div>
          <div className={css(styles.msgCard)}>
            <div className={css(styles.msgCardCol)}>
              <StyledCardPopular
                imgSrc={img_logo}
                txtTitle={"David Jacob"}
                txtContent={"12 Questions to ask yourself when raising more than one child"}
              />
            </div>
            <div className={css(styles.timeState)}>
              8:01 pm
              <img
                src={img_read}
                alt=""
                className={css(styles.img_read)}
              />
            </div>
          </div>
        </div>
        <div className={css(styles.containerRight)}>
          <div className={css(styles.msgCard)}>
            <div className={css(styles.msgCardCol)}>
              <StyledCardPopular
                imgSrc={img_logo}
                txtTitle={"David Jacob"}
                txtContent={"12 Questions to ask yourself when raising more than one child"}
              />
            </div>
            <div className={css(styles.timeState)}>
              8:01 pm
              <img
                src={img_read}
                alt=""
                className={css(styles.img_read)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={css(styles.footerContainer)}>
        <div className={css(styles.footerContainerWrapper)}>
          <div className={css(styles.msgBtn)}>
            <img
              src={img_smile}
              alt=""
              className={css(styles.img_20)}
            />
          </div>
          <div className={css(styles.msgBtn)}>
            <img
              src={img_attach}
              alt=""
              className={css(styles.img_20)}
            />
          </div>
          <div className={css(styles.msgBtn)}>
            <img
              src={img_msg_1}
              alt=""
              className={css(styles.img_20)}
            />
          </div>
          <div className={css(styles.msgContent)}>
            <input
              type="text"
              className={css(styles.msgContentInput)}
              placeholder={"Type your message here"}
              name="message"
              onChange={(e) => handleInputChange(e)}
              onKeyDown={handleInputKeyDown}
            />
          </div>
          <div className={css(styles.msgBtn)}>
            <img
              src={img_send}
              alt=""
              className={css(styles.img_20)}
            />
          </div>
        </div>
      </div>

      <Modal
        open={params.location == "addgroup" ? true : false}
        onClose={onCloseModal}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: 'reportModal',
        }}
      >
        <>
          <p className={css(styles.modalTitle)}>{step == 1 ? "Create a group" : "Add people"}</p>
          <div className={css(styles.modalContent)}>
            <div className={css(styles.seachBar)}>
              {step == 1 && <p>Groups are where your team communicates. They’re best when organized around a topic — #marketing, for example.</p>}
              {(step != 1 && !addOp) &&
                <>
                  <div className={css(styles.addOptions)}>
                    <div className={css(styles.addOption)} onClick={e => setAddOp(!addOp)}>
                      <img
                        src={img_op_0}
                        alt=""
                        className={css(styles.img_20)}
                      />
                      <p>Add all members of Coca Cola</p>
                    </div>
                    <div className={css(styles.addOption)}>
                      <img
                        src={img_op_1}
                        alt=""
                        className={css(styles.img_20)}
                      />
                      <p>Add specific people</p>
                    </div>
                  </div>
                </>
              }
              {(step != 1 && addOp) &&
                <>
                  <div className={css(styles.addOptions)}>
                    <div className={css(styles.addOption)}>
                      <img
                        src={img_op_1}
                        alt=""
                        className={css(styles.img_20)}
                      />
                      <p>Add all members of Coca Cola</p>
                    </div>
                    <div className={css(styles.addOption)} onClick={e => setAddOp(!addOp)}>
                      <img
                        src={img_op_0}
                        alt=""
                        className={css(styles.img_20)}
                      />
                      <p>Add specific people</p>
                    </div>
                  </div>
                </>
              }
              {step == 1 && <input type="text" placeholder="Group name" className={css(styles.groupName)} onChange={e => enterName(e)} />}
              {step == 2 && <input type="text" placeholder="Enter a name or email" className={css(styles.groupName)} onChange={e => enterEmail(e)} />}
              {step == 3 &&
                <div className={css(styles.groupName)}>
                  <div className={css(styles.addedPeopleList)}>
                    <div className={css(styles.addedPeople)}>
                      <img
                        src={img_logo}
                        alt=""
                        className={css(styles.img_20)}
                      />
                      <span>Adam Smith</span>
                      <img
                        src={img_clear_svg}
                        alt=""
                        className={css(styles.img_20_p_4_ml_4)}
                      />
                    </div>
                    <div className={css(styles.addedPeople)}>
                      <img
                        src={img_logo}
                        alt=""
                        className={css(styles.img_20)}
                      />
                      <span>Adam Smith</span>
                      <img
                        src={img_clear_svg}
                        alt=""
                        className={css(styles.img_20_p_4_ml_4)}
                      />
                    </div>
                  </div>
                </div>
              }
              {step == 1 && <p className={css(styles.privateOption)}>Make private</p>}
              {step == 1 && <div className={css(styles.privateContent)}>
                <p className={css(styles.privateText)}>When a group is set to private, it can only be viewed or joined by invitation.</p>
                <img
                  src={img_switch}
                  alt=""
                  className={css(styles.img_h_30)}
                />
              </div>}
            </div>
          </div>
          <hr />
          {step == 1 && <div className={css(styles.creatBtn)} onClick={e => setStep(2)}>Create</div>}
          {step == 2 && <div className={css(styles.creatBtn)} onClick={e => setStep(3)}>Skip for now</div>}
          {step == 3 && <div className={css(styles.creatBtn)} onClick={e => onCloseModal()}>Done</div>}
        </>
      </Modal>

    </div>
  );
}

export default UserTeam;