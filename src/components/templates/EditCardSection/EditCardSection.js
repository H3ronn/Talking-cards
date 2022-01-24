import React, { useRef, useReducer, useContext, useEffect, useState } from 'react';
import { Wrapper, ButtonsWrapper, StyledInputField } from './EditCardSection.styles';
import InputButton from 'components/atoms/InputButton/InputButton';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import RangeInput from 'components/molecules/RangeInput/RangeInput';
import Card from 'components/organisms/Card/Card';
import { CardContext } from 'providers/CardProvider';
import { Button } from 'components/atoms/Button/Button';

const initialState = {
  caption: 'Caption',
  captionColor: '#ffffff',
  fontSize: '50',
  image: null,
  bgColor: '#0000ff',
  spaceValue: '0',
  localImgUrl: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'NEW STATE':
      return { ...state, ...payload };
    case 'CHANGE STYLE':
      return { ...state, [payload.field]: payload.value };
    case 'CHANGE IMAGE':
      return { ...state, localImgUrl: payload.localImgUrl, image: payload.image };
    default:
      return state;
  }
};

const EditCardSection = ({ cardStyle }) => {
  const cardRef = useRef(null);
  const [card, dispatch] = useReducer(reducer, initialState);
  const { addCard, overwriteCard } = useContext(CardContext);

  const handleEditCard = (e) => {
    dispatch({ type: 'CHANGE STYLE', payload: { field: e.target.name, value: e.target.value } });
  };

  const handleAddCard = () => {
    if (card.image !== null) {
      addCard(card);
    } else {
      alert('You must add your image');
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      dispatch({
        type: 'CHANGE IMAGE',
        payload: { image: e.target.files[0], localImgUrl: URL.createObjectURL(e.target.files[0]) },
      });
    }
  };

  const downloadJpg = async () => {
    const blob = await domtoimage.toBlob(cardRef.current);
    saveAs(blob, card.caption);
  };

  useEffect(() => {
    if (cardStyle) {
      dispatch({ type: 'NEW STATE', payload: cardStyle });
    }
  }, [cardStyle]);

  const { bgColor, captionColor, fontSize, spaceValue, caption, image, localImgUrl } = card;
  return (
    <Wrapper>
      <Card cardStyle={{ ...card, image: localImgUrl ? localImgUrl : image }} ref={cardRef} />
      <StyledInputField name="caption" id="caption" label="Caption" value={caption} onChange={handleEditCard} />
      <ButtonsWrapper>
        <InputButton name="image" id="file" label="Choose image" accept="image/*" onChange={handleImageChange} />
        <InputButton
          type="color"
          id="captionColor"
          name="captionColor"
          label="Choose caption color"
          value={captionColor}
          onChange={handleEditCard}
        />
        {/* przetestować debounce dla setBackgroundColor bo jak się szybko rusza to laguje */}
      </ButtonsWrapper>
      <ButtonsWrapper>
        <InputButton
          type="color"
          id="bgColor"
          name="bgColor"
          value={bgColor}
          label="Choose background color"
          onChange={handleEditCard}
        />
        <Button onClick={downloadJpg}>Download jpg</Button>
      </ButtonsWrapper>
      <ButtonsWrapper>
        {cardStyle ? <Button onClick={() => overwriteCard(card)}>Overwrite card</Button> : null}
        <Button onClick={handleAddCard}>Add card</Button>
      </ButtonsWrapper>
      <RangeInput
        label="Font size"
        value={fontSize}
        id="fontSize"
        name="fontSize"
        unit="px"
        onChange={handleEditCard}
      />
      <RangeInput
        label="Space"
        value={spaceValue}
        id="spaceValue"
        name="spaceValue"
        unit="px"
        onChange={handleEditCard}
        min="-100"
        max="100"
      />
    </Wrapper>
  );
};

export default EditCardSection;
