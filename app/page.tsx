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

        {/* Conversation History */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Conversation History</h2>

          <div className="space-y-6 leading-relaxed">
            <div>
              <p className="font-medium">Customer (8/28/2025, 1:26:30 PM):</p>
              <p><strong>Subject:</strong> 500 Internal Server Error on Production Site</p>
              <p>
                <strong>Description:</strong> Our production site is showing a "500 Internal Server Error" on every page, which is quite
                concerning. I noticed that the preview deployments from pull requests are working fine, so it seems limited to the production
                environment. I tried clearing the cache and redeploying, but the issue persists.
              </p>
            </div>

            <div>
              <p className="font-medium">Jared Alvarez (8/28/2025, 1:38:42 PM):</p>
              <p>
                Hi Alex,
              </p>
              <p>
                Thank you for reaching out to Vercel support teams. My name is Jared and I will be assisting you with this case.
              </p>
              <p>
                I understand that a status 500 Internal Server Error is returned on every page within your production environment, and despite
                clearing the cache and redeploying, the issue still persists. Please feel free to correct me if I have misunderstood any details
                regarding this issue.
              </p>
              <p>To start, I would like to ask if you could please share the following, as this would help us better understand and investigate the issue from our side:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Full resource logs reflecting the status 500 error.</li>
                <li>HAR file from browser when a status 500 is returned.</li>
                <li>Date/time this issue began.</li>
                <li>Any additional/helpful information regarding this behavior.</li>
              </ul>
              <p>
                Generally, a status 500 indicates an issue with the request being forwarded to the backend from the client. Therefore, if there
                is a misconfigured connection string, incorrect endpoint URL, environment variable, or any service/resource related issues,
                these can all be return a status 500 Internal Server Error. Therefore, any resource logs, HAR files, or additional details
                regarding this issue would be immensely helpful moving forward.
              </p>
              <p>
                Lastly, because this issue seems to be isolated to the production environment, and preview deployments work as expected, I
                suspect that there may be an issue with existing environment variables between environments. Comparing the preview deployment
                environment variables to your production environment would be a valid step moving forward.
              </p>
              <p>
                In the meantime, please do not hesitate to reply back with any updates, questions, or concerns regarding this case. I am more
                than happy to assist further.
              </p>
              <p>Thank you again for reaching out today.</p>
              <p>Take care and have a wonderful rest of your day ahead.</p>
            </div>

            <div>
              <p className="font-medium">Customer (8/28/2025, 1:38:52 PM):</p>
              <p>Hi Jared,</p>
              <p>Thanks for getting back to me. The issue started two days ago. Here's a snippet from the logs:</p>
              <pre className="bg-black/5 dark:bg-white/10 rounded p-3 overflow-x-auto text-sm">
                <code>{`2025-05-12T20:01:58.045Z  INFO  Deployment started
...
2025-05-12T20:02:11.123Z  ERROR  PrismaClientInitializationError: Environment variable not found: DATABASE_URL
...
2025-05-12T20:05:23.789Z  ERROR  [GET] /api/users 500 Internal Server Error`}</code>
              </pre>
              <p>
                I haven't checked the environment variables between preview and production yet, but I'll look into that next. Let me know if
                there's anything else you need!
              </p>
            </div>

            <div>
              <p className="font-medium">Jared Alvarez (8/28/2025, 1:46:01 PM):</p>
              <p>Hello again,</p>
              <p>Thank you for sharing the resource log with timestamps. That helps a lot with troubleshooting this issue.</p>
              <p>
                From what I can see in the resource logs shared, the error string "PrismaClientInitializationError: Environment variable not
                found: DATABASE_URL" indicates why this status 500 Internal Server Error is being returned.
              </p>
              <p>
                During initialization of your environment, any dependencies and environment variables are being initialized and loaded. After
                this occurs, and the function is being invoked, a GET request is made to a database URL. This database URL is referenced as an
                environment variable within your application, the request is failing because this environment variable cannot be found during
                the initialization phase of the Prisma client.
              </p>
              <p>
                Therefore, to resolve this issue, please update your application to include the environment variable key "DATABASE_URL." After
                doing so, please make sure that your environment variable value matches the correct URL of your database endpoint (for example:
                https://mydatabase.com).
              </p>
              <p>
                If the issue persists after making those changes, I would like to ask that you please provide updated logs for me to review on
                my side.
              </p>
              <p>
                As always, please do not hesitate to reply back with any updates regarding this case. I am more than happy to assist further.
              </p>
              <p>Thank you again for that reply back.</p>
              <p>Looking forward to hearing back from you soon.</p>
            </div>

            <div>
              <p className="font-medium">Customer (8/28/2025, 1:46:04 PM):</p>
              <p>
                Hi Jared, Thank you so much for pointing that out. I hadn't realized the <code>DATABASE_URL</code> was missing in production.
                I'll add it right away and redeploy. I really appreciate your help with this!
              </p>
            </div>

            <div>
              <p className="font-medium">Jared Alvarez (8/28/2025, 1:48:46 PM):</p>
              <p>
                Hi Alex, Thank you for that reply back. I am delighted that we were able to identify and resolve the issue. Thank you for your
                time and patience while we worked to resolve this case. It has been a pleasure. If there is any further assistance that we can
                provide, please do not hesitate to reach back out to Vercel support teams. We are always happy to help. Take care and have a
                wonderful rest of your day ahead.
              </p>
            </div>

            <div>
              <p className="font-medium">Customer (8/28/2025, 1:48:48 PM):</p>
              <p>
                Thanks, Jared! I'm relieved we got to the bottom of it. I appreciate your quick help. Have a great day!
              </p>
            </div>
          </div>
        </section>

        {/* Questionnaire */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Questionnaire Responses</h2>
          <p><strong>Completed At:</strong> 8/28/2025, 2:35:11 PM</p>

          <div className="space-y-8 leading-relaxed mt-4">
            <div>
              <p className="font-medium text-lg">Support Task Preferences</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Respond to 25+ support requests via email every day</strong> — Rating: 3/5 (Neutral). Responding to emails is somewhat of a neutral feeling. Responding to emails that resolve the customer issue, and reinforce customer confidence in support teams is what I would prefer.</li>
                <li><strong>Dig through logs to troubleshoot a customer's broken project</strong> — Rating: 5/5 (Most Favorite). I have a passion for problem solving and fixing/debugging complex systems.</li>
                <li><strong>Write and maintain support articles and docs pages</strong> — Rating: 5/5 (Most Favorite). Whatever helps our support teams and customers become more efficient at solving issues and providing general guidance is something I would be highly interested in.</li>
                <li><strong>Create video tutorials to help teach users a specific feature or use case</strong> — Rating: 5/5 (Most Favorite). Screen recording of walkthroughs and tutorials is something that interests me.</li>
                <li><strong>Help resolve billing issues for customers</strong> — Rating: 5/5 (Most Favorite). Similar to troubleshooting complex issues, diving into resource spending to help customers identify and resolve billing issues is also of high interest for me.</li>
                <li><strong>Analyze hundreds of support tickets to spot trends the product team can use</strong> — Rating: 5/5 (Most Favorite). This is extremely important in the context of using support automation and AI…</li>
                <li><strong>Identify, file (and, where possible, resolve) bugs in GitHub repos</strong> — Rating: 4/5 (Like). Similar to resolving complex customer issues…</li>
                <li><strong>Manage a support team</strong> — Rating: 5/5 (Most Favorite). If given the opportunity…</li>
                <li><strong>Find and recruit teammates for the support team</strong> — Rating: 5/5 (Most Favorite). Identifying potential candidates…</li>
                <li><strong>Help train and onboard new support teammates</strong> — Rating: 5/5 (Most Favorite). New hires work best when they are trained well…</li>
                <li><strong>Run ticket review sessions to make sure tone is consistent</strong> — Rating: 4/5 (Like). Quality is extremely important…</li>
                <li><strong>Work with 3rd-party partners to help a joint customer</strong> — Rating: 5/5 (Most Favorite). Solving customer issues through 3rd party providers…</li>
                <li><strong>Work with the product team on a new feature based on feedback</strong> — Rating: 5/5 (Most Favorite). Working amongst teams…</li>
                <li><strong>Respond to queries on Twitter, Reddit, Hacker News, etc.</strong> — Rating: 3/5 (Neutral).</li>
                <li><strong>Act as a dedicated CSE for key customers</strong> — Rating: 5/5 (Most Favorite). Building a strong customer relationship…</li>
                <li><strong>Collaborate with engineering teams during incidents</strong> — Rating: 5/5 (Most Favorite). This is necessary…</li>
                <li><strong>Schedule time-off coverage for the support team</strong> — Rating: 3/5 (Neutral).</li>
                <li><strong>Engage multiple users at once in a public forum</strong> — Rating: 3/5 (Neutral).</li>
                <li><strong>Help people decide if Vercel is suitable for their use-case</strong> — Rating: 5/5 (Most Favorite). This reinforces support team knowledge…</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-lg">Vercel Fluid Compute</p>
              <p><strong>Pros:</strong> Very similar to AWS Lambda; Reduced cold start invocation latency; Concurrency scaling; Automatic scaling; Good for AI workloads and long connections.</p>
              <p><strong>Cons:</strong> Strictly runs on Vercel platform; Breadth of integrations does not match AWS.</p>
              <p><strong>Use-cases:</strong> AI chatbots (long connections); App streaming; Low-latency web apps; API routing; Authentication and middleware.</p>
            </div>

            <div>
              <p className="font-medium text-lg">Past Technical Issue Resolution</p>
              <p>
                Because Fluid Compute is similar in nature to AWS Lambda… (full narrative retained). Customer hit regional concurrency quota due to a retry loop causing invocation storms; identified via metrics + logs; advised removing retry loop and fixing incorrect endpoint; tightened VPC SGs; customer avoided unnecessary concurrency increase and left positive feedback to leadership.
              </p>
            </div>

            <div>
              <p className="font-medium text-lg">First Six Months at Vercel Goals</p>
              <ul className="list-disc list-inside space-y-1">
                <li>A deep understanding of Vercel services and resources</li>
                <li>Optimizing and providing support for customers</li>
                <li>Building a strong and reliable support structure with Vercel</li>
                <li>Being a mentor / “go to” person for other engineers</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-lg">AI in Your Work</p>
              <p>
                AI should be used with guardrails to avoid exposing confidential data. Experience building RAG knowledge bases in AWS Bedrock; interest in chatbot to deflect low-tier tickets; users must know when not to share secrets.
              </p>
            </div>

            <div>
              <p className="font-medium text-lg">Assessment Feedback</p>
              <p>
                Make the text windows larger to avoid excessive scrolling; add more mock tickets/cases to better evaluate candidates in realistic scenarios.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
