import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";

function Beach() {
  const options = [
    { id: 1, label: "Beach", url: "/beach" },
    { id: 2, label: "Shallow Ocean", url: "/shallow_ocean" },
    { id: 3, label: "Deep Ocean", url: "/deep_ocean" },
  ];

  return (
    <>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Select Option" variant="outlined" />
        )}
        renderOption={(option) => <Link to={option.url}>{option.label}</Link>}
      />
      <h1>Beach</h1>
    </>
  );
}

export default Beach;
