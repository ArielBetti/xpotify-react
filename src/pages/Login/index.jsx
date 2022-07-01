import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

// recoil: atoms
import { atomUser } from "../../store/atoms";

// icons
import { MdLogin } from "react-icons/md";

// illustration
import { LoginIllustrationRender } from "../../assets/illustrations/loginIllustra";

// atoms: components
import * as Atom from "./style";

// typography
import * as Typography from "../../Typography";

// ::
const Login = () => {
  const navigateTo = useNavigate();

  const hasUser = useRecoilValue(atomUser);

  useEffect(() => {
    if (hasUser) navigateTo("/home");
  }, [hasUser, navigateTo]);

  return (
    <Atom.LoginContainer>
      <Atom.LoginButtonContainer>
        <Atom.LoginButton href={process.env.REACT_APP_LOGIN_REQUEST_URL}>
          <Typography.ParagraphLarge>
            <Atom.LoginButtonContainer>
              <MdLogin />
              Entrar
            </Atom.LoginButtonContainer>
          </Typography.ParagraphLarge>
        </Atom.LoginButton>
      </Atom.LoginButtonContainer>
      <LoginIllustrationRender />
      <Atom.LoginDisclaimerContainer>
        <Atom.LoginTitle>Bem vindo ao Xpotify!</Atom.LoginTitle>
        <Typography.Paragraph>
          Esse é um projeto desenvolvido para para explorar arquiteturas
          front-end integrando as APIs do spotify você pode ver o código dessa
          aplicação{" "}
          <Atom.LoginExternalLink
            target="_blank"
            href="https://github.com/ArielBetti/Xpotify-React"
          >
            aqui
          </Atom.LoginExternalLink>
          .
        </Typography.Paragraph>
        <Typography.Paragraph>
          Olá meu nome é Ariel Betti desenvolvedor desse projeto, se você gostou
          dessa aplicação considere dar apoio seguindo nas minhas redes:{" "}
          <Atom.LoginExternalLink
            target="_blank"
            href="https://github.com/ArielBetti"
          >
            GitHub
          </Atom.LoginExternalLink>
          ,{" "}
          <Atom.LoginExternalLink
            target="_blank"
            href="https://www.linkedin.com/in/ariel-betti/"
          >
            LinkdIn
          </Atom.LoginExternalLink>{" "}
          e{" "}
          <Atom.LoginExternalLink
            target="_blank"
            href="https://www.youtube.com/channel/UCXCyTeW1V33Ki4PyMLCn2zg"
          >
            Youtube
          </Atom.LoginExternalLink>
          .
        </Typography.Paragraph>
      </Atom.LoginDisclaimerContainer>
    </Atom.LoginContainer>
  );
};

export default Login;
