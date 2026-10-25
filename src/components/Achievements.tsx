export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-label="Achievements">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">06 // Competitive Programming</span>
          <h2 className="section-title">
            Algorithmic <span className="accent">Achievements</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="achievements-grid">
          <div className="achievement-card reveal-left">
            <div className="achievement-number">500+</div>
            <div className="achievement-label">LeetCode Problems Solved</div>
            <p className="achievement-desc">
              Extensive problem-solving experience encompassing Core Data Structures &amp; Algorithms: Arrays, Two Pointers, Sliding Window, Trees, Graphs (BFS/DFS, Dijkstra), Dynamic Programming, and Greedy algorithms.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="https://leetcode.com/u/Tushar_Sharad_Matey/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                View LeetCode Profile ↗
              </a>
            </div>
          </div>

          <div className="achievement-card reveal-right">
            <div className="achievement-number">1600+</div>
            <div className="achievement-label">Contest Rating (40+ Contests)</div>
            <p className="achievement-desc">
              Regular participant in official LeetCode Weekly &amp; Biweekly algorithmic contests. Demonstrates algorithmic agility, time-pressured debugging, and optimal time/space complexity optimization in competitive environments.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="skill-tag">40+ Contests</span>
                <span className="skill-tag">Rating: 1600+</span>
                <span className="skill-tag">C++ (DSA)</span>
                <span className="skill-tag">Clean Complexity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
