import { LinearProgress } from "@mui/material";
import { InfoAboutState, State } from "../hooks/useStatus";

const FeedbackAtLoadRegister = ({ info }: { info: InfoAboutState }) => {
  const isLoading = info.state === State.Loading;
  return isLoading && <LinearProgress />;
};

export default FeedbackAtLoadRegister;
