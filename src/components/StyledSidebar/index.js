// @flow
import React, { useEffect, useState } from "react";
import { css } from "aphrodite";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";

import { ROUTES } from "../../constants";
import styles from "./styles";

import { StyledButtonNavLink } from "../../components";
import { dataTeamMembers } from "../../fakeapi";

import img_dashboard from "../../assets/images/icons/dashboard.png";
import img_group from "../../assets/images/icons/group.png";
import img_people_one from "../../assets/images/icons/people_one.png";
import img_arrow_down from "../../assets/images/icons/arrow_down.png";
import img_sec_unlock from "../../assets/images/icons/sec_unlock.png";
import img_sec_locked from "../../assets/images/icons/sec_locked.png";
import img_clear from "../../assets/images/icons/clear.svg";

export default function StyledSidebar(props) {
  console.log("propssss", props);
  const location = useLocation();
  const loc = location.pathname;
  const params = queryString.parse(location.search);
  const btnStyle = css(styles.linkButton);
  const btnStyleActive = css(styles.linkButtonActive);

  const [openDashboard, setOpenDashboard] = useState(true);
  const [openGroup, setOpenGroup] = useState(true);
  const [openPeople, setOpenPeople] = useState(true);

  return (
    <div className={css(styles.container)}>
      {
        (() => {
          switch (loc) {
            case "/user/channel/profile":
              return (
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
              );
            case "/user/channel/profileEdit":
              return (
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
              );
            case "/user/team":
              return (
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
              );
            default:
              return (
                <div style={{ position: "fixed" }}>
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
              );
          }
        })()
      }

    </div>
  );
}
