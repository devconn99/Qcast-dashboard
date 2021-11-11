import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col,Dropdown,} from "react-bootstrap";

import img_people from "assets/images/icons/people.png";
import forte from 'assets/images/chanel/4.png'
import img_find from "assets/images/icons/find.png";
import img_question from "assets/images/icons/question.png";
import share from 'assets/images/chanel/share.png'
import arrow from 'assets/images/chanel/arrow.png'
import send from 'assets/images/chanel/send.png'
import Vector from 'assets/images/chanel/Vector.png'
import App from './App'


import { StyledImageCircle,StyledButtonSimpleFluidLittle,StyledCardChanel } from "components"

import { dataQcastersProfile, dataQcastersThird ,dataDavidQ,dataDavidJacob} from "fakeapi";

import {Tabs} from './Tabs'

import { Navbar, Nav,NavDropdown} from "react-bootstrap";
import { StyledButtonNavLink, StyledInputSearchBar } from "../../../components/";
import { ROUTES } from "../../../constants";
import { Link, useLocation, NavLink } from "react-router-dom";

const UserHomeQcastersProfile = (props) => {
 
    const { pathname } = useLocation();



    const [search, setSearch] = React.useState(' ');

  return (
    <Container fluid className={css(styles.container)}>
      <div  className={css(styles.containerBackground)}>
        <img  className={css(styles.imgProfileBackground)} src={dataQcastersProfile[0].imgback} alt="" />
      </div>
      <Row>

        <Col   xl={10} md={10} sm={2}>
        <div className={css(styles.containerProfile)}>
        <div className={css(styles.containerProfileSub)}>
          <div className={css(styles.containerProfileImg)}>
            <StyledImageCircle size="large" imgSrc={dataDavidJacob[0].logo}/>
          </div>
          <div className={css(styles.containerProfileContent)}>
            <p className={css(styles.txtTitle)}>{dataDavidJacob[0].name}</p>
            <p className={css(styles.txtProfileTitle)}>{dataDavidJacob[0].about}</p>
            <p className={css(styles.txtProfileContent)}>{dataDavidJacob[0].info}</p>
            
            <div className={css(styles.subscriptionImg)}>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_people}
                  alt=""
                  className={css(styles.img_60)}
                  
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.people}</p>
                <p className={css(styles.txtProfileContent)}  >{dataDavidJacob[0].Subscribers}</p>
              </div>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_find}
                  alt=""
                  className={css(styles.img_60)}
                />
               <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.find}</p>
               <p className={css(styles.txtProfileContent)} >{dataDavidJacob[0].Qcast}</p>
              </div>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_question}
                  alt=""
                  className={css(styles.img_60)}
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.question}</p>
                <p className={css(styles.txtProfileContent)} >{dataDavidJacob[0].Questions}</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
        
        </Col>

        <Col xl={2} md={2} sm={2} 
         style={{marginRight:'20' ,marginTop:'20px'}}>
         <StyledButtonSimpleFluidLittle
                   size={16}
                   value={"Edit Profile"}
                   img_people={"none"}
                  
                 />
                
         </Col>

        </Row>

     



      <Row >
    
     <Col  xl={10} md={10} sm={10}>


     
        <Navbar id="basic-navbar-nav" className={css(styles.menuMain)}>
             <div className={css(styles.menuMiddle)}>
               <Nav>
                <ul className={css(styles.menuMiddleContent)}>
                  <li className={css(styles.navigationButton)}>


                   <Tabs
                     to={ROUTES.USER_CHANNEL}
                     index={1}
                     isActive={true}
                     
                     onClick={()=>{
                      setSearch(1)
                      
                    }}
                    search={search}
                    >
                     
                    
                  All
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                   <Tabs
                     to={ROUTES.USER_CHANNEL}
                     index={2}
                     isActive={false}
                     
                    onClick={()=>{
                      setSearch(2)
                      
                    }}
                    search={search}
                    >
                  Draft
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                   <Tabs
                     to={ROUTES.USER_CHANNEL}
                     index={2}
                     isActive={false}
                     
                    onClick={()=>{
                      setSearch(2)
                      
                    }}
                    search={search}
                    >
                  Private
                    </Tabs>
                  </li>
                  <li className={css(styles.navigationButton)}>
                   <Tabs
                     to={ROUTES.USER_CHANNEL}
                     index={2}
                     isActive={false}
                     
                    onClick={()=>{
                      setSearch(2)
                      
                    }}
                    search={search}
                    >
                  Published
                    </Tabs>
                  </li>
                 
    
                 
                 </ul>
               </Nav>
               
             </div>
           </Navbar>


        

           
         </Col>
         <Col xl={2} md={2} sm={2}
         style={{marginRight:'20'}}>
         <StyledButtonSimpleFluidLittle
                   size={16}
                   value={"Create Qcast"}
                   img_people={forte}
                  
                 />
                
         </Col>
    
 </Row>
    
     <Row >
         

         
             
            
     <Col  xl={3} md={3}>
                
                <StyledCardChanel
                  imgsrc={dataDavidJacob[0].logo}
                   txtTitle={dataDavidJacob[0].list}
                  
                />
                 <Dropdown>
<Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'139px',fontSize:'16px'}}
>
  More
</Dropdown.Toggle>

<Dropdown.Menu  className={css(styles.naviMore)} >
  <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                src={share}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Forward</Dropdown.Item>
  <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={arrow}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Share</Dropdown.Item>
  <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={send}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Publish</Dropdown.Item>
  <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={Vector}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Download</Dropdown.Item>
  
</Dropdown.Menu>
</Dropdown>
           
           </Col>

           <Col  xl={3} md={3}>
                
                  <StyledCardChanel
                    imgsrc={dataDavidJacob[0].logo}
                     txtTitle={dataDavidJacob[0].list}
                    
                  />
                   <Dropdown>
  <Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
    More
  </Dropdown.Toggle>

  <Dropdown.Menu  className={css(styles.naviMore)} >
    <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                  src={share}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Forward</Dropdown.Item>
    <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={arrow}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Share</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={send}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Publish</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={Vector}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Download</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
             
             </Col>
             <Col  xl={3} md={3}>
                
                <StyledCardChanel
                  imgsrc={dataDavidJacob[0].logo}
                   txtTitle={dataDavidJacob[0].list}
                  
                />
                 <Dropdown>
<Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
  More
</Dropdown.Toggle>

<Dropdown.Menu  className={css(styles.naviMore)} >
  <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                src={share}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Forward</Dropdown.Item>
  <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={arrow}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Share</Dropdown.Item>
  <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={send}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Publish</Dropdown.Item>
  <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={Vector}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Download</Dropdown.Item>
  
</Dropdown.Menu>
</Dropdown>
           
           </Col>
           <Col  xl={3} md={3}>
                
                  <StyledCardChanel
                    imgsrc={dataDavidJacob[0].logo}
                     txtTitle={dataDavidJacob[0].list}
                    
                  />
                   <Dropdown>
  <Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
    More
  </Dropdown.Toggle>

  <Dropdown.Menu  className={css(styles.naviMore)} >
    <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                  src={share}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Forward</Dropdown.Item>
    <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={arrow}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Share</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={send}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Publish</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={Vector}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Download</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
             
             </Col>
             <Col  xl={3} md={3}>
                
                  <StyledCardChanel
                    imgsrc={dataDavidJacob[0].logo}
                     txtTitle={dataDavidJacob[0].list}
                    
                  />
                   <Dropdown>
  <Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
    More
  </Dropdown.Toggle>

  <Dropdown.Menu  className={css(styles.naviMore)} >
    <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                  src={share}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Forward</Dropdown.Item>
    <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={arrow}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Share</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={send}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Publish</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={Vector}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Download</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
             
             </Col>

             <Col  xl={3} md={3}>
                
                <StyledCardChanel
                  imgsrc={dataDavidJacob[0].logo}
                   txtTitle={dataDavidJacob[0].list}
                  
                />
                 <Dropdown>
<Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
  More
</Dropdown.Toggle>

<Dropdown.Menu  className={css(styles.naviMore)} >
  <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                src={share}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Forward</Dropdown.Item>
  <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={arrow}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Share</Dropdown.Item>
  <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={send}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Publish</Dropdown.Item>
  <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                src={Vector}
                alt=""
                style={{height:'16px',width:"16px", marginRight:'10px'}}
              />Download</Dropdown.Item>
  
</Dropdown.Menu>
</Dropdown>
           
           </Col>
           <Col  xl={3} md={3}>
                
                  <StyledCardChanel
                    imgsrc={dataDavidJacob[0].logo}
                     txtTitle={dataDavidJacob[0].list}
                    
                  />
                   <Dropdown>
  <Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
    More
  </Dropdown.Toggle>

  <Dropdown.Menu  className={css(styles.naviMore)} >
    <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                  src={share}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Forward</Dropdown.Item>
    <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={arrow}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Share</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={send}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Publish</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={Vector}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Download</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
             
             </Col>
             <Col  xl={3} md={3}>
                
                  <StyledCardChanel
                    imgsrc={dataDavidJacob[0].logo}
                     txtTitle={dataDavidJacob[0].list}
                    
                  />
                   <Dropdown>
  <Dropdown.Toggle key={"down"} id={`dropdown-button-drop-down`} style={{background:'#ECF4FC',color:"#6497C7",border:'none',marginLeft:'138px',fontSize:'16px'}}
>
    More
  </Dropdown.Toggle>

  <Dropdown.Menu  className={css(styles.naviMore)} >
    <Dropdown.Item href="#/action-1" style={{color:'#7B94B5' ,size:"14px"}}>  <img
                  src={share}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Forward</Dropdown.Item>
    <Dropdown.Item href="#/action-2"  style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={arrow}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Share</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={send}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Publish</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:'#7B94B5' ,size:"14px"}}> <img
                  src={Vector}
                  alt=""
                  style={{height:'16px',width:"16px", marginRight:'10px'}}
                />Download</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
             
             </Col>

          
         
           
              
            
         
 
     </Row>


     
    </Container>
  );
}

export default UserHomeQcastersProfile;