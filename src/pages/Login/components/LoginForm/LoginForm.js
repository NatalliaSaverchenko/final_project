import Button from '../ButtonWrapper/ButtonWrapper'
import { Grid, Input, TextField, Typography } from '@material-ui/core'

export const LoginForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  errors,
}) => {
  return (
    <Grid 
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography/>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            variant="outlined"
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            variant="outlined"
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleFormChange}
          />
        </Grid>
        <Button type="submit">Login</Button>
        {errors && <p>{errors}</p>}
      </form>
    </Grid>
  )
}
