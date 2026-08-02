import { useIntl } from "react-intl";

export default function ShallowOcean() {
  const intl = useIntl();
  return (
    <h1>
      {intl.formatMessage({
        id: "ShallowOcean.ShallowOcean",
        defaultMessage: "ShallowOcean",
      })}
    </h1>
  );
}
