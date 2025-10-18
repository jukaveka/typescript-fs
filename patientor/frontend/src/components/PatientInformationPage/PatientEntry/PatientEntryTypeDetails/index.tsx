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
        return <HospitalEntryDetails discharge={entry.discharge} />;

      case "OccupationalHealthcare":
        return (
          <OccupationalEntryDetails
            employerName={entry.employerName}
            sickLeave={entry.sickLeave}
          />
        );

      case "HealthCheck":
        return (
          <HealthCheckEntryDetails
            healthCheckRating={entry.healthCheckRating}
          />
        );

      default:
        return assertNever(type);
    }
  };

  return <>{renderTypeSpecificDetails(entry)}</>;
};

export default PatientEntryTypeDetails;
