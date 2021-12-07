import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import InputFile from 'components/atoms/InputFile/InputFile';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardWrapper = styled.div`
  width: 450px;
  height: 500px;
  margin-top: 5px;
  background-color: coral;
  display: grid;
  grid-template-rows: 9fr 1fr;
  align-items: center;
  justify-content: center;
`;

const Caption = styled.p`
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  /* width: 100%; */
`;

const StyledButton = styled.button`
  margin-left: 20px;
  color: white;
  background-color: ${({ theme }) => theme.colors.blue};
  width: max-content;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  font-size: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CreateCard = () => {
  const [caption, setCaption] = useState('Caption');

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
    if (!e.target.value) setCaption('Caption');
  };
  return (
    <Wrapper>
      <CardWrapper>
        <ImageWrapper>
          <Image src={require('./defaultImage.jpg').default} alt="" />
        </ImageWrapper>
        <Caption>{caption}</Caption>
      </CardWrapper>

      <InputField name="caption" id="caption" label="Caption" onChange={handleCaptionChange} />
      {/* <InputField type="file" name="file" id="file" label="Choose file" /> */}
      <ButtonsWrapper>
        <InputFile name="file" id="file" label="Choose file" />
        <StyledButton>Download jpg</StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CreateCard;
