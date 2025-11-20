import SectionJoin from "../components/SectionJoin";
import SectionBanner from "../components/SectionBanner";
import SectionFamilyCare from "../components/SectionFamilyCare";
import SectionJourney from "../components/SectionJourney";
import SectionTestimoni from "../components/SectionTestimoni";
import SectionWorks from "../components/SectionWorks";
import SectionPackage from "../components/SectionPackage";
import SectionGuides from "../components/SectionGuides";

function LandingPage() {
  return (
    <div>
      <SectionBanner />
      <SectionFamilyCare />
      <SectionJourney />
      <SectionWorks />
      <SectionPackage />
      <SectionGuides />
      <SectionTestimoni />
      <SectionJoin />
    </div>
  );
}

export default LandingPage;