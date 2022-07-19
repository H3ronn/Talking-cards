import React, { useRef, useReducer, useEffect, useState, useMemo } from 'react';
import { Wrapper, Form, ButtonsWrapper, StyledInputField, StyledCard } from './EditCardSection.styles';
import InputButton from 'components/atoms/InputButton/InputButton';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import RangeInput from 'components/molecules/RangeInput/RangeInput';
import { Button } from 'components/atoms/Button/Button';
import WarningAlert from 'components/molecules/WarningAlert/WarningAlert';
import { useCards } from 'hooks/useCards';
import { useAlert } from 'hooks/useAlert';
import throttle from 'lodash.throttle';

const initialState = {
  caption: `I'm happy`,
  captionColor: '#ffffff',
  fontSize: '30',
  image: null,
  bgColor: '#0000ff',
  spaceValue: '0',
  localImgUrl: null,
  imageSize: '100',
  imagePosition: '0',
};

const actionTypes = {
  newState: 'NEW STATE',
  changeStyle: 'CHANGE STYLE',
  changeImage: 'CHANGE IMAGE',
  throwError: 'THROW ERROR',
  resetError: 'RESET ERROR',
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.newState:
      return { ...state, ...payload };
    case actionTypes.changeStyle:
      return { ...state, [payload.field]: payload.value };
    case actionTypes.increment:
      return { ...state, [payload.field]: parseInt(state[payload.field]) + 1 };
    case actionTypes.decrement:
      return { ...state, [payload.field]: parseInt(state[payload.field]) - 1 };
    case actionTypes.changeImage:
      return { ...state, localImgUrl: payload.localImgUrl, image: payload.image };
    case actionTypes.throwError:
      return { ...state, error: payload.error };
    case actionTypes.resetError:
      return { ...state, error: null };
    default:
      return state;
  }
};

const EditCardSection = ({ cardStyle }) => {
  const cardRef = useRef(null);
  const [card, dispatch] = useReducer(reducer, initialState);
  const { addCard, overwriteCard } = useCards();
  const [previewView, setPreviewView] = useState(false);

  const { dispatchAlert } = useAlert();

  const handleEditCard = (e) => {
    dispatch({ type: actionTypes.changeStyle, payload: { field: e.target.name, value: e.target.value } });
  };

  const handleControls = (type, field) => {
    dispatch({ type, payload: { field } });
  };

  const handleAddCard = async (e) => {
    e.preventDefault();
    if (card.image === null) {
      dispatch({ type: actionTypes.throwError, payload: { error: 'You must add your image!' } });
      return;
    }

    const result = await addCard(card);
    if (result) {
      dispatchAlert('Successfully added card', 'success');
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      dispatch({
        type: actionTypes.changeImage,
        payload: { image: e.target.files[0], localImgUrl: URL.createObjectURL(e.target.files[0]) },
      });
    }
  };

  const downloadJpg = async () => {
    setPreviewView(false);

    setTimeout(async () => {
      const blob = await domtoimage.toBlob(cardRef.current);
      saveAs(blob, card.caption);
      handleScroll();
    }, 500);
  };

  const handleScroll = () => {
    const topSpace = cardRef.current.getBoundingClientRect().top;
    setPreviewView(topSpace === 10);
  };

  const throttledHandleScroll = useMemo(() => throttle(handleScroll, 300), []);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttledHandleScroll]);

  useEffect(() => {
    if (card.error) {
      setTimeout(() => {
        dispatch({ type: actionTypes.resetError });
      }, 6000);
    }
  }, [card.error]);

  useEffect(() => {
    if (cardStyle) {
      dispatch({ type: actionTypes.newState, payload: cardStyle });
    }
  }, [cardStyle]);

  const { bgColor, captionColor, fontSize, spaceValue, caption, image, localImgUrl, imageSize, imagePosition } = card;
  return (
    <Wrapper>
      {card.error ? <WarningAlert>{card.error}</WarningAlert> : null}
      <StyledCard
        preview={previewView}
        cardStyle={{ ...card, image: localImgUrl ? localImgUrl : image }}
        ref={cardRef}
      />
      <Form onSubmit={handleAddCard}>
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
          <InputButton
            type="color"
            id="bgColor"
            name="bgColor"
            value={bgColor}
            label="Choose background color"
            onChange={handleEditCard}
          />
          <Button type="button" onClick={downloadJpg}>
            Download jpg
          </Button>
          {cardStyle ? (
            <Button type="button" onClick={() => overwriteCard(card)}>
              Overwrite card
            </Button>
          ) : null}
          <Button type="submit">Add card</Button>
        </ButtonsWrapper>
        <RangeInput
          label="Font size"
          value={fontSize}
          id="fontSize"
          name="fontSize"
          unit="px"
          onChange={handleEditCard}
          handleControls={handleControls}
        />
        <RangeInput
          label="Space"
          value={spaceValue}
          id="spaceValue"
          name="spaceValue"
          unit="px"
          onChange={handleEditCard}
          handleControls={handleControls}
          min="-100"
          max="100"
        />
        <RangeInput
          label="Image size"
          value={imageSize}
          id="imageSize"
          name="imageSize"
          unit="%"
          onChange={handleEditCard}
          handleControls={handleControls}
          min="1"
          max="500"
        />
        <RangeInput
          label="Image position"
          value={imagePosition}
          id="imagePosition"
          name="imagePosition"
          unit="%"
          onChange={handleEditCard}
          handleControls={handleControls}
          min="-300"
          max="300"
        />
      </Form>
    </Wrapper>
  );
};

export default EditCardSection;
