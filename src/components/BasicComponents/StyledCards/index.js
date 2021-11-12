import { css } from "aphrodite";
import styles from "./styles";
import { StyledImageCircle, StyledButtonSimpleFluid } from "components";
import img_msg from "assets/images/icons/message.png";
import img_eye_open from "assets/images/icons/eye_open.png";
import img_view from "assets/images/icons/viewed.png";
import img_people from "assets/images/icons/people.png";
import img_find from "assets/images/icons/find.png";
import img_question from "assets/images/icons/question.png";
import img_camera from "assets/images/icons/camera.png";

export const StyledCardFeature = (props) => {
  const { imgSrc, txtContent, txtTitle, ...otherprops } = props;
  return (
    <div className={css(styles.containerFeature)}>
      <img
        src={imgSrc}
        alt={""}
        className={css(styles.imgFeature)}
        {...otherprops}
      />
      <p className={css(styles.txtFeatureContent)}>{txtContent}</p>
      <p className={css(styles.txtFeatureTitle)}>{txtTitle}</p>
    </div>
  )
};

export const StyledCardPopular = (props) => {
  const { imgSrc, txtContent, txtTitle } = props;
  return (
    <div className={css(styles.containerPopular)}>
      <div className={css(styles.imgPopular)}>
        <StyledImageCircle size="small" imgSrc={imgSrc} />
      </div>
      <div className={css(styles.popularSub)}>
        <p className={css(styles.txtPopularContent)}>{txtContent}</p>
        <p className={css(styles.txtPopularTitle)}>{txtTitle}</p>
      </div>
    </div>
  )
};
export const StyledCardPopularLarge = (props) => {
  const { imgSrc, txtContent, txtTitle, viewCount, txtSubTitle, txtSubContent } = props;
  return (
    <div className={css(styles.containerPopularLarge)}>
      <div className={css(styles.imgPopularLarge)}>
        <StyledImageCircle size="small" imgSrc={imgSrc} />
      </div>
      <div className={css(styles.popularSub)}>
        <p className={css(styles.txtPopularContent)}>{txtContent}</p>
        <p className={css(styles.txtPopularTitleLarge)}>{txtTitle}</p>

        <div className={css(styles.subscriptionImg)}>
          <div className={css(styles.subscriptionImgOne)}>
            <img
              src={img_msg}
              alt=""
              className={css(styles.img_30)}
            />
            <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount[0]}</p>
          </div>
          <div className={css(styles.subscriptionImgOne)}>
            <img
              src={img_eye_open}
              alt=""
              className={css(styles.img_30)}
            />
            <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount[1]}</p>
          </div>
          <div className={css(styles.subscriptionImgOne)}>
            <img
              src={img_view}
              alt=""
              className={css(styles.img_30)}
            />
            <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount[2]}</p>
          </div>
        </div>

        <div className={css(styles.subscriptionQue)}>
          <p className={css(styles.txtSubscriptionTitleSecond)}>{txtSubTitle}</p>
          <img
            src={img_camera}
            alt=""
            className={css(styles.img_camera)}
          />
          <p className={css(styles.txtSubscriptionContentSecond)}>{txtSubContent}</p>
        </div>
      </div>
    </div>
  )
};

export const StyledCardSubscription = (props) => {
  const { txtContent, txtTitle, imgsrc, viewCount, subTitle, subContent ,buttonValue, buttonOnClick} = props;
  const isSearchCast = txtContent === undefined;
  console.log(isSearchCast);
  return (
    <div className={css(styles.containerSubscription)}>
      <div className={css(styles.imgSubscription)}>
        <StyledImageCircle size="large" imgSrc={imgsrc} />
      </div>
      <div className={css(styles.subscriptionSub)}>
        <p className={css(styles.txtSubscriptionContentFirst)}>{txtContent}</p>
        <p className={css(styles.txtSubscriptionTitleFirst)}>{txtTitle}</p>
      </div>
      <div className={css(styles.subscriptionImg)}>
        <div className={css(styles.subscriptionImgOne)}>
          <img
            src={img_msg}
            alt=""
            className={css(styles.img_30)}
          />
          <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount.message}</p>
        </div>
        <div className={css(styles.subscriptionImgOne)}>
          <img
            src={img_eye_open}
            alt=""
            className={css(styles.img_35)}
          />
          <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount.view}</p>
        </div>
        <div className={css(styles.subscriptionImgOne)}>
          <img
            src={img_view}
            alt=""
            className={css(styles.img_30)}
          />
          <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount.answer}</p>
        </div>
      </div>
      {!isSearchCast ?
        <>
          <div className={css(styles.subscriptionQue)}>
            <p className={css(styles.txtSubscriptionTitleSecond)}>{subTitle}</p>
            <img
              src={img_camera}
              alt=""
              className={css(styles.img_camera)}
            />
            <p className={css(styles.txtSubscriptionContentSecond)}>{subContent}</p>
          </div>
          <div className={css(styles.subscriptionBtn)}>
            <StyledButtonSimpleFluid value={buttonValue} />
          </div>
        </>
        :
        <></>
      }
    </div>
  )
};

