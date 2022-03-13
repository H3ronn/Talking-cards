import React from 'react';

import MenuButton from './MenuButton';

export default {
  title: 'Atoms/MenuButton',
  component: MenuButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = { isOpen: true };
