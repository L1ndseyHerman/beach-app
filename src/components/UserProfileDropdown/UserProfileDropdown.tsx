import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, type Theme } from "@material-ui/core";

interface UserProfileDropdownProps {
  username: string;
  handleLogout: () => void;
  loginUrl: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userProfileDropdown: {
      width: "45%",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    option: {
      padding: "0px",
    },
    link: {
      textDecoration: "none",
      color: "#000000",
      display: "block",
      width: "100%",
      paddingTop: "6px",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingBottom: "6px",
    },
  }),
);

export default function UserProfileDropdown({
  username,
  handleLogout,
  loginUrl,
}: UserProfileDropdownProps) {
  const intl = useIntl();
  const classes = useStyles();

  const options = [
    {
      id: 1,
      label: intl.formatMessage({
        id: "UserProfileDropdown.Logout",
        defaultMessage: "Logout",
      }),
      url: loginUrl,
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
      renderOption={(option) => (
        <Link to={option.url} className={classes.link}>
          {option.label}
        </Link>
      )}
      onChange={handleChange}
      className={classes.userProfileDropdown}
      classes={{ option: classes.option }}
      disableClearable
      getOptionSelected={(option, value) => option.id === value.id}
    />
  );
}
