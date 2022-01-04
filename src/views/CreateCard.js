import React, { useRef, useReducer, useContext } from 'react';
import { Wrapper, StyledButton, ButtonsWrapper, StyledInputField } from './CreateCard.styles';
import InputButton from 'components/atoms/InputButton/InputButton';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import RangeInput from 'components/molecules/RangeInput/RangeInput';
import Card from 'components/organisms/Card/Card';
import { CardContext } from 'providers/CardProvider';

const initialState = {
  caption: 'Caption',
  captionColor: '#ffffff',
  fontSize: 50,
  image: null,
  bgColor: '#0000ff',
  spaceValue: 0,
};

const reducer = (state, action) => {
  // console.log(state, action);
  return { ...state, [action.type]: action.payload };
};

const CreateCard = () => {
  const cardRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addCard } = useContext(CardContext);

  const handleEditCard = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      // setSelectedImage(URL.createObjectURL(e.target.files[0]));
      dispatch({ type: e.target.name, payload: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const downloadJpg = () => {
    domtoimage.toBlob(cardRef.current).then((blob) => {
      saveAs(blob, state.caption);
    });
  };

  const { bgColor, captionColor, fontSize, spaceValue } = state;
  return (
    <Wrapper>
      <Card cardStyle={state} ref={cardRef} />
      <StyledInputField name="caption" id="caption" label="Caption" onChange={handleEditCard} />
      <ButtonsWrapper>
        <InputButton name="image" id="file" label="Choose image" accept="image/*" onChange={handleImageChange} />
        <InputButton type="color" id="captionColor" name="captionColor" label="Choose caption color" value={captionColor} onChange={handleEditCard} />
        {/* przetestować debounce dla setBackgroundColor bo jak się szybko rusza to laguje */}
      </ButtonsWrapper>
      <ButtonsWrapper>
        <InputButton type="color" id="bgColor" name="bgColor" value={bgColor} label="Choose background color" onChange={handleEditCard} />
        <StyledButton onClick={downloadJpg}>Download jpg</StyledButton>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <StyledButton onClick={() => addCard(state)}>Add card</StyledButton>
      </ButtonsWrapper>
      <RangeInput label="Font size" value={fontSize} id="fontSize" name="fontSize" unit="px" onChange={handleEditCard} />
      <RangeInput label="Space" value={spaceValue} id="spaceValue" name="spaceValue" unit="px" onChange={handleEditCard} min="-100" max="100" />
    </Wrapper>
  );
};

export default CreateCard;
