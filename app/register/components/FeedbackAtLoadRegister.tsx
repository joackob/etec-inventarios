import { LinearProgress } from "@mui/material";

const FeedbackAtLoadRegister = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading && <LinearProgress />;
};

export default FeedbackAtLoadRegister;
