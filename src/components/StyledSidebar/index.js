// @flow
import React, { useEffect, useState } from "react";
import { css } from "aphrodite";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import { Scrollbars } from 'react-custom-scrollbars';
import { ROUTES } from "../../constants";
import styles from "./styles";

import { StyledButtonNavLink } from "../../components";
import includes from "validator/es/lib/util/includes";
import {
  StyledButtonNavLinkSwitch,
  StyledButtonNavLinkSwitchPlaylists,
  StyledButtonNavLinkSwitchRespons
} from "../BasicComponents/StyledButtons";
import { dataTeamMembers, dataJessica5, dataMessages } from "../../fakeapi";

import img_dashboard from "../../assets/images/icons/dashboard.png";
import img_group from "../../assets/images/icons/group.png";
import img_people_one from "../../assets/images/icons/people_one.png";
import img_arrow_down from "../../assets/images/icons/arrow_down.png";
import img_sec_unlock from "../../assets/images/icons/sec_unlock.png";
import img_sec_locked from "../../assets/images/icons/sec_locked.png";
import img_clear from "../../assets/images/icons/clear.svg";

import img_message1 from "../../assets/images/icons/message1.png";
import img_arrow_left from "../../assets/images/icons/arrow_left.png";

import img_noResult from "assets/images/icons/noResult.png";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: '#BBCFEA'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

