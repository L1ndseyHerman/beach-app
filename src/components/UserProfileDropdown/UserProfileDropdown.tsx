import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

interface UserProfileDropdownProps {
  username: string;
  handleLogout: () => void;
}

export default function UserProfileDropdown({
  username,
  handleLogout,
}: UserProfileDropdownProps) {
  const intl = useIntl();

  const options = [
    {
      id: 1,
      label: intl.formatMessage({
        id: "UserProfileDropdown.Logout",
        defaultMessage: "Logout",
      }),
      url: "/login",
    },
  ];

  const handleChange = () => {
    handleLogout();
  };

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
      renderOption={(option) => <Link to={option.url}>{option.label}</Link>}
      onChange={handleChange}
    />
  );
}
