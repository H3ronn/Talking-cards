import { useDispatch, useSelector } from 'react-redux';
import { selectError, setError, setErrorId } from 'redux/errors/errorsSlice';

export const useError = () => {
  const { timerId } = useSelector(selectError);
  const dispatch = useDispatch();

  const dispatchError = (message) => {
    instantErrorHide();

    dispatch(setError(message));

    dispatch(setErrorId(delayedResetErrorId()));
  };

  const instantErrorHide = () => {
    dispatch(setError(''));
    clearTimeout(timerId);
  };

  const delayedResetErrorId = () => {
    return setTimeout(() => {
      dispatch(setError(''));
    }, 5500);
  };

  return { dispatchError, instantErrorHide };
};
