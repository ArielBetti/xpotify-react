import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";
import { useTheme } from "styled-components";

// icons
import { MdArrowDropDown, MdLogout } from "react-icons/md";
import Logo from "../../assets/Logo";

// typography
import * as Typography from "../../Typography/index";

// atoms: components
import * as Atom from "./style";

// hooks
import { useClickOutSideComponent } from "../../hooks/useClickOutSideComponent";

const UserDropdown = () => {
  const theme = useTheme();
  const dropdownRef = useRef(null);
  const navigateTo = useNavigate();

  // recoil: state
  const user = useRecoilValue(atomUser);

  // local: states
  const [toggleOpenDropdown, setToggleOpenDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleOpenDropdown(!toggleOpenDropdown);
  };

  const onClickOutside = () => {
    setToggleOpenDropdown(false);
  };

  useClickOutSideComponent(dropdownRef, onClickOutside);

  return (
    <Atom.UserDropDownAnchor>
      <Atom.UserDropDownContainer
        ref={dropdownRef}
        hasOpen={toggleOpenDropdown}
        onClick={() => handleToggleDropdown()}
      >
        {user?.images[0]?.url ? (
          <Atom.UserProfilePic
            effect="blur"
            src={user?.images[0]?.url}
            alt=""
          />
        ) : (
          <Logo />
        )}
        <Atom.UserDropDownUserName>
          {user?.display_name}
        </Atom.UserDropDownUserName>
        <MdArrowDropDown
          className="dropdown-arrow"
          size="20px"
          color={theme?.colors?.text?.contrast}
        />
        <Atom.UserDropDownCollapse
          className="dropdown-open"
          hasOpen={toggleOpenDropdown}
        >
          <Atom.UserDropDownItem onClick={() => navigateTo("/sair")}>
            <MdLogout size="15px" color={theme?.colors?.contrast} />
            <Typography.Paragraph>Sair</Typography.Paragraph>
          </Atom.UserDropDownItem>
        </Atom.UserDropDownCollapse>
      </Atom.UserDropDownContainer>
    </Atom.UserDropDownAnchor>
  );
};

export default UserDropdown;
