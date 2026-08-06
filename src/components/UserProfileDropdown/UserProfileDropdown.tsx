import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useIntl } from "react-intl";

export default function UserProfileDropdown() {
  const intl = useIntl();

  const options = [
    {
      id: 1,
      label: intl.formatMessage({
        id: "UserProfileDropdown.Logout",
        defaultMessage: "Logout",
      }),
    },
  ];

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={
            intl.formatMessage({
              id: "UserProfileDropdown.Welcome",
              defaultMessage: "Welcome",
            }) + " fakeUser"
          }
          variant="outlined"
        />
      )}
      renderOption={(option) => <p>{option.label}</p>}
    />
  );
}
