import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import InputFile from 'components/atoms/InputFile/InputFile';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardWrapper = styled.div`
  width: 450px;
  height: 500px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
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
  max-width: 400px;
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
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CreateCard = () => {
  const [caption, setCaption] = useState('Caption');
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRef = useRef(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
    if (!e.target.value) setCaption('Caption');
  };

  const handleImageChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const downloadJpg = () => {
    domtoimage.toBlob(cardRef.current).then((blob) => {
      saveAs(blob, caption);
    });
  };

  return (
    <Wrapper>
      <CardWrapper ref={cardRef}>
        <ImageWrapper>
          <Image src={selectedImage ? selectedImage : require('./defaultImage.jpg').default} alt="" />
        </ImageWrapper>
        <Caption>{caption}</Caption>
      </CardWrapper>
      <InputField name="caption" id="caption" label="Caption" onChange={handleCaptionChange} />
      <ButtonsWrapper>
        <InputFile name="file" id="file" label="Choose file" onChange={handleImageChange} />
        <StyledButton onClick={downloadJpg}>Download jpg</StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CreateCard;
