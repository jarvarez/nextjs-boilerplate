export default function Home() {
  return (
    <main className="font-sans min-h-screen p-8 sm:p-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <header>
          <h1 className="text-3xl font-bold mb-2">Vercel Support Technical Assessment</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Transcript & Questionnaire — Jared Alvarez
          </p>
        </header>

        {/* Instructions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Deploying to Vercel</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>If you haven’t already, create a free GitHub, GitLab or Bitbucket account.</li>
            <li>Create a free Hobby account on Vercel using one of those providers.</li>
            <li>Create a project on Vercel and ensure “Create private Git repository” is selected.</li>
            <li>Use the Transcript and Questionnaire responses below as the content for your project.</li>
          </ol>
        </section>

        {/* Prerequisites */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Configure basic access authentication using Edge Middleware on your project.</li>
            <li>Set unique login credentials that differ from the template defaults.</li>
          </ul>
        </section>

        {/* Transcript */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Support Session Transcript</h2>
          <p><strong>Session ID:</strong> 6etiepPW</p>
          <p><strong>Candidate:</strong> Jared Alvarez</p>
          <p><strong>Download Date:</strong> 8/28/2025, 2:35:16 PM</p>

          <div className="mt-6 space-y-4 leading-relaxed">
            <p><strong>Customer:</strong> 500 Internal Server Error on Production Site …</p>
            <p><strong>Jared Alvarez:</strong> Thank you for reaching out … (full reply)</p>
            <p><strong>Customer:</strong> Here’s a snippet from logs … DATABASE_URL missing …</p>
            <p><strong>Jared Alvarez:</strong> Based on logs, missing env var DATABASE_URL …</p>
            <p><strong>Customer:</strong> Thanks, Jared! I’ll fix that right away …</p>
          </div>
        </section>

        {/* Questionnaire */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Questionnaire Responses</h2>

          <div className="space-y-6 leading-relaxed">
            <div>
              <p className="font-medium">Support Task Preferences</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Email support: 3/5 — Neutral</li>
                <li>Dig through logs: 5/5 — Most Favorite</li>
                <li>Write docs: 5/5 — Most Favorite</li>
                <li>Create video tutorials: 5/5 — Most Favorite</li>
                <li>Billing issues: 5/5 — Most Favorite</li>
                <li>Analyze tickets: 5/5 — Most Favorite</li>
                <li>Bug resolution: 4/5 — Like</li>
                <li>Manage a team: 5/5 — Most Favorite</li>
                <li>Recruit teammates: 5/5 — Most Favorite</li>
                <li>Onboard new hires: 5/5 — Most Favorite</li>
                <li>Ticket review sessions: 4/5 — Like</li>
                <li>3rd-party partners: 5/5 — Most Favorite</li>
                <li>Product team features: 5/5 — Most Favorite</li>
                <li>Social media queries: 3/5 — Neutral</li>
                <li>Dedicated CSE: 5/5 — Most Favorite</li>
                <li>Incident collaboration: 5/5 — Most Favorite</li>
                <li>Schedule coverage: 3/5 — Neutral</li>
                <li>Public forums: 3/5 — Neutral</li>
                <li>Help with use-cases: 5/5 — Most Favorite</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Vercel Fluid Compute</p>
              <p><strong>Pros:</strong> Similar to Lambda, reduced cold starts, concurrency scaling, automatic scaling, good for AI/long connections.</p>
              <p><strong>Cons:</strong> Locked to Vercel, fewer integrations than AWS.</p>
              <p><strong>Use-cases:</strong> AI chatbots, app streaming, low-latency APIs, routing, authentication.</p>
            </div>

            <div>
              <p className="font-medium">Past Technical Issue Resolution</p>
              <p>Example: Resolved AWS Lambda concurrency throttling caused by retries loop … (full detailed story you wrote).</p>
            </div>

            <div>
              <p className="font-medium">First Six Months at Vercel Goals</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Deep understanding of Vercel services</li>
                <li>Optimize customer support</li>
                <li>Build strong support structure</li>
                <li>Mentor peers / be a go-to engineer</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">AI in Your Work</p>
              <p>AI should be used with guardrails; I’ve built RAG knowledge bases in AWS Bedrock; potential for AI to handle low-tier tickets …</p>
            </div>

            <div>
              <p className="font-medium">Assessment Feedback</p>
              <p>Make text windows larger; add more mock tickets to test candidates in realistic scenarios …</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
