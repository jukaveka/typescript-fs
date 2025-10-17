import { EntryFormFields } from "../../../types";

import DiagnosisList from "../DiagnosisList";

import { Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
}

const FormReview = ({ entryFormFields }: Props) => {
  const renderTypeSpecificFields = () => {
    console.log(entryFormFields);
  };

  const reviewNotReady = () => {
    return (
      !entryFormFields.date ||
      !entryFormFields.specialist ||
      !entryFormFields.description ||
      !entryFormFields.type
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
      <Typography> Date - {entryFormFields.date} </Typography>
      <Typography> Specialist - {entryFormFields.specialist} </Typography>

      <Typography variant="subtitle1">
        <b>Description</b>
      </Typography>
      <Typography> {entryFormFields.description} </Typography>

      <Typography variant="subtitle1">
        <b> Diagnosis</b>
      </Typography>
      {entryFormFields.diagnosisCodes === undefined ? (
        <Typography> No diagnosis added </Typography>
      ) : (
        <DiagnosisList diagnosisCodes={entryFormFields.diagnosisCodes} />
      )}

      <Typography variant="subtitle1">
        <b> Type-related information </b>
      </Typography>
      {renderTypeSpecificFields()}
    </>
  );
};

export default FormReview;
