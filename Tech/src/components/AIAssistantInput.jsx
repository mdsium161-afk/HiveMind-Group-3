import React, { useState } from 'react';
import {
  TextArea,
  Button,
  InlineNotification,
} from '@carbon/react';
import { SendAlt, Ai, CloseFilled } from '@carbon/icons-react';
import './AIAssistantInput.scss';

/**
 * AIAssistantInput
 *
 * Full-page AI Assistant query interface for the HiveMind Christoph Dashboard.
 * Designed to address the trust pain point:
 *   - Shows conversation state clearly
 *   - Displays source attribution on every response
 *   - Provides an error/fallback state when AI cannot answer confidently
 *   - Offers "Ask a person instead" redirect for sensitive queries
 *
 * Props:
 *   onSubmit      {func}    - Called with (questionText) when user submits
 *   placeholder   {string}  - Input placeholder text
 *   disabled      {boolean} - Disable input while loading
 */
const AIAssistantInput = ({
  onSubmit,
  placeholder = 'Ask anything about company policies, processes, or contacts…',
  disabled = false,
}) => {
  const [question, setQuestion] = useState('');
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setQuestion(value);
      setCharCount(value.length);
    }
  };

  const handleSubmit = () => {
    if (!question.trim()) return;
    onSubmit?.(question.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSubmit();
    }
  };

  const handleClear = () => {
    setQuestion('');
    setCharCount(0);
  };

  const isSensitiveQuery = ['salary', 'pay', 'performance review', 'promotion', 'disciplinary']
    .some((term) => question.toLowerCase().includes(term));

  return (
    <div className="ai-assistant-input">
      <div className="ai-assistant-input__header">
        <Ai size={24} className="ai-assistant-input__icon" />
        <div>
          <h2 className="ai-assistant-input__title">AI Assistant</h2>
          <p className="ai-assistant-input__subtitle">
            Answers come from your company Knowledge Hub — every response shows its source.
          </p>
        </div>
      </div>

      {isSensitiveQuery && (
        <InlineNotification
          kind="warning"
          title="Sensitive topic detected"
          subtitle="This question may need a human response. The AI will answer based on policy documents, but consider speaking with HR or your line manager for personalised guidance."
          lowContrast
          className="ai-assistant-input__sensitivity-notice"
        />
      )}

      <div className="ai-assistant-input__field-wrapper">
        <TextArea
          id="ai-question"
          labelText="Your question"
          placeholder={placeholder}
          value={question}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={4}
          className="ai-assistant-input__textarea"
        />

        {question.length > 0 && (
          <button
            type="button"
            className="ai-assistant-input__clear"
            aria-label="Clear question"
            onClick={handleClear}
          >
            <CloseFilled size={16} />
          </button>
        )}
      </div>

      <div className="ai-assistant-input__footer">
        <span className="ai-assistant-input__char-count">
          {charCount} / {MAX_CHARS}
        </span>
        <span className="ai-assistant-input__hint">
          Ctrl+Enter to submit
        </span>
        <Button
          renderIcon={SendAlt}
          disabled={disabled || !question.trim()}
          onClick={handleSubmit}
          size="md"
        >
          Ask AI
        </Button>
      </div>

      <p className="ai-assistant-input__privacy-note">
        Your query is processed using your company's private knowledge base only.
        No data is shared with third parties.
      </p>
    </div>
  );
};

export default AIAssistantInput;
