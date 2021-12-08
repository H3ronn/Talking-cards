import React, { useState, useRef } from 'react';
import { Wrapper, CardWrapper, Caption, ImageWrapper, Image, StyledButton, ButtonsWrapper, StyledInputField } from './CreateCard.styles';
import InputButton from 'components/atoms/InputButton/InputButton';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const CreateCard = () => {
  const [caption, setCaption] = useState('Caption');
  const [selectedImage, setSelectedImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#0000ff');
  const [captionColor, setCaptionColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(50);
  const cardRef = useRef(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
    if (!e.target.value) setCaption('Caption');
  };

  const handleImageChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChangeBgColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleChangeCaptionColor = (e) => {
    setCaptionColor(e.target.value);
  };

  const handleSetFontSize = (e) => {
    setFontSize(e.target.value);
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
        <Caption color={captionColor} fontSize={fontSize}>
          {caption}
        </Caption>
      </CardWrapper>
      <StyledInputField name="caption" id="caption" label="Caption" onChange={handleCaptionChange} />
      <ButtonsWrapper>
        <InputButton name="file" id="file" label="Choose image" accept="image/*" onChange={handleImageChange} />
        <InputButton
          type="color"
          id="captionColor"
          name="captionColor"
          label="Choose caption color"
          value={captionColor}
          onChange={handleChangeCaptionColor}
        />
        {/* przetestować debounce dla setBackgroundColor bo jak się szybko rusza to laguje */}
      </ButtonsWrapper>
      <ButtonsWrapper>
        <InputButton
          type="color"
          id="bgColor"
          name="bgColor"
          value={backgroundColor}
          label="Choose background color"
          onChange={handleChangeBgColor}
        />
        <StyledButton onClick={downloadJpg}>Download jpg</StyledButton>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <p>
          Font size:
          <input type="range" min={0} max={100} value={fontSize} onChange={handleSetFontSize} />
          <span>{fontSize}px</span>
        </p>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CreateCard;
