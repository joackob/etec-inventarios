import { Alert } from "@mui/material";
import { InfoAboutStatus, Status } from "../hooks/useStatus";

const FeedbackAtErrorRegister = ({ info }: { info: InfoAboutStatus }) => {
  const hasAProblem = info.status === Status.Error;
  const problem = info.information;
  return hasAProblem && <Alert severity="error">{problem}</Alert>;
};

export default FeedbackAtErrorRegister;
