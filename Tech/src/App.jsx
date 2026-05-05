import React, { useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  Content,
  Grid,
  Column,
  Theme,
} from '@carbon/react';
import { Ai } from '@carbon/icons-react';
import AIDashboardTile from './components/AIDashboardTile';
import AIAssistantInput from './components/AIAssistantInput';
import '@carbon/react/scss/globals/scss/styles.scss';
import './App.scss';

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuestion, setAiQuestion] = useState(null);

  const handleAISubmit = (question) => {
    setAiLoading(true);
    setAiQuestion(question);
    // Simulate an AI response after 1.5 seconds
    setTimeout(() => setAiLoading(false), 1500);
  };

  return (
    <Theme theme="g10">
      <Header aria-label="HiveMind Dashboard">
        <HeaderName href="#" prefix="HiveMind">
          Christoph Dashboard
        </HeaderName>
        <HeaderNavigation aria-label="Main navigation">
          <HeaderMenuItem
            isCurrentPage={activeView === 'dashboard'}
            onClick={() => setActiveView('dashboard')}
          >
            Dashboard
          </HeaderMenuItem>
          <HeaderMenuItem
            isCurrentPage={activeView === 'knowledge'}
            onClick={() => setActiveView('knowledge')}
          >
            Knowledge Hub
          </HeaderMenuItem>
          <HeaderMenuItem
            isCurrentPage={activeView === 'ai'}
            onClick={() => setActiveView('ai')}
          >
            AI Assistant
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>

      <Content className="app-content">
        {activeView === 'dashboard' && (
          <Grid>
            <Column lg={8} md={6} sm={4}>
              <h1 className="app-content__heading">Good morning, Christoph</h1>
              <p className="app-content__subheading">
                Here is your personalised workspace for today.
              </p>

              <AIDashboardTile
                question="What is the expense reimbursement limit for client meals?"
                answer="The limit is £50 per person per meal for client entertainment, subject to manager pre-approval for amounts over £30."
                source="Finance & Expenses Policy v2.3"
                sourceDate="2026-02-14"
                confidence="high"
                loading={false}
                onViewFull={() => setActiveView('ai')}
              />
            </Column>

            <Column lg={4} md={2} sm={4}>
              <div className="app-content__sidebar-card">
                <h3>Team Contacts</h3>
                <p>IT Support — helpdesk@company.com</p>
                <p>HR — hr@company.com</p>
                <p>Finance — finance@company.com</p>
              </div>

              <div className="app-content__sidebar-card">
                <h3>Onboarding Checklist</h3>
                <p>3 of 8 tasks completed</p>
                <progress value={3} max={8} style={{ width: '100%' }} />
              </div>
            </Column>
          </Grid>
        )}

        {activeView === 'ai' && (
          <Grid>
            <Column lg={12} md={8} sm={4}>
              <AIAssistantInput
                onSubmit={handleAISubmit}
                disabled={aiLoading}
              />
              {aiQuestion && !aiLoading && (
                <AIDashboardTile
                  question={aiQuestion}
                  answer="Based on your query, here is the relevant policy information from the Knowledge Hub."
                  source="Company Policy Database"
                  sourceDate={new Date().toISOString().split('T')[0]}
                  confidence="medium"
                  loading={false}
                />
              )}
              {aiLoading && (
                <AIDashboardTile
                  question={aiQuestion}
                  loading={true}
                />
              )}
            </Column>
          </Grid>
        )}

        {activeView === 'knowledge' && (
          <Grid>
            <Column lg={12} md={8} sm={4}>
              <h1 className="app-content__heading">Knowledge Hub</h1>
              <p className="app-content__subheading">
                Your company's single source of truth — all documents verified and version-controlled.
              </p>
              <p style={{ color: 'var(--cds-text-secondary)' }}>
                Knowledge Hub search and document list — connect to your CMS API here.
              </p>
            </Column>
          </Grid>
        )}
      </Content>
    </Theme>
  );
};

export default App;
