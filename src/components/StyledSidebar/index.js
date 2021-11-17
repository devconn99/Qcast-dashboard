// @flow
import React, { useEffect, useRef } from "react";
import { css } from "aphrodite";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";

import { ROUTES } from "../../constants";
import styles from "./styles";
import logo from "../../assets/images/logo/logo.png";
import { StyledButtonNavLink } from "../../components";

export default function StyledSidebar(props) {
  const location = useLocation();
  const loc = location.pathname;
  const params = queryString.parse(location.search);
  const btnStyle = css(styles.linkButton);
	const btnStyleActive = css(styles.linkButtonActive);
  return (
    <div className={css(styles.container)}>
      {(loc == "/user/channel/profile" || loc == "/user/channel/profileEdit") &&
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

      }
      {(loc != "/user/channel/profile" && loc != "/user/channel/profileEdit" && loc != "/user/channel/profile/drafts") &&
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
      }

    </div>
  );
}
