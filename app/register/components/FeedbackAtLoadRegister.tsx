import { LinearProgress } from "@mui/material";

const FeedbackAtLoadRegister = ({ isLoad }: { isLoad: boolean }) => {
  return isLoad && <LinearProgress />;
};

export default FeedbackAtLoadRegister;
