import React from 'react';

import Loading from './Loading';

export default {
  title: 'Atoms/Loading',
  component: Loading,
  argTypes: {},
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const Centered = Template.bind({});
Centered.args = { center: true };
