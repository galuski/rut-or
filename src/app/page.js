import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
  const query = '*[_type == "homepage"][0]';
  return client.fetch(query, {}, { cache: "no-store" });
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
        videoSrc={
          homepageData?.videoSectionUrl?.asset
            ? buildFileUrl(homepageData.videoSectionUrl.asset, {
                projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
                dataset: "production",
              })
            : null
        }
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
