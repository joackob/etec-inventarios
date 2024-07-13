import { LinearProgress } from "@mui/material";
import { InfoAboutStatus, Status } from "../hooks/useStatus";

const FeedbackAtLoadRegister = ({ info }: { info: InfoAboutStatus }) => {
  const isLoading = info.status === Status.Loading;
  return isLoading && <LinearProgress />;
};

export default FeedbackAtLoadRegister;
