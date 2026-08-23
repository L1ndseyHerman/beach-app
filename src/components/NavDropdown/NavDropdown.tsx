import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { createStyles, makeStyles, type Theme } from "@material-ui/core";

interface NavDropdownProps {
  urls: string[];
}

interface Options {
  id: number;
  label: string;
  url: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navDropdown: {
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

export default function NavDropdown({ urls }: NavDropdownProps) {
  const intl = useIntl();
  const classes = useStyles();

  let options: Options[];

  if (urls.length === 3) {
    options = [
      {
        id: 0,
        label: intl.formatMessage({
          id: "Beach.Beach",
          defaultMessage: "Beach",
        }),
        url: urls[0],
      },
      {
        id: 1,
        label: intl.formatMessage({
          id: "ShallowOcean.ShallowOcean",
          defaultMessage: "ShallowOcean",
        }),
        url: urls[1],
      },
      {
        id: 2,
        label: intl.formatMessage({
          id: "DeepOcean.DeepOcean",
          defaultMessage: "DeepOcean",
        }),
        url: urls[2],
      },
    ];
  } else if (urls[0] === "/beach") {
    options = [
      {
        id: 0,
        label: intl.formatMessage({
          id: "Beach.Beach",
          defaultMessage: "Beach",
        }),
        url: urls[0],
      },
      {
        id: 1,
        label: intl.formatMessage({
          id: "ShallowOcean.ShallowOcean",
          defaultMessage: "ShallowOcean",
        }),
        url: urls[1],
      },
    ];
  } else {
    options = [
      {
        id: 0,
        label: intl.formatMessage({
          id: "ShallowOcean.ShallowOcean",
          defaultMessage: "ShallowOcean",
        }),
        url: urls[0],
      },
      {
        id: 1,
        label: intl.formatMessage({
          id: "DeepOcean.DeepOcean",
          defaultMessage: "DeepOcean",
        }),
        url: urls[1],
      },
    ];
  }

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
      renderOption={(option) => (
        <Link to={option.url} className={classes.link}>
          {option.label}
        </Link>
      )}
      className={classes.navDropdown}
      classes={{ option: classes.option }}
      disableClearable
      getOptionSelected={(option, value) => option.id === value.id}
    />
  );
}
