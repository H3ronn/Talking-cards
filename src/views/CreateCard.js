import React, { useState, useRef } from 'react';
import { Wrapper, CardWrapper, Caption, ImageWrapper, Image, StyledButton, ButtonsWrapper } from './CreateCard.styles';
import InputField from 'components/molecules/InputField/InputField';
import InputFile from 'components/atoms/InputFile/InputFile';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import MenuButton from 'components/atoms/MenuButton/MenuButton';

const CreateCard = () => {
  const [caption, setCaption] = useState('Caption');
  const [selectedImage, setSelectedImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');
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
      <CardWrapper ref={cardRef} backgroundColor={backgroundColor}>
        <ImageWrapper>
          <Image src={selectedImage ? selectedImage : require('./defaultImage.jpg').default} alt="" />
        </ImageWrapper>
        <Caption>{caption}</Caption>
      </CardWrapper>
      <InputField name="caption" id="caption" label="Caption" onChange={handleCaptionChange} />
      <ButtonsWrapper>
        <InputFile name="file" id="file" label="Choose file" onChange={handleImageChange} />
        <StyledButton onClick={downloadJpg}>Download jpg</StyledButton>
        <input type="color" onChange={(e) => setBackgroundColor(e.target.value)} />
        {/* przetestować debounce dla setBackgroundColor bo jak się szybko rusza to laguje */}
      </ButtonsWrapper>
      <MenuButton />
    </Wrapper>
  );
};

export default CreateCard;
