import { useDispatch, useSelector } from 'react-redux';
import { selectError, setError, setErrorId } from 'redux/errors/errorsSlice';

export const useError = () => {
  const { timerId } = useSelector(selectError);
  const dispatch = useDispatch();

  const dispatchError = (message) => {
    instantErrorHide();
    // if (!error) {
    const timerId = delayedResetErrorId();
    dispatch(setErrorId(timerId));
    // }
    dispatch(setError(message));
  };

  const instantErrorHide = () => {
    clearTimeout(timerId);
    dispatch(setError(''));
  };

  const delayedResetErrorId = () => {
    return setTimeout(() => {
      dispatch(setError(''));
    }, 5500);
  };

  return { dispatchError, instantErrorHide };
};
