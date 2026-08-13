import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  type Theme,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";
import { Role, type User } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerDiv: {
      display: "flex",
      justifyContent: "center",
    },
    innerDiv: {
      //  Middle-ish blue on the Honeydew: https://htmlcolorcodes.com/color-chart/web-safe-color-chart/
      border: "2px solid #66FFFF",
      borderRadius: "4px",
      width: "550px",
      paddingLeft: "50px",
      paddingRight: "50px",
      paddingBottom: "50px",
      //  For ppl unfamiliar w the "xs" breakpoint, 600px wide is still desktop, 599 is mobile.
      [theme.breakpoints.down("xs")]: {
        border: "none",
        width: "auto",
      },
    },
    text: {
      fontFamily: "Arial",
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "#000000",
      fontWeight: 600,
    },
    errorMessage: {
      //  Left-most Tomato red on https://htmlcolorcodes.com/color-chart/web-safe-color-chart/
      color: "#CC3300",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  }),
);

interface LoginFormPageProps {
  fakeUsers: User[];
  handleLogin: (user: User | null) => void;
}

export default function LoginFormPage({
  fakeUsers,
  handleLogin,
}: LoginFormPageProps) {
  const history = useHistory();
  const intl = useIntl();
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let isValidUser = false;
    let theUser = null;

    for (const user of fakeUsers) {
      if (username === user.username && password === user.password) {
        isValidUser = true;
        theUser = user;
      }
    }

    if (isValidUser) {
      handleLogin(theUser);
      if (theUser!.role === Role.Mermaid) {
        history.push("/deep_ocean");
      } else {
        history.push("/beach");
      }
    } else {
      setErrorMessage(
        intl.formatMessage({
          id: "LoginFormPage.Error",
          defaultMessage: "That username and/or password is not in our system.",
        }),
      );
    }
  };

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerDiv}>
        <h1 className={classes.text}>
          {intl.formatMessage({
            id: "LoginFormPage.Login",
            defaultMessage: "Login",
          })}
        </h1>
        <p className={classes.text}>
          {intl.formatMessage({
            id: "LoginFormPage.OtherWebsites",
            defaultMessage: "Looking for my other websites? Click",
          }) + " "}
          <a
            href="https://l1ndseyherman.github.io/my-app/#/"
            className={classes.link}
          >
            {intl.formatMessage({
              id: "LoginFormPage.Here",
              defaultMessage: "Here",
            }) + "."}
          </a>
        </p>
        <p className={`${classes.text} ${classes.errorMessage}`}>
          {errorMessage}
        </p>
        <Box component="form" onSubmit={handleSubmit} className={classes.form}>
          <TextField
            id="username"
            label={intl.formatMessage({
              id: "LoginFormPage.Username",
              defaultMessage: "Username",
            })}
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <TextField
            id="password"
            label={intl.formatMessage({
              id: "LoginFormPage.Password",
              defaultMessage: "Password",
            })}
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Button variant="contained" color="primary" type="submit">
            {intl.formatMessage({
              id: "LoginFormPage.Login",
              defaultMessage: "Login",
            })}
          </Button>
        </Box>
      </div>
    </div>
  );
}
