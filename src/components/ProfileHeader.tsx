const ProfileHeader = ({
  name,
  avatarUrl,
}: {
  name: string;
  avatarUrl: string;
}) => {
  return (
    <>
      <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
        {name}
      </h1>
      <img
        className="w-40 h-40 rounded-full border-solid border-4 border-slate-800 mx-auto"
        src={avatarUrl}
        alt="profile"
      />
    </>
  );
};

export default ProfileHeader;
