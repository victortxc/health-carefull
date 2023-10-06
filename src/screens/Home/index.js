import React from "react";
import { Header } from "../../components/Header";
import {
  BannerContainer,
  BannerText,
  MedicalHistoryContainer,
  MedicalHistoryTitle,
  MedicalRecordContainer,
  MedicalTextContainer,
  MedicalRecordTitle,
  MedicalRecordInfo,
  BannerInnerContainer,
} from "./styles";
import bannerimg from "../../assets/banner.png";
import medicalimg from "../../assets/medical.png";
import recordimg from "../../assets/record.png";
import { Colors } from "../../shared/DesignTokens";
import {Button} from "../../components/Button"
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/medical-record");
  }
  return (
    <>
      <Header />
      <BannerContainer color={Colors.GREY}>
        <BannerInnerContainer>
          <img src={bannerimg} width={300} alt="" />
        </BannerInnerContainer>
        <BannerInnerContainer>
          <BannerText>
            Where data with your <br /> health is our greatest <br />{" "}
            responsibility
          </BannerText>
        </BannerInnerContainer>
      </BannerContainer>

      <BannerContainer color={Colors.LIGHT_GREEN}>
        <BannerInnerContainer>
          <MedicalHistoryContainer>
            <MedicalHistoryTitle>Medical Record</MedicalHistoryTitle>
            <Button onClick={handleOnClick}>Create new medical record</Button>

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
        </BannerInnerContainer>

        <BannerInnerContainer>
          <img src={medicalimg} width={300} alt="" />
        </BannerInnerContainer>
      </BannerContainer>
    </>
  );
}
