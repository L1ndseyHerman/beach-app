import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";

export default function LoginForm() {
  const history = useHistory();
  const intl = useIntl();

  const handleLoginButtonClick = () => {
    console.log("You clicked the login button!");
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
      <div>
        <TextField
          id="username"
          label={intl.formatMessage({
            id: "LoginForm.Username",
            defaultMessage: "Username",
          })}
          variant="outlined"
        />
        <TextField
          id="password"
          label={intl.formatMessage({
            id: "LoginForm.Password",
            defaultMessage: "Password",
          })}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoginButtonClick}
        >
          {intl.formatMessage({
            id: "LoginForm.Login",
            defaultMessage: "Login",
          })}
        </Button>
      </div>
    </>
  );
}
