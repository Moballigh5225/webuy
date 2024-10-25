interface Props {
  title: string;
  description: string;
}

const About = (props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default About;
