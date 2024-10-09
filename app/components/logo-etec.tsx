import { Typography } from "@mui/material";

export const LogoETEC = () => {
  return (
    <Typography
      component={"h1"}
      style={{
        textTransform: "uppercase",
        textAlign: "center",
      }}
    >
      <Typography
        component={"span"}
        style={{
          fontSize: "36px",
          fontStyle: "Roboto",
          fontWeight: 700,
          color: "#212529",
        }}
      >
        .uba
      </Typography>
      <Typography
        component={"span"}
        style={{
          fontSize: "36px",
          fontStyle: "Roboto Condensed",
          color: "#0077B6",
        }}
      >
        etec
      </Typography>
    </Typography>
  );
};
