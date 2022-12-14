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
  UserChannelProfile,
  UserChannelProfileEdit,
  UserTeam,
  UserMessenger,
  UserRespondAll,
  UserRespondSubscribedQcasters,
  UserRespondSavedQcasts,
  UserRespondMyFavourites,
  UserRespondMyPlaylistsPlay,
  UserRespondMyPlaylistsActive,
  UserRespondMyPlaylistsCreate,
  UserRespondResponsesQuestioner,
  UserRespondResponsesContent,
  UserRespondResponsesResponder,
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
              component={PortalLogInAccount}
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
                path={ROUTES.USER_CHANNEL_PROFILE}
                component={UserChannelProfile}
                {...repeatedProps}
              />
              
              <AuthRoute
                path={ROUTES.USER_CHANNEL_PROFILE_EDIT}
                component={UserChannelProfileEdit}
                {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_ALL}
                  component={UserRespondAll}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_RESPONSES_QUESTIONER}
                  component={UserRespondResponsesQuestioner}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_RESPONSES_CONTENT}
                  component={UserRespondResponsesContent}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_RESPONSES_RESPONDER}
                  component={UserRespondResponsesResponder}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_SUBSCRIBED_QCASTERS}
                  component={UserRespondSubscribedQcasters}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_SAVED_QCASTS}
                  component={UserRespondSavedQcasts}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_MY_FAVOURITES}
                  component={UserRespondMyFavourites}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_MY_PLAYLISTS_ACTIVE}
                  component={UserRespondMyPlaylistsActive}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_MY_PLAYLISTS_CREATE}
                  component={UserRespondMyPlaylistsCreate}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_MY_PLAYLISTS_PLAY}
                  component={UserRespondMyPlaylistsPlay}
                  {...repeatedProps}
              />

              <AuthRoute
                  path={ROUTES.USER_RESPOND_MY_PLAYLISTS_ACTIVE}
                  component={UserRespondMyPlaylistsActive}
                  {...repeatedProps}
              />

              <AuthRoute
                path={ROUTES.USER_TEAM}
                component={UserTeam}
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
