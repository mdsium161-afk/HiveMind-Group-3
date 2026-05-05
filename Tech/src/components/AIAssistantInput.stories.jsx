import React from 'react';
import AIAssistantInput from './AIAssistantInput';

export default {
  title: 'HiveMind/AIAssistantInput',
  component: AIAssistantInput,
  parameters: {
    docs: {
      description: {
        component:
          'Full AI query input for the AI Assistant page. Includes sensitive-topic detection, character count, and privacy assurance text — all designed to reduce AI distrust.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => (
  <div style={{ background: 'var(--cds-background)', padding: '2rem', minHeight: '100vh' }}>
    <AIAssistantInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  placeholder: 'Ask anything about company policies, processes, or contacts…',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const SensitiveQueryPreview = Template.bind({});
SensitiveQueryPreview.storyName = 'Sensitive query warning (demo)';
SensitiveQueryPreview.args = {
  disabled: false,
};
SensitiveQueryPreview.parameters = {
  docs: {
    description: {
      story:
        'Type "salary" or "promotion" in the input to see the sensitive-topic warning appear.',
    },
  },
};
