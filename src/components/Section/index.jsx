// typography
import * as Typography from "../../Typography";

// atoms: components
import * as Atom from "./style";

const Section = ({ children, title }) => {
  return (
    <Atom.ContainerWrapper>
      <Typography.ParagraphLarge>{title}</Typography.ParagraphLarge>
      <Atom.Container>{children}</Atom.Container>
    </Atom.ContainerWrapper>
  );
};

export default Section;
