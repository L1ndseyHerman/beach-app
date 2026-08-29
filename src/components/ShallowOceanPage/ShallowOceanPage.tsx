import { FormattedMessage } from "react-intl";
import { createStyles, makeStyles } from "@material-ui/core";
import shallowOceanImage from "../../images/shallow_ocean.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    shallowOceanImage: {
      backgroundImage: `url(${shallowOceanImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      paddingTop: "5px",
      borderRadius: "4px",
    },
  }),
);

export default function ShallowOceanPage() {
  const classes = useStyles();

  return (
    <div className={classes.shallowOceanImage}>
      <h1>
        <FormattedMessage
          id="ShallowOceanPage.ShallowOcean"
          defaultMessage="Shallow Ocean"
        />
      </h1>
    </div>
  );
}
