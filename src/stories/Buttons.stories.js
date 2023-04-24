import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'UI/Controls/Button',
  component: Button,
  tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    mode: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    mode: 'secondary',
    label: 'Button',
  },
};

export const Tertiary = {
    args: {
    mode: 'tertiary',
      label: 'Button',
    },
  };

  export const Success = {
    args: {
        mode: 'success',
      label: 'Button',
    },
  };

  export const Error = {
    args: {
        mode: 'error',
      label: 'Button',
    },
  };

  export const Warning = {
    args: {
        mode: 'warning',
      label: 'Button',
    },
  };


export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
