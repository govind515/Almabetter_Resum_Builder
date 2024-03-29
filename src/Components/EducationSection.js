// Importing necessary modules from Material-UI, React, Redux, and React Hook Form
import React, { useState } from "react";
import { connect } from "react-redux";
import { Paper, Divider, MenuItem, Select } from "@mui/material";
import { BackNextButton, SelectComponent, Input } from "../Pages/index";
import { addEducation } from "../Redux/Actions/actions";
import { useForm, Controller } from "react-hook-form";
import "../Styles/EducationSection.css";

// Mapping state to props to access educationInfo from Redux store
const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

// Mapping dispatch to props to dispatch addEducation action
const mapDispatchToProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
});

// Array containing years for start and end year selection
const years = [
  " Present ",
  " 2024 ",
  " 2023 ",
  " 2022 ",
  " 2021 ",
  " 2020 ",
  " 2019 ",
  " 2018 ",
  " 2017 ",
  " 2016 ",
  " 2015 ",
  " 2014 ",
  " 2013 ",
  " 2012 ",
  " 2011 ",
  " 2010 ",
];

// Defining the EducationSection component
const EducationSection = (props) => {
  // State to manage loading state
  const [loading, setLoading] = useState(false);

  // Destructuring useForm methods for form handling
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Function to handle moving back in the form
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Function to handle moving to the next step in the form
  const handleNext = (data) => {
    setLoading(true);
    props.onAddEducation(data);

    // Simulating loading with setTimeout
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="education-form-cont">
          {/* Input component for domain */}
          <Input
            title={"Domain"}
            type={"text"}
            name={"domain"}
            register={register}
            multiline={false}
            value={props.educationInfo.domain}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, domain: value })
            }
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
          />
          {/* Input component for university */}
          <Input
            title={"University"}
            type={"text"}
            name={"university"}
            register={register}
            multiline={false}
            value={props.educationInfo.university}
            setValue={(value) =>
              props.onAddEducation({
                ...props.educationInfo,
                university: value,
              })
            }
            error={errors.university ? true : false}
            errorMessage={errors.university ? errors.university.message : null}
          />
          {/* Input component for degree */}
          <Input
            title={"Degree"}
            type={"text"}
            name={"degree"}
            register={register}
            multiline={false}
            value={props.educationInfo.degree}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, degree: value })
            }
            error={errors.degree ? true : false}
            errorMessage={errors.degree ? errors.degree.message : null}
          />
          {/* Select component for start year */}
          <SelectComponent
            title={"Start Year"}
            errorMessage={errors.startYear ? errors.startYear.message : null}
            error={errors.startYear ? true : false}
          >
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.startYear ? true : false}
                >
                  {years.map((year, index) => (
                    <MenuItem key={index} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name={"startYear"}
              control={control}
              rules={{ required: "*Please select start year" }}
              defaultValue={props.educationInfo.startYear}
            />
          </SelectComponent>
          {/* Select component for end year */}
          <SelectComponent
            title={"End Year"}
            errorMessage={errors.endYear ? errors.endYear.message : null}
            error={errors.endYear ? true : false}
          >
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.endYear ? true : false}
                >
                  {years.map((year, index) => (
                    <MenuItem key={index} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name={"endYear"}
              control={control}
              rules={{ required: "*Please select end year" }}
              defaultValue={props.educationInfo.endYear}
            />
          </SelectComponent>
        </div>
        <Divider sx={{ margin: "10px 0px" }} />
        {/* BackNextButton component for navigation */}
        <BackNextButton
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

// Connecting EducationSection component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(EducationSection);
