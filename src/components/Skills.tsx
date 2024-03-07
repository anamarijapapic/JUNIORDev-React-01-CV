import { Card, Progress } from 'flowbite-react';

const Skills = ({
  html,
  css,
  js,
}: {
  html: number;
  css: number;
  js: number;
}) => {
  return (
    <Card className="mt-6 bg-slate-800 rounded-xl">
      <h2 className="text-xl font-bold tracking-tight md:text-2xl">Skills</h2>
      <hr />
      <Progress
        progress={html}
        progressLabelPosition="inside"
        textLabel="HTML"
        textLabelPosition="outside"
        size="lg"
        labelProgress
        labelText
      />
      <Progress
        progress={css}
        progressLabelPosition="inside"
        textLabel="CSS"
        textLabelPosition="outside"
        size="lg"
        labelProgress
        labelText
      />
      <Progress
        progress={js}
        progressLabelPosition="inside"
        textLabel="JavaScript"
        textLabelPosition="outside"
        size="lg"
        labelProgress
        labelText
      />
    </Card>
  );
};

export default Skills;
