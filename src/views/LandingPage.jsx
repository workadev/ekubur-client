import SectionJoin from "../components/SectionJoin";
import SectionBanner from "../components/SectionBanner";
import SectionFamilyCare from "../components/SectionFamilyCare";
import SectionJourney from "../components/SectionJourney";

function LandingPage() {
  return (
    <div>
      <SectionBanner />
      <SectionFamilyCare />
      <SectionJourney />
      <SectionJoin />
    </div>
  );
}

export default LandingPage;