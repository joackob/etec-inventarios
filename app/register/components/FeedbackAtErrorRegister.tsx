import { Alert } from "@mui/material";

const FeedbackAtErrorRegister = ({
  problem,
  hasAProblem,
}: {
  hasAProblem: boolean;
  problem: string;
}) => {
  return hasAProblem && <Alert severity="error">{problem}</Alert>;
};

export default FeedbackAtErrorRegister;
