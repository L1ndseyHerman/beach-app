import { FormattedMessage } from "react-intl";
import { createStyles, makeStyles } from "@material-ui/core";
import deepOceanImage from "../../images/deep_ocean.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    deepOceanImage: {
      backgroundImage: `url(${deepOceanImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      paddingTop: "5px",
      borderRadius: "4px",
      //  The Deep Ocean needs dark mode:
      color: "#FFFFFF",
    },
  }),
);

export default function DeepOceanPage() {
  const classes = useStyles();

  return (
    <div className={classes.deepOceanImage}>
      <h1>
        <FormattedMessage
          id="DeepOceanPage.DeepOcean"
          defaultMessage="Deep Ocean"
        />
      </h1>
    </div>
  );
}
