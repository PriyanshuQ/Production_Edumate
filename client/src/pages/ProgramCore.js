import { Box, Grid, styled } from "@mui/material";
import Dabba from "../component/Dabba";
import { useEffect, useState } from "react";
import axios from "axios";

const Right = styled(Grid)`
  background: #C38154;
  color: #e55807;
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled(Grid)`
  margin: auto;
  margin-bottom: 20px;
`;

const Program = () => {
  const [courses, setCourses] = useState([]);

  const getallcourse = async () => {
    try {
      let courses = await axios.get("/getcourses/?cate=programcore");
      setCourses(courses.data.courses);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getallcourse();
  }, []);

  return (
    <div>
      <Right>
        {courses !== [] ? (
          courses.map((data) => {
            return (
              <GridItem item lg={6} md={6} xs={12}>
                <Dabba data={data} />
              </GridItem>
            );
          })
        ) : (
          <div> Empty </div>
        )}
      </Right>
    </div>
  );
};

export default Program;
