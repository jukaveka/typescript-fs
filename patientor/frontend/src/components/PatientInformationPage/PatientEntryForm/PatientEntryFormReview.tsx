import { Typography } from "@mui/material";
import { EntryFormFields } from "../../../types";
import DiagnosisList from "../DiagnosisList";

interface Props {
  formValues: EntryFormFields;
}

const PatientEntryFormReview = ({ formValues }: Props) => {
  const { baseFields, hospitalFields, occupationalFields, healthCheckFields } =
    formValues;

  const renderTypeSpecificFields = () => {
    console.log(formValues);
  };

  const reviewNotReady = () => {
    return (
      !baseFields.date ||
      !baseFields.specialist ||
      !baseFields.description ||
      !baseFields.type
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
      <Typography> Date - {baseFields.date} </Typography>
      <Typography> Specialist - {baseFields.specialist} </Typography>

      <Typography variant="subtitle1">
        <b>Description</b>
      </Typography>
      <Typography> {baseFields.description} </Typography>

      <Typography variant="subtitle1">
        <b> Diagnosis</b>
      </Typography>
      {baseFields.diagnosisCodes === undefined ? (
        <Typography> No diagnosis added </Typography>
      ) : (
        <DiagnosisList diagnosisCodes={baseFields.diagnosisCodes} />
      )}

      <Typography variant="subtitle1">
        <b> Type-related information </b>
      </Typography>
      {renderTypeSpecificFields()}
    </>
  );
};

export default PatientEntryFormReview;
