import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col, Dropdown, } from "react-bootstrap";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import img_close from "assets/images/icons/close.svg";
import img_clear from "assets/images/icons/clear.svg";
import img_people from "assets/images/icons/people.png";
import forte from 'assets/images/chanel/4.png'
import img_find from "assets/images/icons/find.png";
import img_question from "assets/images/icons/question.png";
import share from 'assets/images/chanel/share.png'
import arrow from 'assets/images/chanel/arrow.png'
import send from 'assets/images/chanel/send.png'
import Vector from 'assets/images/chanel/Vector.png'

import { StyledImageCircle, StyledButtonSimpleFluidLittle, StyledCardChanel } from "components"
import { dataQcastersProfile, dataJessica, dataDavidQ, dataDavidJacob } from "fakeapi";
import { Tabs } from '../Page/Tabs'

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ROUTES } from "../../../constants";

const UserChannelProfile = (props) => {
  console.log("props", props);

  const closeIcon = (<span className={css(styles.closeBtn)}>
                      <img
                        src={img_close}
                        alt=""
                        className={css(styles.img_24)}
                      />
                    </span>);
  const [search, setSearch] = React.useState(1);

  const [open, setOpen] = useState(false);
  const handleOnClickForward = (selectedID) => {
    console.log("Forward");
    setOpen(true);
  };
  const editProfile = (selectedID) => {
    props.history.push(ROUTES.USER_CHANNEL_PROFILE_EDIT + "?id=" + selectedID);
  };
  const addProfile = () => {
    props.history.push(ROUTES.USER_CHANNEL_PROFILE_EDIT);
  };
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerBackground)}>
        <img className={css(styles.imgProfileBackground)} src={dataQcastersProfile[0].imgback} alt="" />
      </div>
      <Row>
        <Col xl={10} md={10} sm={2}>
          <div className={css(styles.containerProfile)}>
            <div className={css(styles.containerProfileSub)}>
              <div className={css(styles.containerProfileImg)}>
                <StyledImageCircle size="large" imgSrc={dataDavidJacob[0].logo} />
              </div>
              <div className={css(styles.containerProfileContent)}>
                <p className={css(styles.txtTitle)}>{dataDavidJacob[0].name}</p>
                <p className={css(styles.txtProfileTitle)}>{dataDavidJacob[0].about}</p>
                <p className={css(styles.txtProfileContent)}>{dataDavidJacob[0].info}</p>

                <div className={css(styles.subscriptionImg)}>
                  <div className={css(styles.subscriptionImgTwo)}>
                    <img
                      src={img_people}
                      alt=""
                      className={css(styles.img_60)}
                    />
                    <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.people}</p>
                    <p className={css(styles.txtProfileContent)}  >{dataDavidJacob[0].Subscribers}</p>
                  </div>
                  <div className={css(styles.subscriptionImgTwo)}>
                    <img
                      src={img_find}
                      alt=""
                      className={css(styles.img_60)}
                    />
                    <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.find}</p>
                    <p className={css(styles.txtProfileContent)} >{dataDavidJacob[0].Qcast}</p>
                  </div>
                  <div className={css(styles.subscriptionImgTwo)}>
                    <img
                      src={img_question}
                      alt=""
                      className={css(styles.img_60)}
                    />
                    <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.question}</p>
                    <p className={css(styles.txtProfileContent)} >{dataDavidJacob[0].Questions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={2} md={2} sm={2}
          style={{ marginRight: '20', marginTop: '20px' }}>
          <StyledButtonSimpleFluidLittle
            size={16}
            value={"Edit Profile"}
            img_people={"none"}
            buttonOnClick={(e) => editProfile(dataDavidJacob[0].id)}
          />
        </Col>
      </Row>

      <Row >
        <Col xl={10} md={10} sm={10}>
          <Navbar id="basic-navbar-nav" className={css(styles.menuMain)}>
            <div className={css(styles.menuMiddle)}>
              <Nav>
                <ul className={css(styles.menuMiddleContent)}>
                  <li className={css(styles.navigationButton)}>
                    <Tabs
                      to={ROUTES.USER_CHANNEL_PROFILE}
                      index={1}
                      isActive={search == 1 ? true : false}
                      onClick={() => {
                        setSearch(1)
                      }}
                      search={search}
                    >
                      All
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    <Tabs
                      to={ROUTES.USER_CHANNEL_PROFILE}
                      index={2}
                      isActive={search == 2 ? true : false}
                      onClick={() => {
                        setSearch(2)
                      }}
                      search={search}
                    >
                      Draft
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    <Tabs
                      to={ROUTES.USER_CHANNEL_PROFILE}
                      index={2}
                      isActive={search == 3 ? true : false}
                      onClick={() => {
                        setSearch(3)
                      }}
                      search={search}
                    >
                      Private
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    <Tabs
                      to={ROUTES.USER_CHANNEL_PROFILE}
                      index={2}
                      isActive={search == 4 ? true : false}

                      onClick={() => {
                        setSearch(4)
                      }}
                      search={search}
                    >
                      Published
                    </Tabs>
                  </li>
                </ul>
              </Nav>
            </div>
          </Navbar>
        </Col>
        <Col xl={2} md={2} sm={2}
          style={{ marginRight: '20' }}>
          <StyledButtonSimpleFluidLittle
            size={16}
            value={"Create Qcast"}
            img_people={forte}
            buttonOnClick={(e) => addProfile()}
          />
        </Col>
      </Row>

      <Row >
        {dataDavidQ.map((item, key) =>
          <Col xl={3} md={3}>
            <StyledCardChanel
              imgsrc={item.imgsrc}
              txtTitle={item.title}
            />
            <Dropdown>
              <Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{ background: '#ECF4FC', color: "#6497C7", border: 'none', marginLeft: '139px', fontSize: '16px' }}
              >
                More
              </Dropdown.Toggle>
              <Dropdown.Menu className={css(styles.naviMore)} >
                <Dropdown.Item onClick={(e) => handleOnClickForward(item.id)} style={{ color: '#7B94B5', size: "14px" }}>  <img
                  src={share}
                  alt=""
                  style={{ height: '16px', width: "16px", marginRight: '10px' }}
                />Forward</Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: '#7B94B5', size: "14px" }}> <img
                  src={arrow}
                  alt=""
                  style={{ height: '16px', width: "16px", marginRight: '10px' }}
                />Share</Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: '#7B94B5', size: "14px" }}> <img
                  src={send}
                  alt=""
                  style={{ height: '16px', width: "16px", marginRight: '10px' }}
                />Publish</Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: '#7B94B5', size: "14px" }}> <img
                  src={Vector}
                  alt=""
                  style={{ height: '16px', width: "16px", marginRight: '10px' }}
                />Download</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          )}
      </Row>

      <Modal 
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: 'reportModal',
        }}
        >
          <>
            <p className={css(styles.modalTitle)}>Forward Qcast to</p>
            <div className={css(styles.searchList)}>
              <div className={css(styles.seachBar)}>
                <input type="search" placeholder={"Search user"} className={css(styles.seachBox)} />
                <span className={css(styles.clearBtn)}>
                  <img
                    src={img_clear}
                    alt=""
                    className={css(styles.img_24)}
                  />
                </span>
              </div>
              <div className={css(styles.qcastList)}>
                {dataJessica.map((item, key) =>
                <>
                  {key != 0 && <hr/>}
                  <div className={css(styles.qcastItem)}>
                    <img
                      src={item.imgsrc}
                      alt={""}
                      className={css(styles.imgPopularSmall)}
                    />
                    <p className={css(styles.qcastTitle)}>{item.title}</p>
                    <input
                      size="sm"
                      type="button"
                      value={"Forward"}
                      className={css(styles.forwardBtn)}
                      onClick={(e) => handleOnClickForward(item.id)}
                    />
                  </div>
                </>
                )}
              </div>
            </div>
          </>
      </Modal>
    </Container>

    
  );
}

export default UserChannelProfile;