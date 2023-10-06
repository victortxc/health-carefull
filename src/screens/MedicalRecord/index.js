import { useFormik } from "formik";
import React from "react";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ErrorSpan } from "../../components/ErrorSpan";
import {
  Container,
  Form,
  DivideInputContainer,
  InputContainer,
  TextArea,
  Select,
  TopContainer,
  Title,
  Span
} from "./styles.js";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import redheart from "../../assets/redheart.png";

export function MedicalRecord() {
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    healthInsurance: Yup.string().required("Este campo é obrigatório"),
    specialty: Yup.string().required("Este campo é obrigatório"),
    bloodType: Yup.string().required("Este campo é obrigatório"),
    allergies: Yup.string().required("Este campo é obrigatório"),
    height: Yup.number().required("Este campo é obrigatório"),
    weight: Yup.number().required("Este campo é obrigatório"),
    illnesses: Yup.string().required("Este campo é obrigatório"),
    medicines: Yup.string().required("Este campo é obrigatório"),
    comments: Yup.string().required("Este campo é obrigatório"),
  });

  const specialtyOptions = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
  ];

  const blodTypeOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

  const formik = useFormik({
    initialValues: {
      healthInsurance: "",
      specialty: "",
      bloodType: "",
      allergies: "",
      height: 0,
      weight: 0,
      illnesses: "",
      medicines: "",
      comments: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      navigate("/");
    },
  });

  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <img src={redheart} width={60} alt="" />
          <Title>Medical record</Title>
        </TopContainer>
        <Form onSubmit={formik.handleSubmit}>
          <DivideInputContainer>
            <InputContainer>
              <Input
                id="healthInsurance"
                title={"Health Insurance"}
                name="healthInsurance"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.healthInsurance}
              />
              {formik.errors.healthInsurance && (
                <ErrorSpan>{formik.errors.healthInsurance}</ErrorSpan>
              )}
            </InputContainer>

            <InputContainer>
            <Span>Specialty</Span>
              <Select
                id="specialty"
                name="specialty"
                onChange={formik.handleChange}
                value={formik.values.specialty}
              >
                <option value="">Select Specialty</option>
                {specialtyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              {formik.errors.specialty && (
                <ErrorSpan>{formik.errors.specialty}</ErrorSpan>
              )}
            </InputContainer>
          </DivideInputContainer>

          <DivideInputContainer>
            <InputContainer>
            <Span>Blood type</Span>
            <Select
                id="bloodType"
                name="bloodType"
                onChange={formik.handleChange}
                value={formik.values.bloodType}
              >
                <option value="">Select blood type</option>
                {blodTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              {formik.errors.bloodType && (
                <ErrorSpan>{formik.errors.bloodType}</ErrorSpan>
              )}
            </InputContainer>

            <InputContainer>
              <Input
                id="allergies"
                title={"Allergies"}
                name="allergies"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.allergies}
              />
              {formik.errors.allergies && (
                <ErrorSpan>{formik.errors.allergies}</ErrorSpan>
              )}
            </InputContainer>
          </DivideInputContainer>

          <DivideInputContainer>
            <InputContainer>
              <Input
                id="height"
                title={"Height"}
                name="height"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.height}
              />
              {formik.errors.height && (
                <ErrorSpan>{formik.errors.height}</ErrorSpan>
              )}
            </InputContainer>
            <InputContainer>
              <Input
                id="weight"
                title={"Weight"}
                name="weight"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.weight}
              />
              {formik.errors.weight && (
                <ErrorSpan>{formik.errors.weight}</ErrorSpan>
              )}
            </InputContainer>
          </DivideInputContainer>

          <DivideInputContainer>
            <InputContainer>
              <Input
                id="illnesses"
                title={"Illnesses"}
                name="illnesses"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.illnesses}
              />
              {formik.errors.illnesses && (
                <ErrorSpan>{formik.errors.illnesses}</ErrorSpan>
              )}
            </InputContainer>
          </DivideInputContainer>

          <DivideInputContainer>
            <InputContainer>
              <Input
                id="medicines"
                title={"Medicines"}
                name="medicines"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.medicines}
              />
              {formik.errors.medicines && (
                <ErrorSpan>{formik.errors.medicines}</ErrorSpan>
              )}
            </InputContainer>
          </DivideInputContainer>

          <DivideInputContainer>
            <InputContainer>
            <Span>Comments</Span>
              <TextArea
                id="comments"
                name="comments"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.comments}
              />
              {formik.errors.comments && (
                <ErrorSpan>{formik.errors.comments}</ErrorSpan>
              )}
            </InputContainer>
          </DivideInputContainer>

          <Button type="submit">Save medical record</Button>
        </Form>
      </Container>
    </>
  );
}
