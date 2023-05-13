import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const AddComment = ({ isSubmitted, firstName, lastName, message }) => {
  return (
    <Box>
      <Grid className="card">
        <Grid>
          <div className="flex">
            <p className="primary_font font-black antialiased text-md">
              {isSubmitted && firstName + " " + " " + lastName}
            </p>
          </div>
          <div>
            <p className="primary_font antialiased secondary_font-size tracking-normal">
              {isSubmitted && message}
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AddComment;
