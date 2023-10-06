import styled from "styled-components";
import {FontSizes, Colors, FontWeights, Spaces} from "../../shared/DesignTokens";

export const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.color};
    flex-wrap: wrap;
    padding: ${Spaces.THREE};
`;

export const BannerInnerContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const BannerText = styled.h1`
    font-size: ${FontSizes.FOUR_HALF};
    text-align: center;
    color: ${Colors.DARK_GREY};
    font-weight: ${FontWeights.BOLD};

    @media (max-width: 768px) { 
        font-size: ${FontSizes.FOUR};
  }
`;

export const MedicalHistoryContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

export const MedicalHistoryTitle = styled.h1`
    font-size: ${FontSizes.THREE};
    text-align: center;
    color: ${Colors.DARK_BLUE};
    font-weight: ${FontWeights.REGULAR};
    margin-bottom: ${Spaces.ONE_HALF};
`;

export const MedicalRecordContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: ${Spaces.ONE_HALF};
`;

export const MedicalTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MedicalRecordTitle = styled.h1`
    font-size: ${FontSizes.TWO};
    text-align: center;
    color: ${Colors.BLACK};
    font-weight: ${FontWeights.BOLD};
`;

export const MedicalRecordInfo = styled.h1`
    font-size: ${FontSizes.ONE_HALF};
    text-align: center;
    color: ${Colors.BLACK};
    font-weight: ${FontWeights.REGULAR};
`;
