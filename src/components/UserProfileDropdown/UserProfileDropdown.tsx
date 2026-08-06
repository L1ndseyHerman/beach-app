import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useIntl } from "react-intl";

interface UserProfileDropdownProps {
  username: string;
}

export default function UserProfileDropdown({
  username,
}: UserProfileDropdownProps) {
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
            }) +
            " " +
            username
          }
          variant="outlined"
        />
      )}
      renderOption={(option) => <p>{option.label}</p>}
    />
  );
}
