import { Alert } from "@mui/material";
import { InfoAboutState, State } from "../hooks/useStatus";

const FeedbackAtErrorRegister = ({ info }: { info: InfoAboutState }) => {
  const hasAProblem = info.state === State.Error;
  const problem = info.message ?? "Ups! Algo no salio bien";
  return hasAProblem && <Alert severity="error">{problem}</Alert>;
};

export default FeedbackAtErrorRegister;
