// @flow
import React, { useState, useEffect, useRef } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../constants";
import { StyledButtonNavLink, StyledInputSearchBar } from "../../components";
import logo from "../../assets/images/logo/logo.png";
import img_search from "../../assets/images/icons/search.png";
import img_notify from "../../assets/images/icons/bell.png";
import img_profile from "../../assets/images/avatar/profile.png";

export default function StyledHeader(props) {
  const { pathname } = useLocation();
  const topContainer = useRef();
  const history = useHistory();

  const handleSearch = (searchKey) => {
    // window.location.href = ROUTES.USER_HOME_DISCOVER_SEARCH;
    history.push(ROUTES.USER_HOME_DISCOVER_SEARCH + "?key=" + searchKey);
  };

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <Navbar
      bg="light"
      expand="lg"
      ref={topContainer}
      className={css(styles.container)}
    >

      <NavLink to={ROUTES.HOME}>
        <img
          src={logo}
          alt={"LogoWithOnlyQ"}
          className={css(styles.img_logo)}
        />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={css(styles.menuMain)}>
        <div className={css(styles.menuMiddle)}>
          <Nav>
            <ul className={css(styles.menuMiddleContent)}>
              <li className={css(styles.navigationButton)}>
                <StyledButtonNavLink
                  to={ROUTES.USER_HOME_DISCOVER_MAIN}
                  isActive={!(pathname.indexOf(ROUTES.USER_HOME) < 0)}
                >
                  Home
                </StyledButtonNavLink>
              </li>
              <li className={css(styles.navigationButton)}>
                <StyledButtonNavLink
                  to={ROUTES.USER_CHANNEL_PROFILE}
                  isActive={!(pathname.indexOf(ROUTES.USER_CHANNEL_PROFILE) < 0)}
                >
                  Channel
                </StyledButtonNavLink>
              </li>

              <li className={css(styles.navigationButton)}>
                <StyledButtonNavLink
                  to={ROUTES.USER_TEAM}
                  isActive={!(pathname.indexOf(ROUTES.USER_TEAM) < 0)}
                >
                  Team
                </StyledButtonNavLink>
              </li>

              <li className={css(styles.navigationButton)}>
                <StyledButtonNavLink
                  to={ROUTES.USER_RESPOND}
                  isActive={!(pathname.indexOf(ROUTES.USER_RESPOND) < 0)}
                >
                  Respond
                </StyledButtonNavLink>
              </li>

              <li className={css(styles.navigationButton)}>
                <StyledButtonNavLink
                  to={ROUTES.USER_MESSENGER}
                  isActive={!(pathname.indexOf(ROUTES.USER_MESSENGER) < 0)}
                >
                  Messenger
                </StyledButtonNavLink>
              </li>
            </ul>
          </Nav>
        </div>
      </Navbar.Collapse>

      <div className={css(styles.menuRight)}>
        <StyledInputSearchBar showSearch={handleSearch} />
        {/* <img onClick={() => setIsSearch(true)} src={img_search} alt="search" className={isSearch ? css(styles.hide) : css(styles.img_notify)} /> */}
        <img src={img_notify} alt="notify" className={css(styles.img_notify)} />

        <div className={css(styles.navigationButtonProfile)}>

          <NavDropdown title={<span style={{ color: '#7B94B5' }}><img src={img_profile} alt="notify" className={css(styles.img_profile)} /> Adam Smith </span>} id="basic-nav-dropdown" alignRight>
            <li className={css(styles.navigationButton)}>
              <NavLink
                to={ROUTES.PORTAL}
                className={css(styles.navigationButtonText)}
              >
                My profile
              </NavLink>
            </li>

            <li className={css(styles.navigationButton)}>
              <NavLink
                to={ROUTES.USES_CASES}
                className={css(styles.navigationButtonText)}
              >
                Logout
              </NavLink>
            </li>

            <li className={css(styles.navigationButton)}>
              <NavLink
                to={ROUTES.BLOG}
                className={css(styles.navigationButtonText)}
              >
                ...
              </NavLink>
            </li>
          </NavDropdown>
        </div>
      </div>
    </Navbar>
  );
}
