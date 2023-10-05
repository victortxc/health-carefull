import React from "react";
import { Header } from "../../components/Header";
import {
  BannerContainer,
  BannerText,
  MedicalHistoryContainer,
  MedicalHistoryTitle,
  Button,
  MedicalRecordContainer,
  MedicalTextContainer,
  MedicalRecordTitle,
  MedicalRecordInfo
} from "./styles";
import bannerimg from "../../assets/banner.png";
import medicalimg from "../../assets/medical.png";
import recordimg from "../../assets/record.png";
import { Colors } from "../../shared/DesignTokens";

export function Home() {
  return (
    <>
      <Header />
      <BannerContainer color={Colors.GREY}>
        <img src={bannerimg} width={300} alt="" />
        <BannerText>
          Where data with your <br /> health is our greatest <br />{" "}
          responsibility
        </BannerText>
      </BannerContainer>

      <BannerContainer color={Colors.LIGHT_GREEN}>
        <MedicalHistoryContainer>
          <MedicalHistoryTitle>Medical Record</MedicalHistoryTitle>
          <Button>Create new medical record</Button>

          <MedicalRecordContainer>
            <img src={recordimg} width={100} alt="" />
            <MedicalTextContainer>
              <MedicalRecordTitle>Dr. Fritz</MedicalRecordTitle>
              <MedicalRecordInfo>Psychologist</MedicalRecordInfo>
              <MedicalRecordInfo>29/03/2022 - 13:00pm</MedicalRecordInfo>
            </MedicalTextContainer>
          </MedicalRecordContainer>

          <MedicalRecordContainer>
            <img src={recordimg} width={100} alt="" />
            <MedicalTextContainer>
              <MedicalRecordTitle>Dr. Fritz</MedicalRecordTitle>
              <MedicalRecordInfo>Psychologist</MedicalRecordInfo>
              <MedicalRecordInfo>29/03/2022 - 13:00pm</MedicalRecordInfo>
            </MedicalTextContainer>
          </MedicalRecordContainer>

          <MedicalRecordContainer>
            <img src={recordimg} width={100} alt="" />
            <MedicalTextContainer>
              <MedicalRecordTitle>Dr. Fritz</MedicalRecordTitle>
              <MedicalRecordInfo>Psychologist</MedicalRecordInfo>
              <MedicalRecordInfo>29/03/2022 - 13:00pm</MedicalRecordInfo>
            </MedicalTextContainer>
          </MedicalRecordContainer>

        </MedicalHistoryContainer>
        <img src={medicalimg} width={300} alt="" />
      </BannerContainer>
    </>
  );
}
