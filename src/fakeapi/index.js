
import imgFeaturedSrc1 from "assets/images/avatar/featured/1.png";
import imgFeaturedSrc2 from "assets/images/avatar/featured/2.png";
import imgFeaturedSrc3 from "assets/images/avatar/featured/3.png";

import imgPopularSrc1 from "assets/images/avatar/mostpopular/1.png";
import imgPopularSrc2 from "assets/images/avatar/mostpopular/2.png";
import imgPopularSrc3 from "assets/images/avatar/mostpopular/3.png";
import imgPopularSrc4 from "assets/images/avatar/mostpopular/4.png";
import imgPopularSrc5 from "assets/images/avatar/mostpopular/5.png";

import imgSubscriptionSrc1 from "assets/images/avatar/subscription/1.png";
import imgSubscriptionSrc2 from "assets/images/avatar/subscription/2.png";
import imgSubscriptionSrc3 from "assets/images/avatar/subscription/3.png";
import imgSubscriptionSrc4 from "assets/images/avatar/subscription/4.png";

import imgSearchQcasters1 from "assets/images/avatar/search/qcasters1.png";
import imgSearchQcasts1 from "assets/images/avatar/search/qcasts1.png";
import ChanelBackGround from "assets/images/chanel/background.png";
import ChanelLogo from "assets/images/chanel/Jacub.png";
import ChanelLogoW from "assets/images/avatar/search/image.png"
import ChanelLogoB from "assets/images/avatar/search/qcastersBlack.png";

import one from "assets/images/chanel/1.png";
import two from "assets/images/chanel/2.png";
import three from "assets/images/chanel/3.png";
import five from 'assets/images/chanel/5.png'

import imgTopics1 from "assets/images/avatar/topics/1.png";
import imgTopics2 from "assets/images/avatar/topics/2.png";
import imgTopics3 from "assets/images/avatar/topics/3.png";
import imgTopics4 from "assets/images/avatar/topics/4.png";
import imgTopics5 from "assets/images/avatar/topics/5.png";
import imgTopics6 from "assets/images/avatar/topics/6.png";
import imgTopics7 from "assets/images/avatar/topics/7.png";
import imgTopics8 from "assets/images/avatar/topics/8.png";
import imgTopics9 from "assets/images/avatar/topics/9.png";
import imgTopics10 from "assets/images/avatar/topics/10.png";
import imgTopics11 from "assets/images/avatar/topics/11.png";
import imgTopics12 from "assets/images/avatar/topics/12.png";
import imgTopics13 from "assets/images/avatar/topics/13.png";
import imgTopics14 from "assets/images/avatar/topics/14.png";
import imgTopics15 from "assets/images/avatar/topics/15.png";
import imgTopics16 from "assets/images/avatar/topics/16.png";
import imgTopics17 from "assets/images/avatar/topics/17.png";
import imgTopics18 from "assets/images/avatar/topics/18.png";
import imgTopics19 from "assets/images/avatar/topics/19.png";
import imgTopics20 from "assets/images/avatar/topics/20.png";
import imgTopics21 from "assets/images/avatar/topics/21.png";
import imgTopics22 from "assets/images/avatar/topics/22.png";
import imgTopics23 from "assets/images/avatar/topics/23.png";

import imgQcastersProfileSrc1 from "assets/images/avatar/qcastersProfile/1.png";
import imgQcastersProfileBgSrc1 from "assets/images/background/qcastersProfile/1.png";
import imgQcastersProfileBgSrc2 from "assets/images/background/qcastersProfile/2.png";
export const dataFeatured = [
  {
    title: "Capital Questions",
    content: "What, when, how and why?",
    imgsrc: imgFeaturedSrc1,
  },
  {
    title: "Smooth Ladies",
    content: "Your relaxing music mix",
    imgsrc: imgFeaturedSrc2,
  },
  {
    title: "Moira Stuart",
    content: "Questions of Inspiration",
    imgsrc: imgFeaturedSrc3,
  },
  {
    title: "Smooth Ladies",
    content: "Your relaxing music mix",
    imgsrc: imgFeaturedSrc1,
  },
];

export const dataMostPopular = [
  {
    title: "Myleene Klass",
    content: "What does Classical music mean to you?",
    imgsrc: imgPopularSrc1,
  },
  {
    title: "Sir Trevor McDonald",
    content: "What is the real meaning of legacy?",
    imgsrc: imgPopularSrc2,
  },
  {
    title: "Polly James",
    content: "Tatoos; are they addictive?",
    imgsrc: imgPopularSrc3,
  },
  {
    title: "Tim Westwood",
    content: "How can we stop postcode wars?",
    imgsrc: imgPopularSrc4,
  },
  {
    title: "Tim Westwood",
    content: "How can we stop postcode wars?",
    imgsrc: imgPopularSrc5,
  },
]

