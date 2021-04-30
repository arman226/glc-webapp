import React, { useState, useEffect } from 'react'
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from '../../../components/useForm';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' }
]

const initialFValues = {
  id: 0,
  studentID: '',
  firstName: '',
  lastName: '',
  middleName: '',
  gender: 'male',
  age:'',
  birthDate: new Date(),
  currentAddress: '',
  permanentAddress: '',
  mothersFirstName: '',
  mothersLastName: '',
  motherContactNo:'',
  fathersFirstName: '',
  fathersLastName: '',
  fatherContactNo:'',
  guardianName: '',
  contactNo:'',
  forReserve: false,
}

const NewStudents = (props) => {
    
  const classes = useStyles();
  const { addOrEdit, recordForEdit } = props

  const validate = (fieldValues = values) => {
      let temp = { ...errors }
      if ('studentID' in fieldValues)
          temp.studentID = fieldValues.studentID.length > 9 ? "" : "Minimum 10 numbers required."
      if ('firstName' in fieldValues)
          temp.firstName = fieldValues.firstName ? "" : "This field is required."
      if ('lastName' in fieldValues)
          temp.lastName = fieldValues.lastName ? "" : "This field is required."    
      if ('middleName' in fieldValues)
          temp.middleName = fieldValues.middleName ? "" : "This field is required."    
      if ('age' in fieldValues)
          temp.age = fieldValues.age.length < 2 ? "" : "Valid Age required."
      if ('currentAddress' in fieldValues)
          temp.currentAddress = fieldValues.currentAddress ? "" : "This field is required."
      if ('permanentAddress' in fieldValues)
          temp.permanentAddress = fieldValues.permanentAddress ? "" : "This field is required."
      if ('guardianName' in fieldValues)
          temp.guardianName = fieldValues.guardianName ? "" : "This field is required."
     if ('contactNo' in fieldValues)
          temp.contactNo = fieldValues.contactNo.length > 9 ? "" : "Minimum 10 numbers required."
      setErrors({
          ...temp
      })

      if (fieldValues == values)
          return Object.values(temp).every(x => x == "")
  }

  const {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = e => {
      e.preventDefault()
      if (validate()) {
          addOrEdit(values, resetForm);
      }
  }

  useEffect(() => {
      if (recordForEdit != null)
          setValues({
              ...recordForEdit
          })
  }, [recordForEdit])
  
  return (
    
    <div className={classes.content}>
    <p><h3>Student</h3> Create New</p>
    <Paper className={classes.paper}>
    <Form onSubmit={handleSubmit}>
        <h4>Basic Information</h4>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="studentID"
                        label="Student ID"
                        value={values.studentID}
                        onChange={handleInputChange}
                        error={errors.studentID}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs>
                    <Controls.Input
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                </Grid>
                <Grid item xs>
                    <Controls.Input
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                </Grid>
                <Grid item xs>
                    <Controls.Input
                        name="middleName"
                        label="Middle Name"
                        value={values.middleName}
                        onChange={handleInputChange}
                        error={errors.middleName}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs>
                    <Controls.Input
                        name="age"
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                        error={errors.age}
                    />
                </Grid>
                <Grid item xs>
                    <Controls.DatePicker
                        name="birthDate"
                        label="Birth Date"
                        value={values.birthDate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={6}>
                    <Controls.Input
                        name="currentAddress"
                        label="Current Address"
                        value={values.currentAddress}
                        onChange={handleInputChange}
                        error={errors.currentAddress}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        name="permanentAddress"
                        label="Permanent Address"
                        value={values.permanentAddress}
                        onChange={handleInputChange}
                        error={errors.permanentAddress}
                    />
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <h4>Guardians Details</h4>
            <Grid container>
                <Grid item xs>
                    <Controls.Input
                        name="mothersFirstName"
                        label="Mother's FirstName"
                        value={values.mothersFirstName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs>
                    <Controls.Input
                        name="mothersLastName"
                        label="Mother's LastName"
                        value={values.mothersLastName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs>
                <Controls.Input
                        label="Contact No."
                        name="motherContactNo"
                        value={values.motherContactNo}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs>
                    <Controls.Input
                        name="fathersFirstName"
                        label="Father's FirstName"
                        value={values.fathersFirstName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs>
                    <Controls.Input
                        name="fathersLastName"
                        label="Father's LastName"
                        value={values.fathersLastName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs>
                <Controls.Input
                        label="Contact No."
                        name="fatherContactNo"
                        value={values.fatherContactNo}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Controls.Input
                        name="guardianName"
                        label="Guardian's Name"
                        value={values.guardianName}
                        onChange={handleInputChange}
                        error={errors.guardianName}
                    />
                </Grid>
                <Grid item xs={4}>
                <Controls.Input
                        label="Contact No."
                        name="contactNo"
                        value={values.contactNo}
                        onChange={handleInputChange}
                        error={errors.contactNo}
                    />
                </Grid>
            </Grid>
        </Form>
    </Paper>
        <Controls.Button
            type="submit"
            text="Submit" />
        <Controls.Button
            text="Reset"
            color="default"
            onClick={resetForm} />
    </div>
  )
};
const useStyles = makeStyles((theme) => ({
  content: {
    // flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding : 30,
    // paddingLeft: 60,
    margin:"10px auto", 
    borderRadius: 6, 
    borderTop: `5px solid #32cd32`,
  },
}));

export default NewStudents;