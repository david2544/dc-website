/* eslint-disable quotes */
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Map, TileLayer } from 'react-leaflet';
import arrow from '@images/arrow_44.svg';
import secondArrow from '@images/arrow_20.svg';
import github from '@images/icons8-github.svg';
import linkedin from '@images/icons8-linkedin.svg';
import xing from '@images/icons8-xing.svg';
import me from '@images/me.jpg';
import Card from '@common/Card';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  // TODO, make the breaths taken thingy real
  const [displayArrow, setDisplayArrow] = useState(false);
  const [displaySecondArrow, setDisplaySecondArrow] = useState(false);
  const [displayMainContent, setdisplayMainContent] = useState(false);
  const [displayMe, setDisplayMe] = useState(false);

  return (
    <div className={`${styles.home} container`}>
      <div className={styles.socialMedia}>
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
        <img src={xing} alt="xing" />
      </div>
      <div className={styles.textArea}>
        <div className={styles.text}>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .changeDelay(70)
                .typeString('<h1>Hi!</h1>')
                .pauseFor(500)
                .typeString("  <h1> I'm David</h1>")
                .pauseFor(500)
                .callFunction(() => {
                  setDisplayArrow(true);
                })
                .pauseFor(200)
                .callFunction(() => {
                  setDisplayMe(true);
                })
                .typeString('<h2><br /><br /><br /></h2>')
                .typeString(`So far, I took around 219404720 bre`)
                .deleteChars(5)
                .typeString('1 brea')
                .pauseFor(300)
                .deleteChars(6)
                .typeString('2 bre')
                .pauseFor(400)
                .deleteChars(5)
                .typeString('3 breath')
                .pauseFor(100)
                .deleteChars(8)
                .typeString('4 ')
                .changeDelay(30)
                .typeString('(you get the idea)')
                .changeDelay(70)
                .typeString(' breaths.')
                .pauseFor(1000)
                .typeString(' Just in case you were wondering.')
                .pauseFor(500)
                .changeDeleteSpeed(10)
                .deleteChars(92)
                .typeString(
                  "While I haven't written as many lines of code as breaths I took so far,",
                )
                .pauseFor(300)
                .typeString(' one day,')
                .changeDeleteSpeed(100)
                .pauseFor(300)
                .typeString(" I'll reach that goa")
                .deleteChars(6)
                .typeString("e conclusion that's impossible and move on.")
                .pauseFor(500)
                .changeDeleteSpeed(1)
                .deleteChars(137)
                .typeString(
                  "In the meantime, I'm keeping myself busy with some fun projects. But enough chit-chat, check out below what I've been up to",
                )
                .pauseFor(500)
                .callFunction(() => {
                  setDisplaySecondArrow(true);
                  setdisplayMainContent(true);
                })
                .start();
            }}
            options={{}}
          />
        </div>
        {displayArrow && <img className={styles.arrow} alt="arrow" src={arrow} />}
        {displayMe && <img className={styles.me} alt="david" src={me} />}
        {displaySecondArrow && <img className={styles.secondArrow} alt="arrow" src={secondArrow} />}
      </div>
      {displayMainContent && (
        <div className={styles.mainContent}>
          <h1>Projects</h1>
          <Card
            heading="RR Companion"
            content="With the pandemic around, I started getting into bodyweight strength training - which can be done at home. I found a nice community on reddit who has tailored over the years a well documented workout routine. But after a couple of workouts, I realised that I was tracking my workout by using some online stopwatch and a google spread sheet, which is far from optimal. So I created a website that simplifies all this and shared it with the community"
          />
          <Card
            heading="Trail.me"
            content="A couple of years ago I got into hiking, and recently I realised I have done dozens of hikes, and I can barely remember anymore when and where some of them happened. Trail.me is a tool that helps me log all my trails, displays stats, maps and even pictures along the trail by using geo location."
          />
          <Card
            heading="Raisin Pension"
            content="The company introduced a new product which needed a fresh new web application. I started this greenfiled project and built a React web app fully customised for the company needs and later on integrated it with the main banking web app. Setup was done with a custom webpack configuration, CI/CD pipeline setup, over 95% unit and integration test coverage as well as documentation, maintanance and tracking."
          />
          <Card
            heading="Banking System React Migration"
            content="Worked together with three other frontend developers to migrate the entire banking system from JSP to React. I was responsible among many others, with migrating the Dashboard, Postbox and the product order flow pages."
          />
          <Card
            heading="UI lib"
            content="Developed new React components for the company UI librariy and raised the unit test coverage from 30% to 80%"
          />
          <Card
            heading="Art(E)motion"
            content="With the use of a Microsoft Kinect device, a canvas covered in spandex and a projector, we were able to captivate human input on the canvas and project live animation when the user interacted with the spandex material "
          />
          <div className={`row ${styles.aboutMe}`}>
            <div className="col-xs-12">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .changeDelay(100)
                    .typeString('<h1>Who</h1>')
                    .pauseFor(300)
                    .deleteChars(3)
                    .typeString('<h1>Where</h1>')
                    .pauseFor(300)
                    .deleteChars(5)
                    .typeString('<h1>What</h1>')
                    .pauseFor(300)
                    .deleteChars(4)
                    .start();
                }}
                options={{ loop: true }}
              />
              <h1>am I?</h1>
            </div>
            <div className={`col-xs-5 ${styles.aboutMeGeneral}`}>
              <div>
                I am a frontend dev, building web apps and websites with React for a few years now.
                Recently, I&#39;m leaning towards freelancing. Got any cool projects coming up? Hit
                me up
              </div>
              <div className={styles.downloadCv}>
                <strong>Wanna know more?</strong>{' '}
                <a href="https://google.com">David_Coroian_CV.pdf</a>
              </div>
              <div className={styles.socialMediaAboutMe}>
                <strong>Wanna get in touch?</strong>
                <img src={github} alt="github" />
                <img src={linkedin} alt="linkedin" />
                <img src={xing} alt="xing" />
              </div>
            </div>
            <div className={`col-xs-6 col-xs-offset-1 ${styles.locationBox}`}>
              <div className={styles.locationText}>
                Oh and about where I am, can&#39;t tell you for sure, but currently somewhere around
                here:
              </div>
              <Map center={[52.52, 13.4]} zoom={10} className={styles.map}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </Map>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
