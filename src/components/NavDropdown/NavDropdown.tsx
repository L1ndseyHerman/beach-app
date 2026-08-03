import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

interface NavDropdownProps {
  urls: string[];
}

export default function NavDropdown({ urls }: NavDropdownProps) {
  const intl = useIntl();

  const options = [
    {
      id: 1,
      label: intl.formatMessage({
        id: "Beach.Beach",
        defaultMessage: "Beach",
      }),
      url: urls[0],
    },
    {
      id: 2,
      label: intl.formatMessage({
        id: "ShallowOcean.ShallowOcean",
        defaultMessage: "ShallowOcean",
      }),
      url: urls[1],
    },
    {
      id: 3,
      label: intl.formatMessage({
        id: "DeepOcean.DeepOcean",
        defaultMessage: "DeepOcean",
      }),
      url: urls[2],
    },
  ];

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={intl.formatMessage({
            id: "NavDropdown.SelectPage",
            defaultMessage: "Select a Page to View",
          })}
          variant="outlined"
        />
      )}
      renderOption={(option) => <Link to={option.url}>{option.label}</Link>}
    />
  );
}
