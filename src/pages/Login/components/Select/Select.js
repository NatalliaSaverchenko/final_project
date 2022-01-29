import { TextField, MenuItem } from '@material-ui/core'

import { useField, useFormikContext } from 'formik'
const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, mata] = useField(name)
  const handleChange = (event) => {
    const { value } = event.target
    setFieldValue(name, value)
  }

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  }

  if (mata && mata.touched && mata.error) {
    configSelect.error = true
    configSelect.helperText = mata.error
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((gender, index) => {
        return (
          <MenuItem key={index} value={gender}>
            {options[gender]}
          </MenuItem>
        )
      })}
    </TextField>
  )
}
export default SelectWrapper
