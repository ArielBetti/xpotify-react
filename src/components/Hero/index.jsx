// typography
import Logo from "../../assets/Logo";
import * as Typography from "../../Typography";

// atoms: components
import * as Atom from "./style";

const Hero = ({ title, image }) => {
  return (
    <Atom.HeroContainer>
      {image ? (
        <Atom.HeroImg src={image} alt="Arte do artista/album" />
      ) : (
        <Logo size="200px" />
      )}
      <Atom.TitleWrapper>{title}</Atom.TitleWrapper>
    </Atom.HeroContainer>
  );
};

export default Hero;
