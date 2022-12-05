import styled from "styled-components";
import { Hero } from "./Hero/Hero";
import { Section } from "./Section";
import { Footer } from "./Footer";
import img1 from "../assets/01.png";
import img2 from "../assets/02.png";
import img3 from "../assets/03.png";

const AppWrapper = styled.div`
  max-width: 100%;
  height: max-content;
  margin: 0 auto;
  background: #0b1d26;
`;

function App() {
  return (
    <AppWrapper>
      <Hero />
      <Section
        id="first"
        count="01"
        subTitle="GEt Started"
        title="What level of hiker are&nbsp;you?"
        imgPath={img1}
        padding={true}
      >
        Determining what level of&nbsp;hiker you are can
        be&nbsp;an&nbsp;important tool when planning future hikes. This hiking
        level guide will help you plan hikes according to&nbsp;different hike
        ratings set by&nbsp;various websites like All Trails and Modern Hiker.
        What type of&nbsp;hiker are you&nbsp;&mdash; novice, moderate, advanced
        moderate, expert, or&nbsp;expert backpacker?
      </Section>
      <Section
        id="second"
        count="02"
        turn={true}
        subTitle="Hiking Essentials"
        title="Picking the right Hiking&nbsp;Gear!"
        imgPath={img2}
        padding={true}
      >
        The nice thing about beginning hiking is&nbsp;that you don&rsquo;t
        really need any special gear, you can probably get away with things you
        already have. Let&rsquo;s start with clothing. A&nbsp;typical mistake
        hiking beginners make is&nbsp;wearing jeans and regular clothes, which
        will get heavy and chafe wif they get sweaty or&nbsp;wet.
      </Section>
      <Section
        id="third"
        count="03"
        subTitle="where you go is the key"
        title="Understand Your Map&nbsp;&&nbsp;Timing"
        imgPath={img3}
      >
        To&nbsp;start, print out the hiking guide and map. If&nbsp;it&rsquo;s
        raining, throw them in&nbsp;a&nbsp;Zip-Lock bag. Read over the guide,
        study the map, and have a&nbsp;good idea of&nbsp;what to&nbsp;expect.
        I&nbsp;like to&nbsp;know what my&nbsp;next landmark
        is&nbsp;as&nbsp;I&nbsp;hike. For example, I&rsquo;ll read the guide and
        know that say, in&nbsp;a&nbsp;mile, I&nbsp;make a&nbsp;right turn
        at&nbsp;the junction..
      </Section>

      <Footer></Footer>
    </AppWrapper>
  );
}

export default App;
