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
}) => {
  return (
    <Atom.CardContainer
      onClick={actionClick}
      hasAction={actionClick}
      marginGap={marginGap}
    >
      <Atom.CardImageContainer>
        <Atom.CardImage src={image} alt={ariaLabel} />
      </Atom.CardImageContainer>
      <Atom.TextsContainer>
        <Typography.ParagraphBold>{title}</Typography.ParagraphBold>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Atom.TextsContainer>
    </Atom.CardContainer>
  );
};

export default Card;
