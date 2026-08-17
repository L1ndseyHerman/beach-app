import { createStyles, makeStyles, type Theme } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { LinkOff } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerDiv: {
      display: "flex",
      justifyContent: "center",
    },
    innerDiv: {
      border: "2px solid #CC3300",
      borderRadius: "4px",
      width: "550px",
      paddingTop: "15px",
      paddingLeft: "50px",
      paddingRight: "50px",
      paddingBottom: "30px",
      [theme.breakpoints.down("xs")]: {
        border: "none",
        width: "auto",
      },
    },
    text: {
      fontFamily: "Arial",
      textAlign: "center",
    },
    icon: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      color: "#CC3300",
    },
    paragraph: {
      paddingTop: "15px",
    },
  }),
);

export default function PageNotFoundPage() {
  const classes = useStyles();

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerDiv}>
        <h1 className={classes.text}>404</h1>
        <LinkOff fontSize="large" className={classes.icon} />
        <p className={`${classes.text} ${classes.paragraph}`}>
          <FormattedMessage
            id="PageNotFoundPage.NotFound"
            defaultMessage="Aww snap, the page you are looking for doesn't exist!"
          />
        </p>
      </div>
    </div>
  );
}
