import { Card } from 'flowbite-react';

const PersonalInfo = ({
  birthDate,
  address,
  contact,
}: {
  birthDate: string;
  address: string;
  contact: string;
}) => {
  const dateOfBirth = new Date(birthDate);
  const age = new Date().getFullYear() - dateOfBirth.getFullYear();

  return (
    <Card className="mt-6 bg-slate-800 rounded-xl">
      <h2 className="text-xl font-bold tracking-tight md:text-2xl">
        Personal Information
      </h2>
      <hr />
      <p className="flex justify-between">
        <b>Date of Birth:</b> {dateOfBirth.toLocaleDateString('hr-HR')}
      </p>
      <p className="flex justify-between">
        <b>Age:</b> {age}
      </p>
      <p className="flex justify-between">
        <b>Address:</b> {address}
      </p>
      <p className="flex justify-between">
        <b>Contact:</b> {contact}
      </p>
    </Card>
  );
};

export default PersonalInfo;
