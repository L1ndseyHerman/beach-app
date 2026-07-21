import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

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
      />
      <h1>Beach</h1>
    </>
  );
}

export default Beach;
