import { Entry } from "../../../../types";

import { assertNever } from "../../../../utils/assertNever";

import OccupationalEntryDetails from "./OccupationalEntryDetails";
import HospitalEntryDetails from "./HospitalEntryDetails";
import HealthCheckEntryDetails from "./HealthCheckEntryDetails";

interface Props {
  entry: Entry;
}

const PatientEntryTypeDetails = ({ entry }: Props) => {
  const renderTypeSpecificDetails = (entry: Entry) => {
    const type = entry.type;
    switch (type) {
      case "Hospital":
        return <HospitalEntryDetails entry={entry} />;
      case "OccupationalHealthcare":
        return <OccupationalEntryDetails entry={entry} />;
      case "HealthCheck":
        return <HealthCheckEntryDetails entry={entry} />;
      default:
        return assertNever(type);
    }
  };

  return <>{renderTypeSpecificDetails(entry)}</>;
};

export default PatientEntryTypeDetails;
