import React from 'react';

import SuccessAlert from './SuccessAlert';

export default {
  title: 'Molecules/SuccessAlert',
  component: SuccessAlert,
};

const Template = (args) => <SuccessAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Success!',
};
