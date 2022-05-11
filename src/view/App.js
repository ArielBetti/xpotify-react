import { memo } from "react";
import { RecoilRoot } from "recoil";
import Initialized from "./Initialized";

const App = () => (
  <RecoilRoot>
    <Initialized />
  </RecoilRoot>
);

export default memo(App);
