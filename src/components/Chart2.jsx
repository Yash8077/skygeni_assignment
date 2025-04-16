import "./Chart.css"

function Chart2() {
  return (
    <div className="dashboard-container">
      <div className="tabs">
        <button className="tab-button active">SUMMARY</button>
        <button className="tab-button">WHAT-IF</button>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h3 className="chart-title">Win Rate by opportunity count: 13%</h3>
          <div className="chart-bars">
            {/* Suspect */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Suspect</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "100%" }}>
                    <div className="bar-value">24</div>
                  </div>
                </div>
                <span className="win-rate">13%</span>
              </div>
              <div className="transition-percentage">75%</div>
            </div>

            {/* Qualify */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Qualify</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "75%" }}>
                    <div className="bar-value">18</div>
                  </div>
                </div>
                <span className="win-rate">75%</span>
              </div>
              <div className="transition-percentage">44%</div>
            </div>

            {/* Demo */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Demo</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "33%" }}>
                    <div className="bar-value">8</div>
                  </div>
                </div>
                <span className="win-rate">44%</span>
              </div>
              <div className="transition-percentage">50%</div>
            </div>

            {/* Proposal */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Proposal</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "17%" }}>
                    <div className="bar-value">4</div>
                  </div>
                </div>
                <span className="win-rate">50%</span>
              </div>
              <div className="transition-percentage">75%</div>
            </div>

            {/* Negotiate */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Negotiate</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "12.5%" }}>
                    <div className="bar-value">3</div>
                  </div>
                </div>
                <span className="win-rate">75%</span>
              </div>
              <div className="transition-percentage">100%</div>
            </div>

            {/* Won */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Won</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "12.5%" }}>
                    <div className="bar-value">3</div>
                  </div>
                </div>
                <span className="win-rate">100%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Win Rate by ACV: 4%</h3>
          <div className="chart-bars">
            {/* Suspect */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Suspect</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "100%" }}>
                    <div className="bar-value">910,147</div>
                  </div>
                </div>
                <span className="win-rate">4%</span>
              </div>
              <div className="transition-percentage">74%</div>
            </div>

            {/* Qualify */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Qualify</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "74%" }}>
                    <div className="bar-value">673,147</div>
                  </div>
                </div>
                <span className="win-rate">5%</span>
              </div>
              <div className="transition-percentage">47%</div>
            </div>

            {/* Demo */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Demo</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "34%" }}>
                    <div className="bar-value">313,740</div>
                  </div>
                </div>
                <span className="win-rate">10%</span>
              </div>
              <div className="transition-percentage">44%</div>
            </div>

            {/* Proposal */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Proposal</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "15%" }}>
                    <div className="bar-value">136,818</div>
                  </div>
                </div>
                <span className="win-rate">23%</span>
              </div>
              <div className="transition-percentage">23%</div>
            </div>

            {/* Negotiate */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Negotiate</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "3.5%" }}>
                    <div className="bar-value">32,104</div>
                  </div>
                </div>
                <span className="win-rate">100%</span>
              </div>
              <div className="transition-percentage">100%</div>
            </div>

            {/* Won */}
            <div className="chart-bar-container">
              <div className="chart-bar-row">
                <span className="stage-label">Won</span>
                <div className="bar-background">
                  <div className="bar-fill" style={{ width: "3.5%" }}>
                    <div className="bar-value">32,104</div>
                  </div>
                </div>
                <span className="win-rate">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tables-container">
        <div className="table-card">
          <div className="table-wrapper">
            <table className="pipeline-table">
              <thead>
                <tr>
                  <th className="table-header">Stage</th>
                  <th className="table-header">Came to Stage</th>
                  <th className="table-header lost-header">Lost / Disqualified from Stage</th>
                  <th className="table-header moved-header">Moved to next stage</th>
                  <th className="table-header">Win Rate %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell">Suspect</td>
                  <td className="table-cell">24</td>
                  <td className="table-cell">6</td>
                  <td className="table-cell">18</td>
                  <td className="table-cell">13%</td>
                </tr>
                <tr>
                  <td className="table-cell">Qualify</td>
                  <td className="table-cell">18</td>
                  <td className="table-cell">10</td>
                  <td className="table-cell">8</td>
                  <td className="table-cell">17%</td>
                </tr>
                <tr>
                  <td className="table-cell">Demo</td>
                  <td className="table-cell">8</td>
                  <td className="table-cell">4</td>
                  <td className="table-cell">4</td>
                  <td className="table-cell">38%</td>
                </tr>
                <tr>
                  <td className="table-cell">Proposal</td>
                  <td className="table-cell">4</td>
                  <td className="table-cell">1</td>
                  <td className="table-cell">3</td>
                  <td className="table-cell">75%</td>
                </tr>
                <tr>
                  <td className="table-cell">Negotiate</td>
                  <td className="table-cell">3</td>
                  <td className="table-cell">0</td>
                  <td className="table-cell">3</td>
                  <td className="table-cell">100%</td>
                </tr>
                <tr className="won-row">
                  <td className="table-cell">Won</td>
                  <td className="table-cell">3</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">100%</td>
                </tr>
                <tr>
                  <td className="table-cell">Total</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">21</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-card">
          <div className="table-wrapper">
            <table className="pipeline-table">
              <thead>
                <tr>
                  <th className="table-header">Stage</th>
                  <th className="table-header">Came to Stage</th>
                  <th className="table-header lost-header">Lost / Disqualified from Stage</th>
                  <th className="table-header moved-header">Moved to next stage</th>
                  <th className="table-header">Win Rate %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell">Suspect</td>
                  <td className="table-cell">910,147</td>
                  <td className="table-cell">237,000</td>
                  <td className="table-cell">673,147</td>
                  <td className="table-cell">4%</td>
                </tr>
                <tr>
                  <td className="table-cell">Qualify</td>
                  <td className="table-cell">673,147</td>
                  <td className="table-cell">359,407</td>
                  <td className="table-cell">313,740</td>
                  <td className="table-cell">5%</td>
                </tr>
                <tr>
                  <td className="table-cell">Demo</td>
                  <td className="table-cell">313,740</td>
                  <td className="table-cell">176,922</td>
                  <td className="table-cell">136,818</td>
                  <td className="table-cell">10%</td>
                </tr>
                <tr>
                  <td className="table-cell">Proposal</td>
                  <td className="table-cell">136,818</td>
                  <td className="table-cell">104,714</td>
                  <td className="table-cell">32,104</td>
                  <td className="table-cell">23%</td>
                </tr>
                <tr>
                  <td className="table-cell">Negotiate</td>
                  <td className="table-cell">32,104</td>
                  <td className="table-cell">0</td>
                  <td className="table-cell">32,104</td>
                  <td className="table-cell">100%</td>
                </tr>
                <tr className="won-row">
                  <td className="table-cell">Won</td>
                  <td className="table-cell">32,104</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">100%</td>
                </tr>
                <tr>
                  <td className="table-cell">Total</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">878,043</td>
                  <td className="table-cell">-</td>
                  <td className="table-cell">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart2;
