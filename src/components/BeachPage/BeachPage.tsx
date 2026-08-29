import { FormattedMessage } from "react-intl";
import { createStyles, makeStyles } from "@material-ui/core";
import beachImage from "../../images/beach.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    beachImage: {
      backgroundImage: `url(${beachImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      paddingTop: "5px",
      borderRadius: "4px",
    },
  }),
);

export default function BeachPage() {
  const classes = useStyles();

  return (
    <div className={classes.beachImage}>
      <h1>
        <FormattedMessage id="BeachPage.Beach" defaultMessage="Beach" />
      </h1>
    </div>
  );
}
