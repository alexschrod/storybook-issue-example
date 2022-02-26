import { ComponentStory, ComponentMeta } from '@storybook/react';

import NormalInput from './NormalInput';
import { useArgs } from '@storybook/client-api';

export default {
  component: NormalInput,
} as ComponentMeta<typeof NormalInput>;

const Template: ComponentStory<typeof NormalInput> = (args) => {
  let [_, setArgs] = useArgs();
  return (
    <NormalInput
      {...args}
      onValueChange={(newValue) => {
        if (args.onValueChange) {
          args.onValueChange(newValue);
        } else {
          console.log('No args.onValueChange');
        }
        setArgs({ value: newValue });
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '',
};
