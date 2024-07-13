import { Alert } from "@mui/material";
import { InfoStatus, Status } from "../hooks/useStatus";

const FeedbackAtErrorRegister = ({ info }: { info: InfoStatus }) => {
  const hasAProblem = info.status === Status.Error;
  const problem = info.message ?? "Ups! Algo no salio bien";
  return hasAProblem && <Alert severity="error">{problem}</Alert>;
};

export default FeedbackAtErrorRegister;
