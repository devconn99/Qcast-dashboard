import React from 'react'
import { Container, Row, Col,Dropdown } from "react-bootstrap";
import styles  from './styles'
import { css } from "aphrodite";
import { dataQcastersProfile,dataDavidJacob} from "fakeapi";
import { StyledButtonSimpleFluid,StyledImageCircleDark } from "components"
import { Link, useLocation, NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";
const ChangeBanner =()=>{
    return(
        <>
<Container fluid className={css(styles.container)}>
      <div  className={css(styles.containerBackground)}>
        <img  className={css(styles.imgProfileBackground)} src={dataQcastersProfile[0].imgback} alt="" />
      </div>

      <Row  gap={2} className="col-md-2 mx-auto">
    
    <div className={css(styles.containerProfileButton)}>
          <div className={css(styles.containerProfileButtonSubscribe)} >
          <Link to ={ROUTES.USER_CHANNEL_ChangeBanner} >
            <StyledButtonSimpleFluid size={16} value={"Change Banner"}  style={{width: "317px",}}/>
            </Link>
          </div>
          
        </div>
    </Row >
    <Row  gap={2} className="col-md-2 mx-auto">
     
    <StyledImageCircleDark size="large"  text={'Change Photo'} variant={'one'} ImgIcon={dataDavidJacob[0].five} imgSrc={dataDavidJacob[0].logoB}/>
    
    </Row>
    <Row  gap={6} className="col-md-4 mx-auto">
     
<Col>
<p>Profile Name</p>
</Col>
<input type="text" placeholder="David Jacob" className={css(styles.inputLittle)}/>
    </Row>
    <Row  gap={5} className="col-md-4 mx-auto">
     
     <Col>
     <p>Motto</p>
     </Col>
     <input type="text" placeholder='Husband + Father of Six' className={css(styles.inputLittle)}/>
         </Row>
         <Row  gap={6} className="col-md-4 mx-auto">
     
     <Col>
     <p>Description</p>
     </Col>
     <textarea  type="text"  className={css(styles.inputLarge)}/>
         </Row>
         <Row  gap={3} className="col-md-2 mx-auto">
    
    <div className={css(styles.containerProfileButtonUpdatesProfile)}>
          <div className={css(styles.containerProfileButtonSubscribe)} >
            <StyledButtonSimpleFluid size={16} value={"Update Profile"}  style={{width: "317px",}}/>
          </div>
          
        </div>
    </Row >
          
     
      </Container>
        </>
    )
}

export default ChangeBanner