import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "./providers/useLoginUserProvider";

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
