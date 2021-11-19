// @flow
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import { css } from "aphrodite";

import styles from "./styles";
import { StyledCardPopular, StyledImageCircle, StyledButtonSimpleFluid } from "components"
import { dataDavidQ } from "fakeapi";

import imgMessageLisa from "assets/images/avatar/lisa.png";

import img_logo from "assets/images/chanel/Jacub.png";
import img_read from "assets/images/icons/read.png";

import img_smile from "assets/images/icons/smile.png";
import img_attach from "assets/images/icons/attach.png";
import img_msg_1 from "assets/images/icons/msg_1.png";
import img_send from "assets/images/icons/send.png";

const UserMessenger = (props) => {
  // console.log("propssss 000", props);

  const [open, setOpen] = useState(false);
  const openSendQcastBox = () => {
    setOpen(!open)
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

  const [isSelect, setIsSelect] = useState(0);
  const userSelected = (key) => {
    setIsSelect(key)
  };

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.headerContainer)}>
        <div className={css(styles.logoList)}>
          <div className={css(styles.logoItem)}>
            <StyledImageCircle size="small" imgSrc={imgMessageLisa} />
            &nbsp;&nbsp;&nbsp;Lisa Stuart
          </div>
          <div className={css(styles.logoItem)}>
          </div>
        </div>
        <div className={css(styles.ctrlBtn)}>
          <StyledButtonSimpleFluid size={16} value={":"} />
        </div>
      </div>

      <div className={css(styles.container)}>
        <div className={css(styles.containerLeft)}>
          <div className={css(styles.msgCard)}>
            <div className={css(styles.msgCardCol)}>
              Hi Mansoor, how are you?
            </div>
            <div className={css(styles.timeState)}>
              8:01 pm
            </div>
          </div>
        </div>
        <div className={css(styles.containerRight)}>
          <div className={css(styles.msgCard)}>
            <div className={css(styles.msgCardCol)}>
              Hi Mansoor, how are you?
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
              So, how is everything ??
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
        {open && <div className={css(styles.sendQcastBox)}>
          <div className={css(styles.sendQcastBoxContent)}>
            <ul className={css(styles.menuMiddleContent)}>
              <li className={ isSelect == 0 ? css(styles.tabActive) : css(styles.tab)} onClick={e => userSelected(0)}>
                All
              </li>
              <li className={isSelect == 1 ? css(styles.tabActive) : css(styles.tab)} onClick={e => userSelected(1)}>
                Draft
              </li>
              <li className={isSelect == 2 ? css(styles.tabActive) : css(styles.tab)} onClick={e => userSelected(2)}>
                Private
              </li>
              <li className={isSelect == 3 ? css(styles.tabActive) : css(styles.tab)} onClick={e => userSelected(3)}>
                Published
              </li>
            </ul>
            <div className={css(styles.cardGrid)}>
              <div className={css(styles.cardGrid5)}>
                {dataDavidQ.map((item, key) =>
                  <div key={key} className={css(styles.cardSecondSubCol)}>
                    <StyledImageCircle size="small" imgSrc={item.imgsrc} />
                    <p className={css(styles.qcasttitle)}>{item.title}</p>
                    <div className={css(styles.sendBtn)}>Send</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>}
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
          <div className={css(styles.msgBtn)} onClick={(e) => openSendQcastBox(e)}>
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
    </div>
  );
}

export default UserMessenger;