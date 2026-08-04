import { Box, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";

export default function LoginForm() {
  const history = useHistory();
  const intl = useIntl();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("You clicked the login button!");
    console.log(
      "The username is: " + username + " and the password is: " + password,
    );
    history.push("/beach");
  };

  return (
    <>
      <h1>
        {intl.formatMessage({
          id: "LoginForm.Login",
          defaultMessage: "Login",
        })}
      </h1>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label={intl.formatMessage({
            id: "LoginForm.Username",
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
            id: "LoginForm.Password",
            defaultMessage: "Password",
          })}
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Button variant="contained" color="primary" type="submit">
          {intl.formatMessage({
            id: "LoginForm.Login",
            defaultMessage: "Login",
          })}
        </Button>
      </Box>
    </>
  );
}
