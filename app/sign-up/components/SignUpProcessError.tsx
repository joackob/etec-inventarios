import { Alert } from "@mui/material";
import { ProcessStatus, Status } from "../../hooks/useProcessStatus";

const SignUpProcessError = ({
  status: { status, information: problem },
}: {
  status: ProcessStatus;
}) => {
  const hasAProblem = status === Status.Error;
  return hasAProblem && <Alert severity="error">{problem}</Alert>;
};

export default SignUpProcessError;
