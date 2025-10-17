import { Typography } from "@mui/material";
import { EntryFormValues } from "../../../types";
import DiagnosisList from "../DiagnosisList";

interface Props {
  formValues: EntryFormValues;
}

const PatientEntryFormReview = ({ formValues }: Props) => {
  const renderTypeSpecificFields = () => {
    console.log(formValues);
  };

  const reviewNotReady = () => {
    return (
      !formValues.date ||
      !formValues.specialist ||
      !formValues.description ||
      !formValues.type
    );
  };

  if (reviewNotReady()) {
    return (
      <Typography variant="subtitle1">
        Review is not readable until you've filled appropriate fields.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="subtitle1">
        Review the information you've added.
      </Typography>

      <Typography variant="subtitle1">
        If you notice typos, mistakes or other issues, go back and make
        appropriate changes
      </Typography>

      <Typography variant="subtitle1">
        Submit if all of the information given is correct
      </Typography>

      <Typography variant="subtitle1">
        <b>Basic information</b>
      </Typography>
      <Typography> Date - {formValues.date} </Typography>
      <Typography> Specialist - {formValues.specialist} </Typography>

      <Typography variant="subtitle1">
        <b>Description</b>
      </Typography>
      <Typography> {formValues.description} </Typography>

      <Typography variant="subtitle1">
        <b> Diagnosis</b>
      </Typography>
      {formValues.diagnosisCodes === undefined ? (
        <Typography> No diagnosis added </Typography>
      ) : (
        <DiagnosisList diagnosisCodes={formValues.diagnosisCodes} />
      )}

      <Typography variant="subtitle1">
        <b> Type-related information </b>
      </Typography>
      {renderTypeSpecificFields()}
    </>
  );
};

export default PatientEntryFormReview;
