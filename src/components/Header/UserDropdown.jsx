import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";
import { useTheme } from "styled-components";

// icons
import { MdArrowDropDown, MdLogout } from "react-icons/md";

// typography
import * as Typography from "../../Typography/index";

// atoms
import * as Atom from "./style";
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
        <Atom.UserProfilePic src={user?.images[0]?.url} alt="" />
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
