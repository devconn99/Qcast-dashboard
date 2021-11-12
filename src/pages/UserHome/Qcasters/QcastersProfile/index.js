import React, { useEffect, useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import queryString from "query-string";
import { ROUTES } from "../../../../constants";

import img_people from "assets/images/icons/people.png";
import img_find from "assets/images/icons/find.png";
import img_question from "assets/images/icons/question.png";

import { StyledButtonSimpleFluid ,StyledImageCircle, StyledCardSubscription} from "components"

import { dataQcastersProfile, dataQcastersProfileSecond } from "fakeapi";

const UserHomeQcastersProfile = (props) => {
  const params = queryString.parse(props.location.search);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log("params.key: ", params.key);
  }, [params.key])

  const handleOnClickViewProfile = (selectedID) => {
    props.history.push(ROUTES.USER_HOME_QCASTERS_PROFILE + "?id=" + selectedID);
  };
  const handleOnClickViewProfileSubscribe = (e) => {
    setIsActive(true);
    console.log("SubscribeButton Clicked");
    // props.history.push(ROUTES.USER_HOME_QCASTERS_PROFILE_SUBSCRIBE + "?id=" + selectedID);
  };
  return (
    <Container fluid className={css(styles.container)}>
      <div  className={css(styles.containerBackground)}>
        <img  className={css(styles.imgProfileBackground)} src={dataQcastersProfile[0].imgback} alt="" />
      </div>
      <div className={css(styles.containerProfile)}>
        <div className={css(styles.containerProfileSub)}>
          <div className={css(styles.containerProfileImg)}>
            <StyledImageCircle size="large" imgSrc={dataQcastersProfile[0].imgsrc}/>
          </div>
          <div className={css(styles.containerProfileContent)}>
            <p className={css(styles.txtTitle)}>{dataQcastersProfile[0].title}</p>
            <p className={css(styles.txtProfileTitle)}>{dataQcastersProfile[0].profile.title}</p>
            <p className={css(styles.txtProfileContent)}>{dataQcastersProfile[0].profile.content}</p>
            
            <div className={css(styles.subscriptionImg)}>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_people}
                  alt=""
                  className={css(styles.img_60)}
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.people}</p>
                <p className={css(styles.txtProfileContent)} >Subscribers</p>
              </div>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_find}
                  alt=""
                  className={css(styles.img_60)}
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.find}</p>
                <p className={css(styles.txtProfileContent)} >Qcast Series</p>
              </div>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_question}
                  alt=""
                  className={css(styles.img_60)}
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.question}</p>
                <p className={css(styles.txtProfileContent)} >Questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className={css(styles.containerProfileButton)}>
          <div className={css(styles.containerProfileButtonSubscribe)}>
            <StyledButtonSimpleFluid
              size={16}
              value={"Subscribe"}
              isActive = {isActive}
              buttonOnClick={(e) => handleOnClickViewProfileSubscribe(e)}
            />
          </div>
          <div className={css(styles.containerProfileButtonMore)}>
            <StyledButtonSimpleFluid size={16} value={":"} />
          </div>
        </div>
      </div>

      <div className={css(styles.containerSlide)}>
        <div className={css(styles.slideTitle)}>Qcasts</div>
        <div className={css(styles.cardGrid5)}>
          {dataQcastersProfileSecond.map((item, key) =>
            <div key={key} className={css(styles.cardSecondSubCol)}>
              <StyledCardSubscription
                imgsrc={item.imgsrc}
                txtTitle={item.title}
                txtContent={item.content}
                subTitle = {item.subtitle}
                subContent={item.subcontent}
                viewCount={item.viewCount}
                buttonValue={"View Qcast"}
                buttonOnClick={(e) => handleOnClickViewProfile(item.id)}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default UserHomeQcastersProfile;