import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Container, Grid, Typography } from '@material-ui/core'
import TextField from '../../components/TextFieldWrapper/TextFieldWrapper'
import Button from '../../components/ButtonWrapper/ButtonWrapper'

export const RegistrationForm = ({ handleSignUp }) => {
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    gender: '',
    password: '',
  }
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email.').required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number.')
      .required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .matches(
        passwordRegExp,
        'Password must have one upper, lower case, number, special symbol'
      )
      .required('Required'),
  })

  return (
    <div>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => {
              handleSignUp({
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                address: {
                  country: values.country,
                  city: values.city,
                  addressLine1: values.addressLine1,
                  addressLine2: values.addressLine2,
                },
                gender: values.gender,
                password: values.password,
                phone: values.phone,
              })
              resetForm()
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Your details</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField name="firstName" label="First Name"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField name="lastName" label="Last Name"></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="gender" label="Gender"></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="email" label="Email"></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="phone" label="Phone"></TextField>
                </Grid>

                <Grid item xs={12}>
                  <Typography>Address</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField name="country" label="Country"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField name="city" label="City"></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="addressLine1"
                    label="Address Line 1"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="addressLine2"
                    label="Address Line 2"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Password</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="password" label="Password"></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit">Submit Form</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </div>
  )
}
