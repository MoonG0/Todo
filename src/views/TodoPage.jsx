import AddIcon from "@mui/icons-material/Add";
import {
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import PaperContainer from "../components/PaperContainer";
import ClearIcon from "@mui/icons-material/Clear";

const TodoPage = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <PaperContainer judul="Todo List">
      <Typography>Welcome, {username}</Typography>
      <Box style={{ marginTop: 14 }}>
        <TextField placeholder="Add new todo" />
        <IconButton>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>
      <List style={{ width: "100%", marginTop: 37 }}>
        <ListItem
          style={{
            borderTop: "1px solid",
            borderBottom: "1px solid",
            padding: "10px",
          }}
        >
          <Typography>Learn ReactJS Basic</Typography>
          <IconButton style={{ marginLeft: "auto" }}>
            <ClearIcon fontSize="large" />
          </IconButton>
        </ListItem>
        <ListItem
          style={{
            borderTop: "1px solid",
            borderBottom: "1px solid",
            padding: "10px",
          }}
        >
          <Typography style={{ textDecoration: "line-through" }}>
            Learn React-Router
          </Typography>
          <IconButton style={{ marginLeft: "auto" }}>
            <ClearIcon fontSize="large" />
          </IconButton>
        </ListItem>
        <ListItem
          style={{
            borderTop: "1px solid",
            borderBottom: "1px solid",
            padding: "10px",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            aliquam lectus, sed semper nisl. Sed tincidunt bibendum felis, sit
            amet rutrum quam tincidunt at. Suspendisse potenti. Nulla at
            condimentum urna. Praesent vehicula convallis vehicula. Donec et
            volutpat dolor, in.
          </Typography>
          <IconButton style={{ marginLeft: "auto" }}>
            <ClearIcon fontSize="large" />
          </IconButton>
        </ListItem>
      </List>
    </PaperContainer>
  );
};

export default TodoPage;
