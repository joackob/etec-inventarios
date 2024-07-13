import { LinearProgress } from "@mui/material";
import { InfoStatus, Status } from "../hooks/useStatus";

const FeedbackAtLoadRegister = ({ info }: { info: InfoStatus }) => {
  const isLoading = info.status === Status.Loading;
  return isLoading && <LinearProgress />;
};

export default FeedbackAtLoadRegister;
