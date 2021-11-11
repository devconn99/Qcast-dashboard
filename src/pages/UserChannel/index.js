import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { dataFeatured, dataMostPopular, dataSubscription } from "fakeapi";
import ChangeBanner from './ChangeBanner/ChangeBanner'
import Page from './Page/Page'
import AddBaner from './AddBaner/AddBaner'
const UserChannel = () => {
  return (
    <div style={{ height: "1000px" }}>
   
   <Page/> 
       {/* <ChangeBanner/> */}
      {/* <AddBaner/>  */}
     
    </div>
  );
}

export default UserChannel;