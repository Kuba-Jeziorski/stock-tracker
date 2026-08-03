import { Box, Typography } from "@mui/material";
import { useState } from "react";
import companiesJSON from "./../../assets/data/sp500.json";

type Company = {
  symbol: string;
  name: string;
};

export const StockList = () => {
  const [data, setData] = useState<Company[]>(companiesJSON.companies);

  return (
    <Box sx={{ width: 1 / 5, border: 1, height: "100%" }}>
      <Typography>Stock list</Typography>
      {data.map((company) => (
        <p key={company.name}>{company.symbol}</p>
      ))}
    </Box>
  );
};