export const dataSubscription = [
  {
    title: "Roman Kemp",
    content: "Questions for school leavers: WHAT’S NEXT?????",
    imgsrc: imgSubscriptionSrc1,
    viewCount: [24, 24, 24],
    subTitle: "Careers",
    subContent: "12 Questions",
  },
  {
    title: "Angie Greaves",
    content: "What’s the soundtrack to your life?",
    imgsrc: imgSubscriptionSrc2,
    viewCount: [24, 24, 24],
    subTitle: "Lifestyle",
    subContent: "12 Questions",
  },
  {
    title: "Charlotte Hawkins",
    content: "Questions for aspiring presenters: Why do you want to present?",
    imgsrc: imgSubscriptionSrc3,
    viewCount: [24, 24, 24],
    subTitle: "Aspirations",
    subContent: "12 Questions",
  },
  {
    title: "Charlotte Hawkins",
    content: "Questions for aspiring presenters: Why do you want to present?",
    imgsrc: imgSubscriptionSrc4,
    viewCount: [24, 24, 24],
    subTitle: "Aspirations",
    subContent: "12 Questions",
  },
]

export const dataMostPopularAll = Array(10).fill({
  imgsrc: imgPopularSrc1,
  title: "What does Classical music mean to you?",
  qcaster: "Myleene Klass ",
  topic: "Counselling",
  questions: 10,
  length: "9:46",
});

export const dataDiscoverSearchResults = {
  qcasters: [
    {
      imgsrc: ChanelLogo,
      title: "David Jacob",
      viewCount: {
        people: 24,
        find: 255,
        question: 24,
      },
    },
    {
      imgsrc: imgSearchQcasters1,
      title: "David Jacob",
      viewCount: {
        people: 24,
        find: 255,
        question: 24,
      },
    },
    {
      imgsrc: imgSearchQcasters1,
      title: "David Jacob",
      viewCount: {
        people: 24,
        find: 255,
        question: 24,
      },
    },
    {
      imgsrc: imgSearchQcasters1,
      title: "David Jacob",
      viewCount: {
        people: 24,
        find: 255,
        question: 24,
      },
    },
    {
      imgsrc: imgSearchQcasters1,
      title: "David Jacob",
      viewCount: {
        people: 24,
        find: 255,
        question: 24,
      },
    },
  ],
  qcasts: [
    {
      imgsrc: imgSearchQcasts1,
      title: "Roman Kemp",
      content: "Questions for school leavers: WHAT’S NEXT?????",
      viewCount: [24, 24, 24],
      subTitle: "Careers",
      subContent: "12 Questions",
    },
    {
      imgsrc: imgSearchQcasts1,
      title: "Roman Kemp",
      content: "Questions for school leavers: WHAT’S NEXT?????",
      viewCount: [24, 24, 24],
      subTitle: "Careers",
      subContent: "12 Questions",
    },
    {
      imgsrc: imgSearchQcasts1,
      title: "Roman Kemp",
      content: "Questions for school leavers: WHAT’S NEXT?????",
      viewCount: [24, 24, 24],
      subTitle: "Careers",
      subContent: "12 Questions",
    },
    {
      imgsrc: imgSearchQcasts1,
      title: "Roman Kemp",
      content: "Questions for school leavers: WHAT’S NEXT?????",
      viewCount: [24, 24, 24],
      subTitle: "Careers",
      subContent: "12 Questions",
    },
    {
      imgsrc: imgSearchQcasts1,
      title: "Roman Kemp",
      content: "Questions for school leavers: WHAT’S NEXT?????",
      viewCount: [24, 24, 24],
      subTitle: "Careers",
      subContent: "12 Questions",
    },
    {
      imgsrc: imgSearchQcasts1,
      title: "Roman Kemp",
      content: "Questions for school leavers: WHAT’S NEXT?????",
      viewCount: [24, 24, 24],
      subTitle: "Careers",
      subContent: "12 Questions",
    },
  ]
}


