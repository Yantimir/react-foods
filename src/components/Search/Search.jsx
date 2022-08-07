import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const Search = ({ cb = Function.prototype }) => {

  const [value, setValue] = useState("");
  // console.log(value)
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    cb(value);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <TextField
        sx={{ mr: "10px", width: "100%", maxWidth: "500px" }}
        label="Search"
        id="search-fields"
        placeholder="..."
        size="small"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
      >Search
      </Button>
    </div>
  )
}
