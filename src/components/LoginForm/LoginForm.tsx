import { Button, TextField } from "@material-ui/core";

export default function LoginForm() {
  const handleLoginButtonClick = () => {
    console.log("You clicked the login button!");
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <TextField id="username" label="Username" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoginButtonClick}
        >
          Login
        </Button>
      </div>
    </>
  );
}
