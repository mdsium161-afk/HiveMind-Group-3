import React from 'react';
import {
  Tile,
  Button,
  Tag,
  InlineLoading,
} from '@carbon/react';
import { Ai, ChevronRight, Checkmark, Warning } from '@carbon/icons-react';
import './AIDashboardTile.scss';

/**
 * AIDashboardTile
 *
 * Displays a summary AI insight on the Christoph Dashboard home screen.
 * Addresses the core trust pain point: every AI suggestion shows the source
 * document, last-updated date, and a confidence level badge.
 *
 * Props:
 *   question    {string}  - The user question that triggered the AI response
 *   answer      {string}  - The AI-generated answer text
 *   source      {string}  - Name of the source document
 *   sourceDate  {string}  - Last-updated date of the source (ISO string)
 *   confidence  {'high'|'medium'|'low'} - Confidence level of the answer
 *   loading     {boolean} - True while the AI is generating a response
 *   onViewFull  {func}    - Callback when user clicks "View full answer"
 */
const AIDashboardTile = ({
  question = 'What is the expense reimbursement limit for client meals?',
  answer = 'The limit is £50 per person per meal for client entertainment, subject to manager pre-approval for amounts over £30.',
  source = 'Finance & Expenses Policy v2.3',
  sourceDate = '2026-02-14',
  confidence = 'high',
  loading = false,
  onViewFull,
}) => {
  const formattedDate = new Date(sourceDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const confidenceConfig = {
    high:   { type: 'green',  icon: <Checkmark size={12} />, label: 'High confidence' },
    medium: { type: 'warm-gray', icon: null, label: 'Medium confidence' },
    low:    { type: 'red',    icon: <Warning size={12} />, label: 'Low confidence — verify with your manager' },
  };

  const conf = confidenceConfig[confidence] ?? confidenceConfig.medium;

  return (
    <Tile className="ai-dashboard-tile">
      <div className="ai-dashboard-tile__header">
        <span className="ai-dashboard-tile__icon-wrapper">
          <Ai size={20} />
        </span>
        <span className="ai-dashboard-tile__label">AI Assistant</span>
        <Tag type={conf.type} size="sm" className="ai-dashboard-tile__confidence">
          {conf.icon}
          {conf.label}
        </Tag>
      </div>

      <p className="ai-dashboard-tile__question">{question}</p>

      {loading ? (
        <InlineLoading description="Generating answer…" />
      ) : (
        <>
          <p className="ai-dashboard-tile__answer">{answer}</p>

          <div className="ai-dashboard-tile__source">
            <span className="ai-dashboard-tile__source-label">Based on: </span>
            <span className="ai-dashboard-tile__source-name">{source}</span>
            <span className="ai-dashboard-tile__source-date">
              {' · '}Last updated {formattedDate}
            </span>
          </div>

          <Button
            kind="ghost"
            size="sm"
            renderIcon={ChevronRight}
            className="ai-dashboard-tile__cta"
            onClick={onViewFull}
          >
            View full answer &amp; source
          </Button>
        </>
      )}
    </Tile>
  );
};

export default AIDashboardTile;
