// typography
import * as Typography from "../../Typography";

// atoms: components
import * as Atom from "./style";

const Hero = ({ title, image }) => {
  return (
    <Atom.HeroContainer>
      <Atom.HeroImg src={image} alt="Arte do artista/album" />
      <Atom.TitleWrapper>{title}</Atom.TitleWrapper>
    </Atom.HeroContainer>
  );
};

export default Hero;
