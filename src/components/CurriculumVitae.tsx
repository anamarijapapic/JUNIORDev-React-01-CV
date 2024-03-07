import ProfileHeader from './ProfileHeader';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

function CurriculumVitae() {
  return (
    <>
      <ProfileHeader
        name="Anamarija Papić"
        avatarUrl="https://avatars.githubusercontent.com/u/92815435?v=4"
      />
      <PersonalInfo
        birthDate="2001-01-09"
        address="PICS@FESB, Split"
        contact="+385 91 123 4567"
      />
      <Skills html={100} css={90} js={80} />
    </>
  );
}

export default CurriculumVitae;
