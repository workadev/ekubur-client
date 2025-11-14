import SectionJoin from "../components/SectionJoin";
import SectionBanner from "../components/SectionBanner";
import SectionFamilyCare from "../components/SectionFamilyCare";
import SectionJourney from "../components/SectionJourney";
import SectionTestimoni from "../components/SectionTestimoni";

function LandingPage() {
  return (
    <div>
      <SectionBanner />
      <SectionFamilyCare />
      <SectionJourney />
      <SectionTestimoni />
      <SectionJoin />
    </div>
  );
}

export default LandingPage;