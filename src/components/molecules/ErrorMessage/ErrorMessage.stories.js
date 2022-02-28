import React from 'react';

import ErrorMessage from './ErrorMessage';

export default {
  title: 'Molecules/ErrorMessage',
  component: ErrorMessage,
  argTypes: {},
};

const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};
