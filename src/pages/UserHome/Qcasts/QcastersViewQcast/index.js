import React, { useEffect, useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import queryString from "query-string";
import { ROUTES } from "../../../../constants";
import ItemsCarousel from 'react-items-carousel';
import 'react-responsive-modal/styles.css';
import './styles.css';
import { Modal } from 'react-responsive-modal';

import img_msg from "assets/images/icons/message.png";
import img_eye_open from "assets/images/icons/eye_open.png";
import img_view from "assets/images/icons/viewed.png";
import img_camera from "assets/images/icons/camera.png";

import { StyledButtonSimpleFluid, StyledImageCircle } from "components"

import { dataQcastersQcast, dataQcastersProfileSecond } from "fakeapi";

const UserHomeQcastersViewQcast = (props) => {
  const params = queryString.parse(props.location.search);
  const isSearchCast = dataQcastersQcast[0].content === undefined;
  
  const [isAddActive, setisAddActive] = useState(false);
  const [isReportActive, setisReportActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    console.log("params.key: ", params.key);
  }, [params.key])

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setisReportActive(false);
  };
  const closeIcon = (<svg viewBox="0 0 0 0" width={0} height={0}></svg>);

  const handleOnClickViewQcastReport = (selectedID) => {
    setisReportActive(true);
    setOpen(true);
  };
  const handleOnClickReportSubmit = (selectedID) => {
    setisSubmit(true);
  };
  const handleOnClickReportSubmitModalClose = (selectedID) => {
    setOpen(false);
    setisReportActive(false);
    setisSubmit(false);
  };
  const handleOnClickViewQcastAdd = (selectedID) => {
    setisAddActive(!isAddActive);
    console.log("AddButton Clicked", selectedID);
  };
  const handleOnClickQcastReview = (selectedID) => {
    props.history.push(ROUTES.USER_HOME_QCASTS_QCAST_REVIEW + "?id=" + selectedID);
  };
  return (

    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerQcaster)}>
        <div className={css(styles.containerQcast)}>
          <div className={css(styles.imgQcast)}>
            <StyledImageCircle size="large" imgSrc={dataQcastersQcast[0].imgsrc} />
            <div className={css(styles.containerQcasterButtonMore)}>
              <StyledButtonSimpleFluid
                size={16}
                value={":"}
                isActive={isReportActive}
                buttonOnClick={(e) => handleOnClickViewQcastReport(dataQcastersQcast[0].id)}
              />
            </div>
          </div>
          <div className={css(styles.qcastSub)}>
            <p className={css(styles.txtQcastContentFirst)}>{dataQcastersQcast[0].content}</p>
            <p className={css(styles.txtQcastTitleFirst)}>{dataQcastersQcast[0].title}</p>
          </div>
          <div className={css(styles.qcastImg)}>
            <div className={css(styles.qcastImgOne)}>
              <img
                src={img_msg}
                alt=""
                className={css(styles.img_30)}
              />
              <p className={css(styles.txtQcastContentIcon)}>{dataQcastersQcast[0].viewCount.message}</p>
            </div>
            <div className={css(styles.qcastImgOne)}>
              <img
                src={img_eye_open}
                alt=""
                className={css(styles.img_35)}
              />
              <p className={css(styles.txtQcastContentIcon)}>{dataQcastersQcast[0].viewCount.view}</p>
            </div>
            <div className={css(styles.qcastImgOne)}>
              <img
                src={img_view}
                alt=""
                className={css(styles.img_30)}
              />
              <p className={css(styles.txtQcastContentIcon)}>{dataQcastersQcast[0].viewCount.answer}</p>
            </div>
          </div>
          {!isSearchCast ?
            <>
              <div className={css(styles.qcastQue)}>
                <p className={css(styles.txtQcastTitleSecond)}>{dataQcastersQcast[0].subtitle}</p>
                <img
                  src={img_camera}
                  alt=""
                  className={css(styles.img_camera)}
                />
                <p className={css(styles.txtQcastContentSecond)}>{dataQcastersQcast[0].subcontent}</p>
              </div>
            </>
            :
            <></>
          }
          <p className={css(styles.txtQcastContentSecond)}>{dataQcastersQcast[0].profile.content}</p>
          <div className={css(styles.qcastBtn)}>
            <StyledButtonSimpleFluid
              size={16}
              value={"+ Add"}
              isActive={isAddActive}
              buttonOnClick={(e) => handleOnClickViewQcastAdd(dataQcastersQcast[0].id)}
            />
          </div>
        </div>
      </div>
      <Modal 
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: 'reportModal',
        }}
        >
          {!isSubmit && 
          <>
            <p className={css(styles.modalTitle)}>Please provide reason for report</p>
            <textarea className={css(styles.reportContent)} placeholder={"Write reason"}></textarea>
            <hr className={css(styles.seperateLine)} />
            <div className={css(styles.submitButtonDiv)}>
              <input
                size="sm"
                type="button"
                value={"Submit"}
                className={css(styles.submitButton)}
                onClick={(e) => handleOnClickReportSubmit(dataQcastersQcast[0].id)}
              />
            </div>
          </>
          }
          {isSubmit && 
          <>
            <p className={css(styles.modalTitle)}>Please provide reason for report</p>
            <div className={css(styles.submitSuccess)}>{<svg width="79" height="58" viewBox="0 0 79 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.404 11.9718L33.1217 55.2529C31.8232 56.5514 30.1186 57.205 28.4141 57.205C26.7096 57.205 25.0051 56.5514 23.7066 55.2529L2.06604 33.6124C-0.538289 31.0093 -0.538289 26.8004 2.06604 24.1973C4.66915 21.593 8.87679 21.593 11.4811 24.1973L28.4141 41.1303L66.9889 2.55676C69.592 -0.0475662 73.7997 -0.0475662 76.404 2.55676C79.0071 5.15987 79.0071 9.36752 76.404 11.9718Z" fill="white"/></svg>}</div>
            <p className={css(styles.modalMessage)}>Report submitted</p>
            <hr className={css(styles.seperateLine)} />
            <div className={css(styles.submitButtonDiv)}>
            <input
              size="sm"
              type="button"
              value={"Close"}
              className={css(styles.submitButton)}
              onClick={(e) => handleOnClickReportSubmitModalClose(dataQcastersQcast[0].id)}
            />
            </div>
          </>
          }
      </Modal>

      <div className={css(styles.containerSlide)}>
        <p className={css(styles.sliederTitle)}>Qcast review</p>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={7}
            gutter={20}
            leftChevron={<button className={css(styles.sliderBtnfLeft)}>{'🡨'}</button>}
            rightChevron={<button className={css(styles.sliderBtnRight)}>{'🡪'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {dataQcastersProfileSecond.map((item, key) =>
              key == (activeItemIndex + 3) ?
              <div className={css(styles.sliderActiveItemWrapper)}>
                <div className={css(styles.sliderActiveItem)}>
                    <StyledImageCircle size="large" playButton={"large"} text={activeItemIndex + 3 + " of " + dataQcastersProfileSecond.length} imgSrc={item.imgsrc} buttonEffect={(e) => handleOnClickQcastReview(item.id)} />
                </div>
              </div>
              :
              (
                (key == (activeItemIndex + 2) || key == (activeItemIndex + 4)) ?
                <div className={css(styles.sliderActiveItemWrapper)}>
                  <div className={css(styles.sliderItemFirst)}>
                      <StyledImageCircle size="large" playButton={"small"} imgSrc={item.imgsrc} buttonEffect={(e) => handleOnClickQcastReview(item.id)} />
                  </div>
                </div>
                :
                (
                  (key == (activeItemIndex + 1) || key == (activeItemIndex + 5)) ?
                  <div className={css(styles.sliderActiveItemWrapper)}>
                    <div className={css(styles.sliderItemSecond)}>
                        <StyledImageCircle size="large" playButton={"small"} imgSrc={item.imgsrc} buttonEffect={(e) => handleOnClickQcastReview(item.id)} />
                    </div>
                  </div>
                  :
                  <div className={css(styles.sliderActiveItemWrapper)}>
                    <div className={css(styles.sliderItemThird)}>
                        <StyledImageCircle size="large" playButton={"small"} imgSrc={item.imgsrc} buttonEffect={(e) => handleOnClickQcastReview(item.id)} />
                    </div>
                  </div>
                )
              )
            )}
          </ItemsCarousel>
        </div>
      </div>
    </Container>
  );
}

export default UserHomeQcastersViewQcast;