export default function StyledSidebar(props) {
  const location = useLocation();
  const loc = location.pathname;
  const params = queryString.parse(location.search);
  const btnStyle = css(styles.linkButton);
	const searchRespond = "/user/respond";
  const btnStyleActive = css(styles.linkButtonActive);

  const [openDashboard, setOpenDashboard] = useState(true);
  const [openGroup, setOpenGroup] = useState(true);
  const [openPeople, setOpenPeople] = useState(true);

  const [isSeach, setIsSeach] = useState(false);
  const [isSelect, setIsSelect] = useState(0);

  const sendMessage = (selectedID) => {
    console.log("sendMessage");
  };
  const newMsgBtnClick = (e) => {
    setIsSeach(true);
    setIsSelect(0);
  };
  const backBtnClick = (e) => {
    setIsSeach(false);
    setIsSelect(0);
  };
  const userSelected = (key) => {
    setIsSelect(key)
  };

  const [dataJessicaFiltered, setDataJessicaFiltered] = useState(dataJessica5);

  const handleInputChange = (e) => {
    if (!isSeach) { newMsgBtnClick() }
    var filteredData = dataJessica5.filter((data) => {
      return (data.title.toLowerCase()).indexOf(e.target.value.toLowerCase()) >= 0;
    });
    setDataJessicaFiltered(filteredData);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      console.log("sendMessage", e.target.value);
      // showSearch(searchKey);
    }
  };
  const searchClearBtnClick = (e) => {
    document.getElementById("search_people").value = "";
    setIsSeach(false);
  };

  return (
    (() => {
      switch (loc) {
        case "/user/channel/profile":
          return (
            <div className={css(styles.container)} style={{ width: "285px" }}>
              <div style={{ position: "fixed" }}>
                <ul className={css(styles.menuContent)}>
                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE}
                        className={!params.tab ? btnStyleActive : btnStyle}
                      >
                        Profile
                      </NavLink>
                    </>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE + "?tab=1"}
                        className={(params.tab && params.tab == 1) ? btnStyleActive : btnStyle}
                      >
                        Drafts
                      </NavLink>
                    </>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE + "?tab=2"}
                        className={(params.tab && params.tab == 2) ? btnStyleActive : btnStyle}
                      >
                        Private
                      </NavLink>
                    </>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE + "?tab=3"}
                        className={(params.tab && params.tab == 3) ? btnStyleActive : btnStyle}
                      >
                        Published
                      </NavLink>
                    </>
                  </li>

                </ul>
              </div>
            </div>
          );
        case "/user/channel/profileEdit":
          return (
            <div className={css(styles.container)} style={{ width: "285px" }}>
              <div style={{ position: "fixed" }}>
                <ul className={css(styles.menuContent)}>
                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE}
                        className={!params.tab ? btnStyleActive : btnStyle}
                      >
                        Profile
                      </NavLink>
                    </>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE + "?tab=1"}
                        className={(params.tab && params.tab == 1) ? btnStyleActive : btnStyle}
                      >
                        Drafts
                      </NavLink>
                    </>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE + "?tab=2"}
                        className={(params.tab && params.tab == 2) ? btnStyleActive : btnStyle}
                      >
                        Private
                      </NavLink>
                    </>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    < >
                      <NavLink
                        to={ROUTES.USER_CHANNEL_PROFILE + "?tab=3"}
                        className={(params.tab && params.tab == 3) ? btnStyleActive : btnStyle}
                      >
                        Published
                      </NavLink>
                    </>
                  </li>

                </ul>
              </div>
            </div>
          );
        case "/user/team":
          return (
            <div className={css(styles.container)} style={{ width: "285px" }}>
              <div style={{ position: "fixed" }}>
                <ul className={css(styles.menuContent)}>
                  <li className={css(styles.navButtonParent)}>
                    <div className={css(styles.navButtonParent1)} onClick={e => setOpenDashboard(!openDashboard)}>
                      <div className={css(styles.navButtonParent2)}>
                        <img
                          src={img_dashboard}
                          alt=""
                          className={css(styles.img_35)}
                        />
                        Dashboard
                      </div>
                      <img
                        src={img_arrow_down}
                        alt=""
                        className={css(styles.arrow_down)}
                      />
                    </div>
                    {openDashboard &&
                      <ul className={css(styles.acordMenuContent)}>
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM + "?location=analytics"}
                            className={(params.location && params.location == "analytics") ? btnStyleActive : btnStyle}
                          >
                            Analytics
                          </NavLink>
                        </li>
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM + "?location=sentanalytics"}
                            className={(params.location && params.location == "sentanalytics") ? btnStyleActive : btnStyle}
                          >
                            Sentiment Analysis
                          </NavLink>
                        </li>
                      </ul>
                    }
                  </li>
                  <li className={css(styles.navButtonParent)}>
                    <div className={css(styles.navButtonParent1)} onClick={e => setOpenGroup(!openGroup)}>
                      <div className={css(styles.navButtonParent2)}>
                        <img
                          src={img_group}
                          alt=""
                          className={css(styles.img_35)}
                        />
                        Groups
                      </div>
                      <img
                        src={img_arrow_down}
                        alt=""
                        className={css(styles.arrow_down)}
                      />
                    </div>
                    {openGroup &&
                      <ul className={css(styles.acordMenuContent)}>
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM}
                            className={!params.location ? btnStyleActive : btnStyle}
                          >
                            <img
                              src={img_sec_unlock}
                              alt=""
                              className={css(styles.img_20_p_4)}
                            />
                            General
                          </NavLink>
                        </li>
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM + "?location=annoucement"}
                            className={(params.location && params.location == "annoucement") ? btnStyleActive : btnStyle}
                          >
                            <img
                              src={img_sec_unlock}
                              alt=""
                              className={css(styles.img_20_p_4)}
                            />
                            Annoucement
                          </NavLink>
                        </li>
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM + "?location=secret"}
                            className={(params.location && params.location == "secret") ? btnStyleActive : btnStyle}
                          >
                            <img
                              src={img_sec_locked}
                              alt=""
                              className={css(styles.img_20_p_4)}
                            />
                            Top-secret
                          </NavLink>
                        </li>
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM + "?location=addgroup"}
                            className={(params.location && params.location == "addgroup") ? btnStyleActive : btnStyle}
                          >
                            <img
                              src={img_clear}
                              alt=""
                              className={css(styles.img_clear)}
                            />
                            &nbsp;Create group
                          </NavLink>
                        </li>
                      </ul>}
                  </li>
                  <li className={css(styles.navButtonParent)}>
                    <div className={css(styles.navButtonParent1)} onClick={e => setOpenPeople(!openPeople)}>
                      <div className={css(styles.navButtonParent2)}>
                        <img
                          src={img_people_one}
                          alt=""
                          className={css(styles.img_35_p_7)}
                        />
                        People
                      </div>
                      <img
                        src={img_arrow_down}
                        alt=""
                        className={css(styles.arrow_down)}
                      />
                    </div>
                    {openPeople &&
                      <ul className={css(styles.acordMenuContent)}>
                        {dataTeamMembers.map((item, key) =>
                          <li className={css(styles.navigationButton)}>
                            <NavLink
                              size="small"
                              to={ROUTES.USER_TEAM}
                              className={(params.location && params.location == "people") ? btnStyleActive : btnStyle}
                            >
                              <img
                                src={item.imgsrc}
                                alt=""
                                className={css(styles.img_20_p_4)}
                              />
                              {item.title}
                            </NavLink>
                          </li>
                        )}
                        <li className={css(styles.navigationButton)}>
                          <NavLink
                            size="small"
                            to={ROUTES.USER_TEAM}
                            className={(params.location && params.location == "addgroup") ? btnStyleActive : btnStyle}
                          >
                            <img
                              src={img_clear}
                              alt=""
                              className={css(styles.img_clear)}
                            />
                            &nbsp;Invite member
                          </NavLink>
                        </li>
                      </ul>}
                  </li>
                </ul>
              </div>
            </div>
          );
        case "/user/messenger":
          return (
            <div className={css(styles.container)} style={{ width: "400px" }}>
              <div style={{ position: "fixed" }}>
              <CustomScrollbars style={{ width: "400px", height: 750 }}>
                <div className={css(styles.siderContainer)}>
                  <div className={css(styles.searchContainer)}>
                    {!isSeach &&
                      <div className={css(styles.newMessage)} onClick={e => newMsgBtnClick(e)}>
                        <img
                          src={img_message1}
                          alt=""
                          className={css(styles.img_24)}
                        />
                        <span style={{ display: "inline-block", marginLeft: "10px" }}>New Message</span>
                      </div>
                    }
                    {isSeach &&
                      <p className={css(styles.searchLabel)}>Search user</p>
                    }
                    <div className={isSeach ? css(styles.searchBar1) : ""}>
                      {isSeach &&
                        <div className={css(styles.backBtn)} onClick={(e) => backBtnClick(e)}>
                          <img
                            src={img_arrow_left}
                            alt=""
                            className={css(styles.img_24)}
                          />
                        </div>}
                      <div className={css(styles.seachBar)}>
                        <input
                          type="search"
                          placeholder={"Search user"}
                          id={"search_people"}
                          className={isSeach ? css(styles.seachBox1) : css(styles.seachBox)}
                          onChange={(e) => handleInputChange(e)}
                          onKeyDown={handleInputKeyDown}
                        />
                        <span className={css(styles.clearBtn)} onClick={(e) => searchClearBtnClick(e)}>
                          <img
                            src={img_clear}
                            alt=""
                            className={css(styles.img_24)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  {!isSeach &&
                    <div className={css(styles.qcastList)}>
                      {dataMessages.map((item, key) =>
                        <>
                          {key != 0 && <hr className={css(styles.hr)} />}
                          <div className={key == isSelect ? css(styles.qcastItemActive) : css(styles.qcastItem)} onClick={e => userSelected(key)}>
                            <img
                              src={item.imgsrc}
                              alt={""}
                              className={css(styles.imgPopularSmall)}
                            />
                            <div className={css(styles.userMsgInfo)}>
                              <div className={css(styles.userMsgInfo1)}>
                                <p className={css(styles.qcastTitle)}>{item.title}</p>
                                <p className={css(styles.msgTime)}>{item.timestamp}</p>
                              </div>
                              <div className={css(styles.userMsgInfo1)}>
                                <p className={css(styles.msgContent)}>{item.message}</p>
                                <p className={css(styles.msgNum)}>{item.number}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  }
                  {(isSeach && dataJessicaFiltered.length > 0) &&
                    <div className={css(styles.qcastList)}>
                      {dataJessicaFiltered.map((item, key) =>
                        <>
                          {key != 0 && <hr className={css(styles.hr)} />}
                          <div className={key == isSelect ? css(styles.qcastItemActive) : css(styles.qcastItem)} onClick={e => userSelected(key)}>
                            <img
                              src={item.imgsrc}
                              alt={""}
                              className={css(styles.imgPopularSmall)}
                            />
                            <div className={css(styles.msgAction)}>
                              <p className={css(styles.qcastTitle)}>{item.title}</p>
                              <input
                                size="sm"
                                type="button"
                                value={"Message"}
                                className={css(styles.forwardBtn)}
                                onClick={(e) => sendMessage(item.id)}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  }
                  {(isSeach && dataJessicaFiltered.length == 0) &&
                    <div className={css(styles.qcastList)}>
                      <div className={css(styles.containerNoResult)}>
                        <img
                          src={img_noResult}
                          alt=""
                          className={css(styles.img_noResult)}
                        />
                        <p className={css(styles.txtNoResultTitle)}>No search result</p>
                        <div className={css(styles.txtNoResultContents)}>
                          <p className={css(styles.txtNoResultContent)}>Search again or </p>
                          <p className={css(styles.txtNoResultBack)} onClick={(e) => backBtnClick(e)}> go back</p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                </CustomScrollbars>
              </div>
            </div>
          );
        default:
          return (
              <div className={css(styles.containerLoc)}>
      {(loc == "/user/home/discover" || loc == "/user/home/topics" || loc == "/user/home/qcasts" || loc == "/user/home/qcasts/viewQcast" || loc == "/user/home/qcasts/qcastReview" || loc == "/user/home/qcasters" || loc == "/user/home/qcasters/profile" || loc == "/user/home/1" || loc == "/user/home/2" || loc == "/user/home/3" || loc == "/user/home/4" || loc == "/user/home/5" || loc == "/user/home/6") &&
          <div className={css(styles.container)} style={{ width: "285px", position: "fixed" }}>
          <ul className={css(styles.menuContent)}>
            <li className={css(styles.navigationButton)}>
              <StyledButtonNavLink
                to={ROUTES.USER_HOME_DISCOVER_MAIN}
              >
                Discover
              </StyledButtonNavLink>
            </li>
            <li className={css(styles.navigationButton)}>
              <StyledButtonNavLink
                to={ROUTES.USER_HOME_TOPICS_MAIN}
              >
                Topics
              </StyledButtonNavLink>
            </li>

                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      to={ROUTES.USER_HOME_QCASTS}
                    >
                      Qcasts
                    </StyledButtonNavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      to={ROUTES.USER_HOME_QCASTERS_MAIN}
                    >
                      Qcasters
                    </StyledButtonNavLink>
                  </li>

                </ul>

                <hr className={css(styles.menuLine)} />


                <ul className={css(styles.menuContent)}>
                  <p className={css(styles.menuTitleSecond)}>My Playlists</p>
                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      size="small"
                      to={"1"}
                    >
                      Parenting guide
                    </StyledButtonNavLink>
                  </li>
                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      size="small"
                      to={"2"}
                    >
                      Relax my mind
                    </StyledButtonNavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      size="small"
                      to={"3"}
                    >
                      Good information
                    </StyledButtonNavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      size="small"
                      to={"4"}
                    >
                      Parenting guide
                    </StyledButtonNavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      size="small"
                      to={"5"}
                    >
                      Relax my mind
                    </StyledButtonNavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <StyledButtonNavLink
                      size="small"
                      to={"6"}
                    >
                      Good information
                    </StyledButtonNavLink>
                  </li>

          </ul>
        </div>
      }

      {(loc.includes(searchRespond)) &&
      <div className={css(styles.container)} style={{ width: "285px", position: "fixed" }}>
        <ul className={css(styles.menuContent)}>
          <li className={css(styles.navigationButton)}>
            <StyledButtonNavLink
                to={ROUTES.USER_RESPOND_ALL}
            >
              All
            </StyledButtonNavLink>
          </li>

          <li className={css(styles.navigationButton)}>
            <StyledButtonNavLink
                to={ROUTES.USER_RESPOND_SUBSCRIBED_QCASTERS}
            >
              Subscribed Qcasters
            </StyledButtonNavLink>
          </li>

          <li className={css(styles.navigationButton)}>
            <StyledButtonNavLink
                to={ROUTES.USER_RESPOND_SAVED_QCASTS}
            >
              Saved Qcasts
            </StyledButtonNavLink>
          </li>

          <li className={css(styles.navigationButton)}>
            <StyledButtonNavLinkSwitchRespons
                to={ROUTES.USER_RESPOND_RESPONSES_QUESTIONER}
            >
              Responses
            </StyledButtonNavLinkSwitchRespons>
          </li>

          <li className={css(styles.navigationButton)}>
            <StyledButtonNavLink
                to={ROUTES.USER_RESPOND_MY_FAVOURITES}
            >
              My Favourites
            </StyledButtonNavLink>
          </li>

          <li className={css(styles.navigationButton)}>
            <StyledButtonNavLinkSwitchPlaylists
                to={ROUTES.USER_RESPOND_MY_PLAYLISTS_CREATE}
            >
              My Playlists
            </StyledButtonNavLinkSwitchPlaylists>
          </li>
        </ul>
      </div>
      }
        </div>
        );
      }
      })()
   );
  }
