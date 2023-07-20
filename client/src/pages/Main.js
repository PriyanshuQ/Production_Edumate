import { Box, styled, MenuItem, MenuList, Grid } from "@mui/material";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProgramCore from "./ProgramCore";
import ProrgamElective from "./ProrgamElective";
import OpenElective from "./OpenElective";
import NaturalScience from "./NaturalScience";
const Container = styled(Box)`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const Left = styled(Box)`
  background: #884a39;
  color: #f9e0bb;
  flex: 1;
  padding: 10px 10px;
`;
const Right = styled(Grid)`
  background: #C38154;
  color: #e55807;
  flex: 4;
  padding: 10px 10px;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
`;
const RightGrid = styled(Grid)`
  background: #C38154;
  color: #e55807;
  flex: 4;
  padding: 10px 10px;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
`;

const Ml = styled(MenuList)``;

const Mi = styled(MenuItem)`
  font-weight: 700;
  margin-bottom: 30px;
`;

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Left>
          <Ml>
            <Link
              to={"/programcore"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Mi>Program Core</Mi>
            </Link>
            <Link
              to={"/prorgamelective"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Mi>Program Elective</Mi>
            </Link>
            <Link
              to={"/naturalscience"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Mi>Natural Science, Humanities and Management</Mi>
            </Link>
            <Link
              to={"/openelective"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Mi>Open Elective</Mi>
            </Link>
            <div
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <Link
                to={"/logout"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Mi>Log Out</Mi>
              </Link>
            </div>
          </Ml>
        </Left>
        <Right>
          <Grid item lg={6} md={6} xs={12}>
            <Routes>
              <Route path="/programcore" element={<ProgramCore />} />
              <Route path="/prorgamelective" element={<ProrgamElective />} />
              <Route path="/naturalscience" element={<NaturalScience />} />
              <Route path="/openelective" element={<OpenElective />} />
            </Routes>
          </Grid>
        </Right>
      </Container>
    </>
  );
};

export default Main;
