import React from 'react';
import AIDashboardTile from './AIDashboardTile';

export default {
  title: 'HiveMind/AIDashboardTile',
  component: AIDashboardTile,
  parameters: {
    docs: {
      description: {
        component:
          'AI insight tile for the Christoph Dashboard. Displays an AI-generated answer with full source attribution to build user trust.',
      },
    },
  },
  argTypes: {
    confidence: {
      control: { type: 'select' },
      options: ['high', 'medium', 'low'],
    },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <AIDashboardTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'What is the expense reimbursement limit for client meals?',
  answer:
    'The limit is £50 per person per meal for client entertainment, subject to manager pre-approval for amounts over £30.',
  source: 'Finance & Expenses Policy v2.3',
  sourceDate: '2026-02-14',
  confidence: 'high',
  loading: false,
};

export const MediumConfidence = Template.bind({});
MediumConfidence.args = {
  ...Default.args,
  question: 'How many days notice do I need for annual leave?',
  answer:
    'Standard policy requires 2 weeks notice for leave of 5 days or more. Your manager may have additional team-specific requirements.',
  source: 'HR Leave Policy v1.8',
  sourceDate: '2025-11-01',
  confidence: 'medium',
};

export const LowConfidence = Template.bind({});
LowConfidence.args = {
  ...Default.args,
  question: 'Can I carry over unused annual leave to next year?',
  answer:
    'Carry-over rules vary by contract type. Please verify with HR as this may not be fully covered in the current documentation.',
  source: 'HR Leave Policy v1.8',
  sourceDate: '2025-11-01',
  confidence: 'low',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};