export const dataTopics = [
  {
    imgsrc: imgTopics1,
    title: "Medical (213)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics2,
    title: "Food (511)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics3,
    title: "Radio(878)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics4,
    title: "Leadership (111)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics5,
    title: "Faith (111)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics6,
    title: "Technology (9,909)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics7,
    title: "Counselling (5,512)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics8,
    title: "Podcasts (123)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics9,
    title: "Business (41,231)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics10,
    title: "Sport (888)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics11,
    title: "Art (213)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics12,
    title: "Mental Health (122)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics13,
    title: "Therapy (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics14,
    title: "Politics (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics15,
    title: "Film & TV (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics16,
    title: "Dating (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics17,
    title: "Finance (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics18,
    title: "Food (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics19,
    title: "Educaiton (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics20,
    title: "Music (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics21,
    title: "Science (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics22,
    title: "Books (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
  {
    imgsrc: imgTopics23,
    title: "Creativity (591)",
    content: "Questions about your nearest and dearest as well as tough questions about broken families.",
  },
]


export const dataQcastersFirst = Array(3).fill({
  imgsrc: imgSearchQcasts1,
  title: "Roman Kemp",
  content: "Questions for school leavers: WHAT’S NEXT?????",
  viewCount: [24, 24, 24],
  subTitle: "Careers",
  subContent: "12 Questions",
});
export const dataQcastersSecond = Array(10).fill({
  id: 123123,
  imgsrc: imgSubscriptionSrc1,
  title: "Roman Kemp",
  content: "Questions for school leavers: WHAT’S NEXT?????",
  subTitle: "Careers",
  subContent: "12 Questions",
  viewCount: {
    message: 24,
    view: 24,
    answer: 24,
  },
  profile: {
    title: "Wife + Mother of Four",
    content: "I’m from a big family and have begun my own, so have a lot of helpful tips to raising a big family well. Hope my questions help you find the answers you’re looking for.",
  },
});

export const dataQcastersThird = Array(20).fill({
  id: 123123,
  imgsrc: imgSubscriptionSrc1,
  title: "Roman Kemp",
  viewCount: {
    people: 4,
    find: 1,
    question: 101,
  },
})
//Chanel Pages
export const dataDavidQ = Array(8).fill({
  id: 123123,
  imgsrc: ChanelLogo,
  title: "101 Questions to ask yourself about being a good dad",
  viewCount: {
    people: 4,
    find: 1,
    question: 101,
  },
})
export const dataJessica = Array(12).fill({
  id: 123123,
  imgsrc: imgQcastersProfileSrc1,
  title: "Jessica Parker",
})
export const dataQcastersProfile = Array(10).fill({
  id: 123123,
  imgsrc: imgQcastersProfileSrc1,
  imgback: imgQcastersProfileBgSrc1,
  imgbackSilver:imgQcastersProfileBgSrc2,
  title: "Lisa Stuart",
  content: "Questions for school leavers: WHAT’S NEXT?????",
  subtitle: "Careers",
  subcontent: "12 Questions",
  profile: {
    title: "Wife + Mother of Four",
    content: "I’m from a big family and have begun my own, so have a lot of helpful tips to raising a big family well. Hope my questions help you find the answers you’re looking for.",
  },
  viewCount: {
    people: 4,
    find: 1,
    question: 101,
  },
})
export const dataQcastersProfileSecond = Array(10).fill({
  id: 123123,
  imgsrc: imgQcastersProfileSrc1,
  imgback: imgQcastersProfileBgSrc1,
  imgbackSilver:imgQcastersProfileBgSrc2,
  title: "Lisa Stuart",
  content: "Questions for school leavers: WHAT’S NEXT?????",
  subtitle: "Careers",
  subcontent: "12 Questions",
  profile: {
    title: "Wife + Mother of Four",
    content: "I’m from a big family and have begun my own, so have a lot of helpful tips to raising a big family well. Hope my questions help you find the answers you’re looking for.",
  },
  viewCount: {
    message: 24,
    view: 24,
    answer: 24,
  },
})
// For view qcast page
export const dataQcastersQcast = Array(12).fill({
  id: 123123,
  imgsrc: imgQcastersProfileSrc1,
  imgback: imgQcastersProfileBgSrc1,
  imgbackSilver:imgQcastersProfileBgSrc2,
  title: "Lisa Stuart",
  content: "12 Questions to ask yourself when raising more than one child",
  subtitle: "Family",
  subcontent: "12 Questions",
  profile: {
    title: "Wife + Mother of Four",
    content: "I’m from a big family and have begun my own, so have a lot of helpful tips to raising a big family well. Hope my questions help you find the answers you’re looking for. I’m from a big family and have begun my own, so have a lot of helpful tips.",
  },
  viewCount: {
    message: 24,
    view: 24,
    answer: 24,
  },
})
export const dataQcastsReview = Array(12).fill({
  id: 123123,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mattis ac accumsan mi vitae pellentesque amet, et. Vestibulum, leo semper augue in platea diam. ",
})



export const dataDavidJacob=[
{
  id: 123123,
  backGround: ChanelBackGround,
  logo:ChanelLogo,
  ChanelLogoW:ChanelLogoW,
  logoB:ChanelLogoB,
  name:"David Jacob",
  about:" Husband +Father of six",
  info:"I’m from a big family and have begun my own, so have a lot of helpful tips to raising a big family well. Hope my questions help you find the answers you’re looking for.",
  sub:4,
  Subscribers:'Subscribers',
  Qcast:'Qcast Series',
  Questions:"Questions",
  one:one,
  two:two,
  three:three,
  five:five,
  qcast:1,
  que:101,
  list:"101 Questions to ask yourself about being a good dad"
}
]