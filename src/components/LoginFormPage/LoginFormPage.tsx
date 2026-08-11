import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";
import { Role, type User } from "../../constants";

const useStyles = makeStyles(() =>
  createStyles({
    pageTitle: {
      fontFamily: "Arial",
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
    <>
      <h1 className={classes.pageTitle}>
        {intl.formatMessage({
          id: "LoginFormPage.Login",
          defaultMessage: "Login",
        })}
      </h1>
      <p>
        {intl.formatMessage({
          id: "LoginFormPage.OtherWebsites",
          defaultMessage: "Looking for my other websites? Click",
        }) + " "}
        <a href="https://l1ndseyherman.github.io/my-app/#/">
          {intl.formatMessage({
            id: "LoginFormPage.Here",
            defaultMessage: "Here",
          }) + "."}
        </a>
      </p>
      <p>{errorMessage}</p>
      <Box component="form" onSubmit={handleSubmit}>
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
    </>
  );
}
