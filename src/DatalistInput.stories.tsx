import { ComponentStory, ComponentMeta } from '@storybook/react';

import DataListInput from './DatalistInput';
import { useArgs } from '@storybook/client-api';

export default {
  component: DataListInput,
} as ComponentMeta<typeof DataListInput>;

const Template: ComponentStory<typeof DataListInput> = (args) => {
  let [_, setArgs] = useArgs();
  return (
    <DataListInput
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
  list: ['one', 'two', 'three'],
};