export const StyledCardChanel = (props) => {

  const { txtContent, txtTitle, imgsrc, viewCount, subTitle, subContent ,buttonValue, buttonOnClick} = props;
  const isSearchCast = txtContent === undefined;
  console.log(isSearchCast);
  return (
    <div className={css(styles.containerSubscription)}>
      <div className={css(styles.imgSubscription)}>
        <StyledImageCircle size="large" imgSrc={imgsrc} />
      </div>
      <div className={css(styles.subscriptionSub)}>
        <p className={css(styles.txtSubscriptionContentFirst)}>{txtContent}</p>
        <p className={css(styles.txtSubscriptionTitleFirst)}>{txtTitle}</p>
      </div>
      
    </div>
  )
};

export const StyledCardQcasters = (props) => {
  const { txtTitle, imgsrc, viewCount, buttonValue, buttonOnClick } = props;

  return (
    <div className={css(styles.containerSubscription)}>
      <div className={css(styles.imgSubscription)}>
        <StyledImageCircle size="large" imgSrc={imgsrc} />
      </div>
      <div className={css(styles.subscriptionSub)}>
        <p className={css(styles.txtSubscriptionTitleFirst)}>{txtTitle}</p>
      </div>
      <div className={css(styles.subscriptionImg)}>
        <div className={css(styles.subscriptionImgOne)}>
          <img
            src={img_people}
            alt=""
            className={css(styles.img_35)}
          />
          <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount.people}</p>
        </div>
        <div className={css(styles.subscriptionImgOne)}>
          <img
            src={img_find}
            alt=""
            className={css(styles.img_35)}
          />
          <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount.find}</p>
        </div>
        <div className={css(styles.subscriptionImgOne)}>
          <img
            src={img_question}
            alt=""
            className={css(styles.img_35)}
          />
          <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount.question}</p>
        </div>
      </div>
      {buttonValue !== undefined ?
        <div className={css(styles.subscriptionBtn)}>
          <StyledButtonSimpleFluid size={16} value={buttonValue} buttonOnClick={buttonOnClick} />
        </div>
        :
        <></>
      }
    </div>
  )
};


export const StyledCardQcastersMain = (props) => {
  const { txtTitle, imgsrc, viewCount, buttonValue, buttonOnClick } = props;

  return (
    <div className={css(styles.containerSubscription)}>
      <div className={css(styles.imgSubscription)}>
        <StyledImageCircle size="large" imgSrc={imgsrc} />
      </div>
      <div className={css(styles.subscriptionSub)}>
        <p className={css(styles.txtSubscriptionTitleFirst)}>{txtTitle}</p>
      </div>
      <div className={css(styles.subscriptionImg)}>
        <div className={css(styles.subscriptionImgTwo)}>
          <img
            src={img_people}
            alt=""
            className={css(styles.img_45)}
          />
          <p className={css(styles.txtSubscriptionContentIconTwo)}>{viewCount.people}</p>
        </div>
        <div className={css(styles.subscriptionImgTwo)}>
          <img
            src={img_find}
            alt=""
            className={css(styles.img_45)}
          />
          <p className={css(styles.txtSubscriptionContentIconTwo)}>{viewCount.find}</p>
        </div>
        <div className={css(styles.subscriptionImgTwo)}>
          <img
            src={img_question}
            alt=""
            className={css(styles.img_45)}
          />
          <p className={css(styles.txtSubscriptionContentIconTwo)}>{viewCount.question}</p>
        </div>
      </div>
      {buttonValue !== undefined ?
        <div className={css(styles.subscriptionBtn)}>
          <StyledButtonSimpleFluid size={16} value={buttonValue} buttonOnClick={buttonOnClick} />
        </div>
        :
        <></>
      }
    </div>
  )
};
