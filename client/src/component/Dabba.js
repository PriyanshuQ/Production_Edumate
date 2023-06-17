import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  styled,
} from "@mui/material";

const Boxstyle = styled(Card)`
  width: 315px;
  height: 225px;
  background: #ffffff;
  margin: auto;
  margin-bottom: 10px;
  objectfit: "fill";
`;

const CT = styled(Box)`
  height: 100px;
`;

const CTH = styled(Typography)`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const CD = styled(Typography)`
  font-size: 14px;
`;

const CA = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`

const Dabba = ({ data }) => {
  return (
    <>
      <Boxstyle variant="outlined">
        <CardContent>
          <CT>
            <CTH>Course Title : {data.name}</CTH>
          </CT>
          <Box>
            <CD>Course Code : {data.code}</CD>
            <CD>Course Credit : {data.credit}</CD>
          </Box>
        </CardContent>
        <CA>
          <Button size="small" variant="contained">
            <a href={data.syllabus_link} target="_blank" style={{color:"#ffffff" , textDecoration:"none"}}>
              Syllabus
            </a>
          </Button>
          <Button size="small" variant="contained">
            <a href={data.data_link} target="_blank" style={{color:"#ffffff" , textDecoration:"none"}}>
              Download
            </a>
          </Button>
        </CA>
      </Boxstyle>
    </>
  );
};

export default Dabba;
