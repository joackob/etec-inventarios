import { LinearProgress } from "@mui/material";
import { ProcessStatus, Status } from "../../hooks/useProcessStatus";

const SignUpProcessProgress = ({
  status: { status },
}: {
  status: ProcessStatus;
}) => {
  const isLoading = status === Status.Loading;
  return isLoading && <LinearProgress />;
};

export default SignUpProcessProgress;
