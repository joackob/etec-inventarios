import { Alert } from "@mui/material";

const FeedbackAtErrorRegister = ({ error }: { error: string | null }) => {
  return error && <Alert severity="error">{error}</Alert>;
};

export default FeedbackAtErrorRegister;
