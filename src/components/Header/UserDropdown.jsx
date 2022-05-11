import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";

// typography
import * as Typography from "../../Typography/index";

// atoms
import * as Atom from "./style";

const UserDropdown = () => {
  // recoil: state
  const user = useRecoilValue(atomUser);

  return (
    <Atom.UserDropDownContainer>
      <Atom.UserProfilePic src={user?.images[0]?.url} alt="" />
      <Typography.Paragraph>
        {user?.display_name}
      </Typography.Paragraph>
    </Atom.UserDropDownContainer>
  );
};

export default UserDropdown;
