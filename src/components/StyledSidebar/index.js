// @flow
import React, { useEffect, useRef } from "react";
import { css } from "aphrodite";
import { NavLink,useLocation  } from "react-router-dom";

import { ROUTES } from "../../constants";
import styles from "./styles";
import logo from "../../assets/images/logo/logo.png";
import { StyledButtonNavLink } from "../../components";

export default function StyledSidebar(props) {
  const location = useLocation();
 const loc=location.pathname;
  return (
    <div className={css(styles.container)}>
      {loc=="/user/channel"&&
       <div style={{position:"fixed"}}>
          <ul className={css(styles.menuContent)}>
        <li className={css(styles.navigationButton)}>
          <StyledButtonNavLink
            to={ROUTES.USER_CHANNEL}
          >
            Profile
          </StyledButtonNavLink>
        </li>
        <li className={css(styles.navigationButton)}>
          <StyledButtonNavLink
            to={ROUTES.USER_HOME_TOPICS_MAIN}
          >
            Drafts
          </StyledButtonNavLink>
        </li>

        <li className={css(styles.navigationButton)}>
          <StyledButtonNavLink
            to={ROUTES.USER_HOME_QCASTS}
          >
            Private
          </StyledButtonNavLink>
        </li>

        <li className={css(styles.navigationButton)}>
          <StyledButtonNavLink
            to={ROUTES.USER_HOME_QCASTERS_MAIN}
          >
            Published
          </StyledButtonNavLink>
        </li>

      </ul>
         </div>

     }
     {loc!="/user/channel"&&
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

     }
      {/* <hr className={css(styles.menuLine)} /> */}

      
      {loc!="/user/channel"&&
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
      
      
      }
     
    </div>
  );
}
