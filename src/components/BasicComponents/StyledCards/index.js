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
import {StyledImageCirclePlaylist, StyledImageCircleSmall} from "../StyledImages";
import {StyledButtonSimpleAddPlaylist, StyledButtonSimplePlaylist} from "../StyledButtons";
import React, {useEffect} from "react";
import img_add_svg from "../../../assets/images/icons/iconAddPlSvg.svg";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../constants";
import queryString from "query-string";

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
  const { txtContent, txtTitle, imgsrc, viewCount, subTitle, subContent ,buttonValue, buttonOnClick, where} = props;
  const isSearchCast = txtContent === undefined;
  console.log(isSearchCast);
  return (
    <div className={css(styles.containerSubscription)}>
      <div className={css(styles.imgSubscription)}>
        <StyledImageCircle size="large" imgSrc={imgsrc} />
      </div>
      <div className={!where ? css(styles.subscriptionSub) : css(styles.subscriptionSub1)}>
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
            <StyledButtonSimpleFluid value={buttonValue} buttonOnClick={buttonOnClick} />
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

export const StyledCardSavedQcasts = (props) => {
    const { imgSrc, txtTitle, buttonValue, buttonOnClick } = props;

    return (
        <div className={css(styles.containerSubscription)}>
            <div className={css(styles.imgSubscription)}>
                <StyledImageCircle size="large" imgSrc={imgSrc} />
            </div>
            <div className={css(styles.subscriptionSub)}>
                <p className={css(styles.txtSubscriptionTitleFirst)}>{txtTitle}</p>
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

export const StyledCardResponses = (props) => {
    const { imgSrc, txtContent, txtTitle, buttonValue, buttonOnClick } = props;

    return (
        <div className={css(styles.containerSubscription)}>
            <div className={css(styles.imgSubscription)}>
                <StyledImageCircle size="large" imgSrc={imgSrc} />
            </div>
            <div className={css(styles.subscriptionSub)}>
                <p className={css(styles.txtFeatureContent)}>{txtContent}</p>
                <p className={css(styles.txtSubscriptionTitleFirst)}>{txtTitle}</p>
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

export const StyledCardSavedQcast = (props) => {
    const { imgSrc, txtContent, txtTitle, buttonValue, buttonOnClick } = props;
    return (
        <div className={css(styles.containerSavedQcasts)}>
            <div className={css(styles.imgSaved)}>
                <StyledImageCircle imgSrc={imgSrc} />
            </div>
            <div className={css(styles.respondText)}>
                <p className={css(styles.txtPopularContent)}>{txtContent}</p>
                <p className={css(styles.txtPopularTitle)}>{txtTitle}</p>
            </div>
            <div className={css(styles.subscriptionBtn)}>
                <StyledButtonSimpleFluid value={buttonValue} buttonOnClick={buttonOnClick} />
            </div>
        </div>
    )
};

export const StyledCardMyFavourites = (props) => {
    const { imgSrc, txtContent, txtTitle } = props;
    return (
        <div className={css(styles.containerSavedQcasts)}>
            <div className={css(styles.imgSaved)}>
                <StyledImageCircle imgSrc={imgSrc} />
            </div>
            <div className={css(styles.respondText)}>
                <p className={css(styles.txtSavedQcastContent)}>{txtContent}</p>
                <p className={css(styles.txtSavedQcastTitle)}>{txtTitle}</p>
            </div>
        </div>
    )
};

export const StyledCardMySaved = (props) => {
    const { imgSrc, txtContent, txtTitle, buttonValue, buttonOnClick } = props;
    return (
        <div className={css(styles.containerSavedQcasts)}>
            <div className={css(styles.imgSaved)}>
                <StyledImageCircle imgSrc={imgSrc} />
            </div>
            <div className={css(styles.respondQcastBtn)}>
                <p className={css(styles.txtSavedQcastContent)}>{txtContent}</p>
                <p className={css(styles.txtSavedQcastTitle)}>{txtTitle}</p>
                <div className={css(styles.loadBtn)}>
                    <StyledButtonSimpleFluid value={buttonValue} buttonOnClick={buttonOnClick} />
                </div>
            </div>
        </div>
    )
};

export const StyledCardCreatePlaylist = (props) => {
    const { imgSrc, qcaster, title1, title2, title3, title4, title5, title6, topic, title, questions, length } = props;

    return (
        <div className={css(styles.containerPlaylist)}>
            <div className={css(styles.imgPlayPlaylist)}>
                <p className={css(styles.smallTitleMain)}>{title1}</p>
                <StyledImageCirclePlaylist imgSrc={imgSrc}/>
            </div>
            <div>
                <p className={css(styles.titleCreatePlaylist)}>{title}</p>
            </div>
            <div className={css(styles.pl15)}>
                <p className={css(styles.smallTitles)}>{title2}</p>
                <p className={css(styles.qcasterCreatePlaylist)}>{qcaster}</p>
            </div>
            <div className={css(styles.pl15)}>
                <p className={css(styles.smallTitles)}>{title3}</p>
                <p className={css(styles.qcasterCreatePlaylist)}>{topic}</p>
            </div>
            <div className={css(styles.pl15)}>
                <p className={css(styles.smallTitles)}>{title4}</p>
                <p className={css(styles.titleNumber)}>{questions}</p>
            </div>
            <div className={css(styles.pl15)}>
                <p className={css(styles.smallTitles)}>{title5}</p>
                <p className={css(styles.titleNumber)}>{length}</p>
            </div>
            <div className={css(styles.ml100)}>
                <p className={css(styles.smallTitles1)}>{title6}</p>
                <div className={css(styles.addPlaylist)}>
                <img
                    src={img_add_svg}
                    alt=""
                />
            </div>
            </div>
        </div>
    )
};

export const StyledCardAllResponses = (props) => {
    const { imgSrc, imgSmall, txtContent, txtTitle, buttonValue, buttonOnClick } = props;
    return (
        <div className={css(styles.containerSavedQcasts)}>
                <div className={css(styles.imgSaved)}>
                    <StyledImageCircle imgSrc={imgSrc} />
                </div>
                <div className={css(styles.imgResponseSmall)}>
                    <StyledImageCircleSmall imgSrc={imgSmall} />
                </div>
            <div className={css(styles.respondQcastBtn)}>
                <p className={css(styles.txtSavedQcastContent)}>{txtContent}</p>
                <p className={css(styles.txtSavedQcastTitle)}>{txtTitle}</p>
                <div className={css(styles.loadBtn)}>
                    <StyledButtonSimpleFluid value={buttonValue} buttonOnClick={buttonOnClick} />
                </div>
            </div>
        </div>
    )
};

export const StyledCardResponsesResponder = (props) => {
    const { imgSrc, imgSmall, txtContent, txtTitle, buttonValue, buttonOnClick } = props;
    return (
        <div className={css(styles.containerSavedQcasts)}>
            <div style={{ marginLeft: 30 }}>
                <div className={css(styles.imgSaved)}>
                    <StyledImageCircle imgSrc={imgSrc} />
                </div>
                <div className={css(styles.imgResponseSmall)}>
                    <StyledImageCircleSmall imgSrc={imgSmall} />
                </div>
            </div>
            <div className={css(styles.respondQcastBtn)}>
                <p className={css(styles.txtSavedResposesContent)}>{txtContent}</p>
                <p className={css(styles.txtSavedQcastTitle)}>{txtTitle}</p>
                <div className={css(styles.loadBtn)}>
                    <StyledButtonSimpleFluid value={buttonValue} buttonOnClick={buttonOnClick} />
                </div>
            </div>
        </div>
    )
};

export const StyledResponsedResp = (props) => {
    const { imgSrc, txtContent, txtTitle, viewCount, txtSubTitle, txtSubContent } = props;
    return (
        <div className={css(styles.containerRespLarge)}>
            <div className={css(styles.imgRespLarge)}>
                <StyledImageCircle size="small" imgSrc={imgSrc} />
            </div>
            <div className={css(styles.popularSub)}>
                <p className={css(styles.txtRespContent)}>{txtContent}</p>
                <p className={css(styles.txtRespTitleLarge)}>{txtTitle}</p>

                <div className={css(styles.icons)}>
                    <div className={css(styles.respImg1)}>
                        <img
                            src={img_msg}
                            alt=""
                            className={css(styles.img_30)}
                        />
                        <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount[0]}</p>
                    </div>
                    <div className={css(styles.respImg2)}>
                        <img
                            src={img_eye_open}
                            alt=""
                            className={css(styles.img_30)}
                        />
                        <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount[1]}</p>
                    </div>
                    <div className={css(styles.respImg3)}>
                        <img
                            src={img_view}
                            alt=""
                            className={css(styles.img_30)}
                        />
                        <p className={css(styles.txtSubscriptionContentIcon)}>{viewCount[2]}</p>
                    </div>
                </div>

                <div className={css(styles.subscriptionQue)}>
                    <p className={css(styles.txtRespTitleSecond)}>{txtSubTitle}</p>
                    <img
                        src={img_camera}
                        alt=""
                        className={css(styles.img_camera_resp)}
                    />
                    <p className={css(styles.txtRespCamera)}>{txtSubContent}</p>
                </div>
            </div>
        </div>
    )
};
