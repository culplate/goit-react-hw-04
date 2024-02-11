import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="#2a2c72"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={css.spin}
    />
  );
};
