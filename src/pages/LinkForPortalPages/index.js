import React from "react";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";

function LinkForPortalPages() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "700px", marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
      <Link to={ROUTES.PORTAL_LOGIN}> 1. - Login Page - </Link>
      <Link to={ROUTES.PORTAL_SIGN_UP_ACCOUNT}> 2. - Signup Page after Opening up the "confirmation link" from their email - </Link>
      <Link to={ROUTES.PORTAL_INVITED}> 3. - Invited User Signup page after Opening up the "invite link" from their email - </Link>
      <br />
    </div>
  );
}

export default LinkForPortalPages;