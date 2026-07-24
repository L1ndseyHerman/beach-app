import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";

function Beach() {
  const options = [
    { id: 1, label: "Beach" },
    { id: 2, label: "Shallow Ocean" },
    { id: 3, label: "Deep Ocean" },
  ];

  return (
    <>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Select Option" variant="outlined" />
        )}
        renderOption={(option) => <Link to="/deep_ocean">{option.label}</Link>}
      />
      <Link to="/deep_ocean">Deep Ocean</Link>
      <h1>Beach</h1>
    </>
  );
}

export default Beach;
