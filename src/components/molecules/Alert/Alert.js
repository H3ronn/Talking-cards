import React from 'react';
import SuccessAlert from '../SuccessAlert/SuccessAlert';

const alertTypes = {
  success: (mes) => <SuccessAlert message={mes} />,
  info: (mes) => <p>INFO coming soon{mes}</p>,
  warning: (mes) => <p>WARNING coming soon{mes}</p>,
};

const Alert = ({ message = '', type = 'success' }) => {
  const renderAlert = alertTypes[type];
  return renderAlert(message);
};

export default Alert;
