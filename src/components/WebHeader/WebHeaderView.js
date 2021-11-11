// @flow
import React, { useEffect, useRef } from "react";
import { css } from "aphrodite";
import styles from "./WebHeaderStyles";
// import LogoWithOnlyQ from "../../assets/images/LogoWithOnlyQ/LogoWithOnlyQ.png";
import LogoWithOnlyQ from "../../assets/images/LogoWithOnlyQ/logowithblueQ.png";
import logo from "../../assets/images/logo/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function WebHeaderView(props) {
  const { stickHeader, isHomePage } = props;

  const topContainer = useRef();

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
      <Container className={css(styles.customWidth)}>
        <NavLink to={ROUTES.HOME} className={css(styles.logoMainView)}>
          {isHomePage ? (
            <>
              <img
                src={LogoWithOnlyQ}
                className={css([
                  styles.fullLogo,
                  stickHeader && styles.fullLogoSticky,
                ])}
              />
              <img
                src={logo}
                className={css([
                  styles.logoInitial,
                  stickHeader && styles.logoInitialSticky,
                ])}
              />
            </>
          ) : (
            <>
              <img
                src={logo}
                className={css([
                  styles.fullLogo,
                  stickHeader && styles.fullLogoSticky,
                ])}
              />

              <img
                src={LogoWithOnlyQ}
                className={css([
                  styles.logoInitial,
                  stickHeader && styles.logoInitialSticky,
                ])}
              />
            </>
          )}
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className={css(styles.navigationBar)}>
              <li className={css(styles.navigationButton)}>
                <NavLink
                  to={ROUTES.ABOUT}
                  className={css(styles.navigationButtonText)}
                  activeClassName={css(styles.activeClass)}
                >
                  About
                </NavLink>
              </li>
              <li className={css(styles.navigationButton)}>
                <NavLink
                  to={ROUTES.FAQ}
                  className={css(styles.navigationButtonText)}
                  activeClassName={css(styles.activeClass)}
                >
                  FAQs
                </NavLink>
              </li>

              <li className={css(styles.navigationButton)}>
                <NavLink
                  to={ROUTES.TEAM}
                  className={css(styles.navigationButtonText)}
                  activeClassName={css(styles.activeClass)}
                >
                  Team
                </NavLink>
              </li>

              <li className={css(styles.navigationButton)}>
                <NavLink
                  to={ROUTES.CONTACT}
                  className={css(styles.navigationButtonText)}
                  activeClassName={css(styles.activeClass)}
                >
                  Contact
                </NavLink>
              </li>

              <li className={css(styles.navigationButton)}>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <li className={css(styles.navigationButton)}>
                    <NavLink
                      to={ROUTES.PORTAL}
                      className={css(styles.navigationButtonText)}
                    >
                      Portal
                    </NavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <NavLink
                      to={ROUTES.USES_CASES}
                      className={css(styles.navigationButtonText)}
                    >
                      Uses Cases
                    </NavLink>
                  </li>

                  <li className={css(styles.navigationButton)}>
                    <NavLink
                      to={ROUTES.BLOG}
                      className={css(styles.navigationButtonText)}
                    >
                      Blog
                    </NavLink>
                  </li>
                </NavDropdown>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
