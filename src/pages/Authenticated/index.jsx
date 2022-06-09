import { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

// recoil: selectors
import { selectorGetUser } from "../../store/selectors";
import { atomToken, atomUser, atomRefreshToken } from "../../store/atoms";

// components
import Loader from "../../components/Loader";

// utils
import { tokenRemain } from "../../utils/tokenRemain";

// ::
const Authenticated = () => {
  // * Persiste o token na aplicação
  tokenRemain();

  const navigate = useNavigate();

  // recoil: state
  const setToken = useSetRecoilState(atomToken);
  const setUser = useSetRecoilState(atomUser);
  const setRefreshToken = useSetRecoilState(atomRefreshToken);

  useEffect(() => {
    setToken(`Bearer ${localStorage.getItem("access_token")}`);
    setRefreshToken(localStorage.getItem("refresh_token"));
  });

  // recoil: loadable
  const authLoadable = useRecoilValueLoadable(selectorGetUser);

  useEffect(() => {
    if (authLoadable.state === "hasValue") {
      setUser(authLoadable.contents);
      navigate("/home");
    }
  }, [authLoadable.state]);

  return <Loader />;
};

export default memo(Authenticated);
