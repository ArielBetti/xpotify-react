import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

// icons
import { MdMenu, MdMenuOpen, MdExitToApp } from "react-icons/md";

// recoil: atoms
import { atomUser } from "../../store/atoms";

// atoms: components
import * as Atom from "./style";

// typography
import * as Typography from "../../Typography";

// ::
const HamburguerMenu = ({ menuToggle, setMenuToggle }) => {
  const theme = useTheme();
  const navigateTo = useNavigate();

  // recoil: states
  const user = useRecoilValue(atomUser);

  return (
    <>
      <Atom.HamburguerMenuToggle onClick={() => setMenuToggle(!menuToggle)}>
        {menuToggle ? (
          <MdMenuOpen color={theme?.colors?.text.inverse} size="20px" />
        ) : (
          <MdMenu color={theme?.colors?.text.inverse} size="20px" />
        )}
      </Atom.HamburguerMenuToggle>
      <Atom.HamburguerMenuCollapse hasOpen={menuToggle}>
        <Atom.HamburguerUserSection>
          <Atom.UserProfilePic src={user?.images[0]?.url} alt="" />
          <Atom.UserDropDownUserName>
            {user?.display_name}
          </Atom.UserDropDownUserName>
        </Atom.HamburguerUserSection>
        <Atom.HamburguerMenuItem onClick={() => navigateTo("/sair")}>
          <MdExitToApp size="15px" color={theme?.colors?.contrast} />
          <Typography.Paragraph>Sair</Typography.Paragraph>
        </Atom.HamburguerMenuItem>
      </Atom.HamburguerMenuCollapse>
    </>
  );
};

export default memo(HamburguerMenu);
