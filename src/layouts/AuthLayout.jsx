import React from 'react';
import { Typography, Row, Col } from 'antd';
import styled from 'styled-components';
import Image from '../components/Image';
import cssStyles from '../utils/cssStyles';

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <RootStyles>
      <Row gutter={10}>
        <LeftPanel xs={0} lg={16}>
          <StyledImage src={src} alt='' />
        </LeftPanel>

        <RightPanel xs={24} lg={8}>
          <InnerContainer>
            <StyledTypography.Title
              level={4}
              style={{ marginBottom: '1rem', fontFamily: 'Poppins' }}
            >
              {title}
            </StyledTypography.Title>
            {!!subtitle && (
              <StyledTypography.Text style={{ marginBottom: '4px' }}>
                {subtitle.text}{' '}
              </StyledTypography.Text>
            )}

            {children}
          </InnerContainer>
        </RightPanel>
      </Row>
    </RootStyles>
  );
};

const RootStyles = styled.div`
  height: 100%;
`;

const RightPanel = styled(Col)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  background-color: transparent;
  ${() =>
    cssStyles.glass({
      border: false,
      blur: 20,
      opacity: 0,
    })}
  @media (min-width: 992px) {
    background-color: white;
    padding-left: 56px;
    padding-right: 56px;
  }
`;

const InnerContainer = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const LeftPanel = styled(Col)`
  height: 100vh;
  padding: 24px;
  align-items: center;
  justify-content: center;
  display: flex;
  ${() =>
    cssStyles.glass({
      border: false,
      blur: 20,
      opacity: 0,
    })}
  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px;
  font-family: 'Poppins';
`;

const src = '/images/illustrations/illustration_dashboard.png';
export default AuthLayout;
