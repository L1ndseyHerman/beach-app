import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";

interface NavDropdownProps {
  urls: string[];
}

export default function NavDropdown({ urls }: NavDropdownProps) {
  const options = [
    { id: 1, label: "Beach", url: urls[0] },
    { id: 2, label: "Shallow Ocean", url: urls[1] },
    { id: 3, label: "Deep Ocean", url: urls[2] },
  ];

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a Page to View"
          variant="outlined"
        />
      )}
      renderOption={(option) => <Link to={option.url}>{option.label}</Link>}
    />
  );
}
