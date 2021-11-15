import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col, Dropdown, } from "react-bootstrap";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

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
import { Tabs } from './Tabs'

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ROUTES } from "../../../constants";

const UserChannelProfile = (props) => {
  console.log("props", props);

  const [search, setSearch] = React.useState(' ');

//   const closeIcon = (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M4.73302 4.00006L7.84812 0.884861C8.05085 0.68223 8.05085 0.354604 7.84812 0.151973C7.64549 -0.0506577 7.31786 -0.0506577 7.11523 0.151973L4.00004 3.26717L0.884932 0.151973C0.682206 -0.0506577 0.354675 -0.0506577 0.152044 0.151973C-0.0506814 0.354604 -0.0506814 0.68223 0.152044 0.884861L3.26715 4.00006L0.152044 7.11526C-0.0506814 7.31789 -0.0506814 7.64551 0.152044 7.84815C0.253027 7.94922 0.385805 8 0.518488 8C0.651171 8 0.783854 7.94922 0.884932 7.84815L4.00004 4.73295L7.11523 7.84815C7.21631 7.94922 7.349 8 7.48168 8C7.61436 8 7.74704 7.94922 7.84812 7.84815C8.05085 7.64551 8.05085 7.31789 7.84812 7.11526L4.73302 4.00006Z" fill="#2C3037"/>
// </svg>);
  const [open, setOpen] = useState(false);
  const handleOnClickForward = (selectedID) => {
    console.log("Forward");
    setOpen(true);
  };
  const editProfile = (selectedID) => {
    console.log(props);
    props.history.push(ROUTES.USER_CHANNEL_PROFILE + "?id=" + selectedID);
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
                      to={ROUTES.USER_CHANNEL}
                      index={1}
                      isActive={true}
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
                      to={ROUTES.USER_CHANNEL}
                      index={2}
                      isActive={false}
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
                      to={ROUTES.USER_CHANNEL}
                      index={2}
                      isActive={false}
                      onClick={() => {
                        setSearch(2)
                      }}
                      search={search}
                    >
                      Private
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    <Tabs
                      to={ROUTES.USER_CHANNEL}
                      index={2}
                      isActive={false}

                      onClick={() => {
                        setSearch(2)
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
        // closeIcon={closeIcon}
        classNames={{
          modal: 'reportModal',
        }}
        >
          <>
            <p className={css(styles.modalTitle)}>Forward Qcast to</p>
            <div className={css(styles.seachBar)}>
              <input type="search" placeholder={"Search user"} className={css(styles.seachBox)} />
              <span className={css(styles.clearBtn)}>X</span>
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
          </>
      </Modal>
    </Container>

    
  );
}

export default UserChannelProfile;