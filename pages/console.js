/**
 * Bridge Console - Technical Debt Intelligence Demo
 *
 * A standalone web demo showcasing Bridge's health score analysis.
 * Embed this in any webpage to demonstrate technical debt analysis.
 *
 * Usage:
 *   <div id="bridge-demo"></div>
 *   <script src="console.js"></script>
 *   <script>BridgeDemo.init('#bridge-demo');</script>
 */

(function(global) {
    'use strict';
  
    // Sample data representing a typical codebase analysis
    const SAMPLE_ANALYSIS = {
      meta: {
        projectName: 'acme-frontend',
        totalFiles: 247,
        sloc: 45000,
        repoAgeDays: 730,
        branchCount: 23,
        deadBranchCount: 5,
        languageBreakdown: { TypeScript: 85, JavaScript: 8, CSS: 5, HTML: 2 }
      },
      score: {
        total: 72,
        grade: 'C',
        status: 'Needs Attention',
        breakdown: {
          dependencies: 68,
          architecture: 70,
          codeQuality: 75,
          testing: 80,
          documentation: 65
        },
        weights: {
          dependencies: 0.30,
          architecture: 0.25,
          codeQuality: 0.20,
          testing: 0.15,
          documentation: 0.10
        },
        executiveSummary: 'This codebase has moderate technical debt. There are 12 outdated dependencies including 2 with security vulnerabilities. The architecture shows 3 circular dependency chains. Recommend prioritizing dependency updates.'
      },
      issues: {
        circularDeps: 3,
        outdatedPkgs: 12,
        unusedDeps: 5,
        todoCount: 23,
        consoleLogCount: 8
      },
      topTasks: [
        { title: 'Update lodash to fix security vulnerability', impact: 'critical', effort: 'trivial' },
        { title: 'Remove 5 unused dependencies', impact: 'medium', effort: 'light' },
        { title: 'Break circular dependency in utils module', impact: 'high', effort: 'medium' }
      ]
    };
  
    // Styles for the demo widget
    const STYLES = `
      .bridge-demo {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: linear-gradient(135deg, #0a0a0f 0%, #111118 100%);
        color: #e2e8f0;
        border-radius: 12px;
        padding: 24px;
        max-width: 800px;
        margin: 0 auto;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      }
      .bridge-demo * { box-sizing: border-box; }
      .bridge-demo-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid #1e293b;
      }
      .bridge-demo-logo {
        width: 40px;
        height: 40px;
        background: #f97316;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 20px;
        clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
      }
      .bridge-demo-title {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
      }
      .bridge-demo-subtitle {
        font-size: 12px;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      .bridge-demo-score-section {
        display: flex;
        gap: 24px;
        margin-bottom: 24px;
      }
      .bridge-demo-score-main {
        flex: 0 0 120px;
        text-align: center;
      }
      .bridge-demo-score-circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: conic-gradient(
          #f97316 0deg,
          #f97316 calc(var(--score) * 3.6deg),
          #1e293b calc(var(--score) * 3.6deg)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 8px;
        position: relative;
      }
      .bridge-demo-score-circle::before {
        content: '';
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #0a0a0f;
        position: absolute;
      }
      .bridge-demo-score-value {
        position: relative;
        font-size: 28px;
        font-weight: 900;
        color: #fff;
      }
      .bridge-demo-grade {
        display: inline-block;
        padding: 4px 12px;
        background: #f9731620;
        color: #f97316;
        border: 1px solid #f9731640;
        border-radius: 4px;
        font-weight: 700;
        font-size: 14px;
      }
      .bridge-demo-breakdown {
        flex: 1;
        display: grid;
        gap: 8px;
      }
      .bridge-demo-breakdown-item {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .bridge-demo-breakdown-label {
        width: 100px;
        font-size: 12px;
        color: #94a3b8;
        text-transform: capitalize;
      }
      .bridge-demo-breakdown-bar {
        flex: 1;
        height: 8px;
        background: #1e293b;
        border-radius: 4px;
        overflow: hidden;
      }
      .bridge-demo-breakdown-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.5s ease;
      }
      .bridge-demo-breakdown-value {
        width: 32px;
        font-size: 12px;
        color: #64748b;
        text-align: right;
      }
      .bridge-demo-summary {
        background: #0f172a;
        border: 1px solid #1e293b;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 24px;
        font-size: 14px;
        line-height: 1.6;
        color: #cbd5e1;
      }
      .bridge-demo-issues {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        margin-bottom: 24px;
      }
      .bridge-demo-issue {
        background: #0f172a;
        border: 1px solid #1e293b;
        border-radius: 8px;
        padding: 12px;
        text-align: center;
      }
      .bridge-demo-issue-value {
        font-size: 24px;
        font-weight: 700;
        color: #f97316;
      }
      .bridge-demo-issue-label {
        font-size: 10px;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .bridge-demo-tasks {
        margin-bottom: 24px;
      }
      .bridge-demo-tasks-title {
        font-size: 12px;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 12px;
      }
      .bridge-demo-task {
        background: #0f172a;
        border: 1px solid #1e293b;
        border-radius: 8px;
        padding: 12px 16px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .bridge-demo-task-impact {
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .bridge-demo-task-impact.critical { background: #dc262620; color: #ef4444; border: 1px solid #dc262640; }
      .bridge-demo-task-impact.high { background: #ea580c20; color: #f97316; border: 1px solid #ea580c40; }
      .bridge-demo-task-impact.medium { background: #ca8a0420; color: #eab308; border: 1px solid #ca8a0440; }
      .bridge-demo-task-title {
        flex: 1;
        font-size: 13px;
        color: #e2e8f0;
      }
      .bridge-demo-task-effort {
        font-size: 11px;
        color: #64748b;
      }
      .bridge-demo-cta {
        text-align: center;
        padding-top: 16px;
        border-top: 1px solid #1e293b;
      }
      .bridge-demo-cta-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        background: #f97316;
        color: #000;
        font-weight: 700;
        font-size: 14px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .bridge-demo-cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4);
      }
      .bridge-demo-cta-link {
        display: block;
        margin-top: 12px;
        font-size: 12px;
        color: #64748b;
      }
      .bridge-demo-cta-link a {
        color: #f97316;
        text-decoration: none;
      }
      .bridge-demo-cta-link a:hover {
        text-decoration: underline;
      }
      @keyframes bridge-fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .bridge-demo-animate {
        animation: bridge-fade-in 0.5s ease forwards;
      }
    `;
  
    // Helper to get color based on score
    function getScoreColor(score) {
      if (score >= 90) return '#3b82f6';
      if (score >= 80) return '#10b981';
      if (score >= 70) return '#eab308';
      if (score >= 60) return '#f97316';
      return '#ef4444';
    }
  
    // Render the demo widget
    function render(container, data) {
      const analysis = data || SAMPLE_ANALYSIS;
      const scoreColor = getScoreColor(analysis.score.total);
  
      container.innerHTML = `
        <style>${STYLES}</style>
        <div class="bridge-demo bridge-demo-animate">
          <div class="bridge-demo-header">
            <div class="bridge-demo-logo">B</div>
            <div>
              <div class="bridge-demo-title">Bridge // Console</div>
              <div class="bridge-demo-subtitle">Technical Debt Analysis for ${analysis.meta.projectName}</div>
            </div>
          </div>
  
          <div class="bridge-demo-score-section">
            <div class="bridge-demo-score-main">
              <div class="bridge-demo-score-circle" style="--score: ${analysis.score.total}; background: conic-gradient(${scoreColor} 0deg, ${scoreColor} ${analysis.score.total * 3.6}deg, #1e293b ${analysis.score.total * 3.6}deg);">
                <span class="bridge-demo-score-value">${analysis.score.total}</span>
              </div>
              <span class="bridge-demo-grade">Grade ${analysis.score.grade}</span>
            </div>
  
            <div class="bridge-demo-breakdown">
              ${Object.entries(analysis.score.breakdown).map(([key, value]) => `
                <div class="bridge-demo-breakdown-item">
                  <span class="bridge-demo-breakdown-label">${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <div class="bridge-demo-breakdown-bar">
                    <div class="bridge-demo-breakdown-fill" style="width: ${value}%; background: ${getScoreColor(value)};"></div>
                  </div>
                  <span class="bridge-demo-breakdown-value">${value}</span>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div class="bridge-demo-summary">
            ${analysis.score.executiveSummary}
          </div>
  
          <div class="bridge-demo-issues">
            <div class="bridge-demo-issue">
              <div class="bridge-demo-issue-value">${analysis.issues.outdatedPkgs}</div>
              <div class="bridge-demo-issue-label">Outdated Packages</div>
            </div>
            <div class="bridge-demo-issue">
              <div class="bridge-demo-issue-value">${analysis.issues.circularDeps}</div>
              <div class="bridge-demo-issue-label">Circular Deps</div>
            </div>
            <div class="bridge-demo-issue">
              <div class="bridge-demo-issue-value">${analysis.issues.unusedDeps}</div>
              <div class="bridge-demo-issue-label">Unused Deps</div>
            </div>
            <div class="bridge-demo-issue">
              <div class="bridge-demo-issue-value">${analysis.issues.todoCount}</div>
              <div class="bridge-demo-issue-label">TODO Comments</div>
            </div>
          </div>
  
          <div class="bridge-demo-tasks">
            <div class="bridge-demo-tasks-title">Priority Actions</div>
            ${analysis.topTasks.map(task => `
              <div class="bridge-demo-task">
                <span class="bridge-demo-task-impact ${task.impact}">${task.impact}</span>
                <span class="bridge-demo-task-title">${task.title}</span>
                <span class="bridge-demo-task-effort">${task.effort} effort</span>
              </div>
            `).join('')}
          </div>
  
          <div class="bridge-demo-cta">
            <button class="bridge-demo-cta-button" onclick="window.open('https://github.com/bridge-console/bridge', '_blank')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Get Bridge for Your Repos
            </button>
            <div class="bridge-demo-cta-link">
              Free for open source. <a href="https://github.com/bridge-console/bridge">View on GitHub</a>
            </div>
          </div>
        </div>
      `;
    }
  
    // Initialize the demo
    function init(selector, customData) {
      const container = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  
      if (!container) {
        console.error('Bridge Demo: Container not found');
        return;
      }
  
      render(container, customData);
    }
  
    // Simulate a scan animation
    function simulateScan(selector, onComplete) {
      const container = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  
      if (!container) return;
  
      const phases = [
        'Cloning repository...',
        'Installing dependencies...',
        'Analyzing code structure...',
        'Checking dependencies...',
        'Calculating health score...',
        'Generating report...'
      ];
  
      container.innerHTML = `
        <style>${STYLES}</style>
        <div class="bridge-demo" style="text-align: center; padding: 48px 24px;">
          <div class="bridge-demo-logo" style="margin: 0 auto 24px;">B</div>
          <div class="bridge-demo-title" style="margin-bottom: 24px;">Analyzing Repository</div>
          <div id="bridge-scan-phase" style="color: #64748b; margin-bottom: 16px;">Initializing...</div>
          <div style="width: 200px; height: 4px; background: #1e293b; border-radius: 2px; margin: 0 auto; overflow: hidden;">
            <div id="bridge-scan-progress" style="height: 100%; width: 0%; background: #f97316; transition: width 0.3s;"></div>
          </div>
        </div>
      `;
  
      let phase = 0;
      const interval = setInterval(() => {
        if (phase >= phases.length) {
          clearInterval(interval);
          setTimeout(() => {
            render(container, SAMPLE_ANALYSIS);
            if (onComplete) onComplete(SAMPLE_ANALYSIS);
          }, 500);
          return;
        }
  
        document.getElementById('bridge-scan-phase').textContent = phases[phase];
        document.getElementById('bridge-scan-progress').style.width = `${((phase + 1) / phases.length) * 100}%`;
        phase++;
      }, 800);
    }
  
    // Expose the API
    global.BridgeDemo = {
      init,
      simulateScan,
      render,
      SAMPLE_ANALYSIS
    };
  
  })(typeof window !== 'undefined' ? window : this);
  