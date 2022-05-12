// atoms: components
import * as Atom from "./style";

// typography
import * as Typography from "../../Typography";

const Card = ({
  actionClick,
  image,
  title,
  description,
  ariaLabel,
  marginGap,
  type,
}) => {
  return (
    <Atom.CardContainer
      onClick={actionClick}
      hasAction={actionClick}
      marginGap={marginGap}
    >
      <Atom.CardImageContainer>
        <Atom.CardImage type={type || "artist"} src={image} alt={ariaLabel} />
      </Atom.CardImageContainer>
      <Atom.TextsContainer>
        <Atom.CardTitle>{title}</Atom.CardTitle>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Atom.TextsContainer>
    </Atom.CardContainer>
  );
};

export default Card;
