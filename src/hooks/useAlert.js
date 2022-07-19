import { useDispatch, useSelector } from 'react-redux';
import { selectAlert, setAlert, setAlertId } from 'redux/alert/alertSlice';

export const useAlert = () => {
  const dispatch = useDispatch();
  const { timerId } = useSelector(selectAlert);

  const dispatchAlert = (message, type) => {
    hideAlert();

    dispatch(setAlert({ message, type }));

    dispatch(setAlertId(delayedHideAlert()));
  };

  const delayedHideAlert = () => {
    return setTimeout(() => {
      hideAlert();
    }, 2500);
  };

  const hideAlert = () => {
    dispatch(setAlert({ message: null, type: null }));
    clearTimeout(timerId);
  };

  return { dispatchAlert, hideAlert };
};
