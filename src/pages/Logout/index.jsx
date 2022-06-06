import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";

// recoil: atoms
import { atomRefreshToken, atomToken, atomUser } from "../../store/atoms";

// components
import Loader from "../../components/Loader";

// ::
const Logout = () => {
  const navigateTo = useNavigate();

  // recoil: states
  const resetUser = useResetRecoilState(atomUser);
  const resetToken = useResetRecoilState(atomToken);
  const resetRefreshToken = useResetRecoilState(atomRefreshToken);

  // logout function
  const logoutSection = () => {
    resetUser();
    resetToken();
    resetRefreshToken();

    navigateTo("/");
  };

  useEffect(() => {
    logoutSection();
  }, []);

  return <Loader disclaimer="Saindo..." />;
};

export default Logout;
