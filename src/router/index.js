import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { ROUTES } from "../constants";
import {
  LinkForPortalPages,
  PortalLogInAccount,
  PortalForgotPass,
  PortalSSOLogIn,
  PortalResetPass,
  PortalSignUpWithEmail,
  PortalSignUpAccount,
  PortalSignUpFriend,
  PortalSignUpTeam,
  PortalSignUpPaymentPlan,
  PortalSignUpPaymentReview,
  PortalSignUpPaymentDetail,
  PortalSignUpPaymentFinish,
  PortalInvited,
  UserHomeDiscoverMain,
  UserHomeDiscoverPopular,
  UserHomeDiscoverSearch,
  UserHomeTopicsMain,
  UserHomeTopicsCounselling,
  UserHomeQcasts,
  UserHomeQcastersMain,
  UserHomeQcastersProfile,
  UserHomeQcastersViewQcast,
  UserHomeQcastsQcastReview,
  UserChannel,
  UserChannelProfileEdit,
  UserChannelAddBaner,
  UserTeam,
  UserRespond,
  UserMessenger,
  UserChannelChangeBanner
} from "../pages";

import LayoutWrapper from "./LayoutWrapper";
import LayoutUser from "./LayoutUser";

const NoAuthRoute = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};
const AuthRoute = ({ ...props }) => {
  // Add verification for auth
  return (
    <Route {...props} />
  )
};

class Routers extends React.PureComponent {
  render() {
    const { user } = this.props;
    const repeatedProps = {
      user,
      exact: true,
      forAdminOnly: false,
    };
    return (
      <Router>
        <div>
          <Switch>
            <NoAuthRoute
              path={ROUTES.LINK_PORTAL_LOGIN}
              component={LinkForPortalPages}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_LOGIN}
              component={PortalLogInAccount}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_FORGOTPASS}
              component={PortalForgotPass}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_WITH_EMAIL}
              component={PortalSignUpWithEmail}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_ACCOUNT}
              component={PortalSignUpAccount}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_FRIEND}
              component={PortalSignUpFriend}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_TEAM}
              component={PortalSignUpTeam}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SSO_LOGIN}
              component={PortalSSOLogIn}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_INVITED}
              component={PortalInvited}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_RESET_PASS}
              component={PortalResetPass}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_PAYMENT_PLAN}
              component={PortalSignUpPaymentPlan}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_PAYMENT_REVIEW}
              component={PortalSignUpPaymentReview}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_PAYMENT_DETAIL}
              component={PortalSignUpPaymentDetail}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.PORTAL_SIGN_UP_PAYMENT_FINISH}
              component={PortalSignUpPaymentFinish}
              {...repeatedProps}
            />

            <LayoutUser>
              <AuthRoute
                path={ROUTES.USER_HOME_DISCOVER_MAIN}
                exact
                component={UserHomeDiscoverMain}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_DISCOVER_POPULAR}
                component={UserHomeDiscoverPopular}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_DISCOVER_SEARCH}
                component={UserHomeDiscoverSearch}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_TOPICS_MAIN}
                exact
                component={UserHomeTopicsMain}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_TOPICS_COUNSELLING}
                component={UserHomeTopicsCounselling}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_QCASTS}
                component={UserHomeQcasts}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_QCASTERS_MAIN}
                exact
                component={UserHomeQcastersMain}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_QCASTERS_PROFILE}
                component={UserHomeQcastersProfile}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_QCASTERS_VIEW_QCAST}
                component={UserHomeQcastersViewQcast}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_HOME_QCASTS_QCAST_REVIEW}
                component={UserHomeQcastsQcastReview}
                {...repeatedProps}
              />

              <AuthRoute
                path={ROUTES.USER_CHANNEL}
                component={UserChannel}
                {...repeatedProps}
              />

              <AuthRoute
                path={ROUTES.USER_CHANNEL_PROFILE}
                component={UserChannelProfileEdit}
                {...repeatedProps}
              />

              <AuthRoute
                path={ROUTES.USER_CHANNEL_ADDBANER}
                component={UserChannelAddBaner}
                {...repeatedProps}
              />

              <AuthRoute
                path={ROUTES.USER_CHANNEL_ChangeBanner}
                component={UserChannelChangeBanner}
                {...repeatedProps}
              />




              <AuthRoute
                path={ROUTES.USER_TEAM}
                component={UserTeam}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_RESPOND}
                component={UserRespond}
                {...repeatedProps}
              />
              <AuthRoute
                path={ROUTES.USER_MESSENGER}
                component={UserMessenger}
                {...repeatedProps}
              />
            </LayoutUser>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
