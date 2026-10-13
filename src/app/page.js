import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { buildFileUrl } from '@sanity/asset-utils';

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Audience from "../components/Audience/Audience";
import { Header } from "@/components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import ContactArea from "@/components/ContactArea/ContactArea";
import Upcoming from "@/components/Upcoming/Upcoming";
import { WhatsApp } from "@/components/WhatsApp/WhatsApp";
import VideoSec from "@/components/VideosSec/VideoSec";

// פונקציה למשיכת הנתונים מהמסד של Sanity
async function getHomepageData() {
  // אנחנו מבקשים את כל הנתונים (...), וגם מחלצים ישירות את ה-URL של הוידאו
  const query = `*[_type == "homepage"][0]{
    ...,
    "videoUrl": videoSectionUrl.asset->url
  }`;
  return client.fetch(query, {}, { cache: "force-cache" });
}

// שים לב שהוספנו async לפונקציה כדי שנוכל להמתין לנתונים
export default async function Home() {
  // קריאה לפונקציה ושמירת הנתונים במשתנה
  const homepageData = await getHomepageData();

  return (
    <main>
      <Header />
      <Hero
        title={homepageData?.mainTitle}
        image={
          homepageData?.heroImage ? urlFor(homepageData.heroImage).url() : null
        }
      />
      <About text={homepageData?.aboutText} />
      <AboutMe />
      <Experience />
      <Audience />
<VideoSec
        imageSrc={
          homepageData?.videoSectionImage
            ? urlFor(homepageData.videoSectionImage).url()
            : null
        }
        videoSrc={homepageData?.videoUrl ? homepageData.videoUrl : null}
      />
      <Upcoming
        location={homepageData?.sessionLocation}
        date={homepageData?.sessionDate}
        time={homepageData?.sessionTime}
        price={homepageData?.sessionPrice}
        paymentLink={homepageData?.sessionPaymentLink}
      />{" "}
      <ContactArea />
      <WhatsApp />
    </main>
  );
}
