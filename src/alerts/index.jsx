import { useRecoilValue } from "recoil";
import styled, { useTheme } from "styled-components";

// recoil: atoms
import { atomUser } from "../store/atoms";

// typography
import { Paragraph } from "../Typography";

// icons
import { MdNotificationImportant } from "react-icons/md";

// atoms: components
const AlertExternalLink = styled.a`
  color: ${(props) => props?.theme?.colors?.contrast};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

const UserNotEnabledContent = () => {
  const user = useRecoilValue(atomUser);

  return (
    <>
      <Paragraph>
        Olá {user?.display_name} Parece que você não possui a assinatura premium
        do spotify, infelizmente para ouvir as músicas pelo serviço de payback é
        necessário uma assinatura premium 😔.
      </Paragraph>
      <br />
      <Paragraph>
        Caso queira começar uma assinatura no spotify clique{" "}
        <AlertExternalLink
          target="_blank"
          href="https://www.spotify.com/br/premium/"
        >
          aqui
        </AlertExternalLink>
        .
      </Paragraph>
    </>
  );
};

const UserNotEnabledTitle = () => {
  const theme = useTheme();

  return (
    <>
      <MdNotificationImportant size="30px" color={theme?.colors?.contrast} />
      Ops...
    </>
  );
};

export const userNotEnabled = {
  title: <UserNotEnabledTitle />,
  content: <UserNotEnabledContent />,
};
