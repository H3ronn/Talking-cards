import React from 'react';

import MobileNavigation from './MobileNavigation';

export default {
  title: 'Organisms/MobileNavigation',
  component: MobileNavigation,
  argTypes: {},
};

const Template = (args) => <MobileNavigation {...args} />;

export const Default = Template.bind({});
Default.args = { isOpen: true };
