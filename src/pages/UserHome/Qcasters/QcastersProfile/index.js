import React, { useEffect } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import queryString from "query-string";

import img_people from "assets/images/icons/people.png";
import img_find from "assets/images/icons/find.png";
import img_question from "assets/images/icons/question.png";

import { StyledButtonSimpleFluid ,StyledImageCircle} from "components"

import { dataQcastersProfile, dataQcastersThird } from "fakeapi";

const UserHomeQcastersProfile = (props) => {
  const params = queryString.parse(props.location.search);

  useEffect(() => {
    console.log("params.key: ", params.key);
  }, [params.key])

  const handleOnClickViewProfile = () => {
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
              </div>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_find}
                  alt=""
                  className={css(styles.img_60)}
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.find}</p>
              </div>
              <div className={css(styles.subscriptionImgTwo)}>
                <img
                  src={img_question}
                  alt=""
                  className={css(styles.img_60)}
                />
                <p className={css(styles.txtSubscriptionContentIconTwo)}>{dataQcastersProfile[0].viewCount.question}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={css(styles.containerProfileButton)}>
          <div className={css(styles.containerProfileButtonSubscribe)}>
            <StyledButtonSimpleFluid size={16} value={"Subscribe"} />
          </div>
          <div className={css(styles.containerProfileButtonMore)}>
            <StyledButtonSimpleFluid size={16} value={":"} />
          </div>
        </div>
      </div>

      <div className={css(styles.containerSlide)}>
        <div className={css(styles.cardGrid5)}>
          {dataQcastersThird.map((item, key) =>
            <div key={key} className={css(styles.cardSecondSubCol)}>
              {/* <StyledCardSubscription
                txtTitle={item.title}
                imgsrc={item.imgsrc}
                viewCount={item.viewCount}
                buttonValue={"View Profile"}
                buttonOnClick={handleOnClickViewProfile}
              /> */}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default UserHomeQcastersProfile;