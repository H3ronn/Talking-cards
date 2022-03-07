export const formatErrorMessage = (error) => {
  const formattedError = error.slice(error.indexOf('/') + 1).replaceAll('-', ' ');
  return formattedError[0].toUpperCase() + formattedError.slice(1);
};
