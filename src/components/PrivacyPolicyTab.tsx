import React from 'react';

type PrivacyPolicyTabProps = {
  onRequestDeletion: () => void;
};

const PrivacyPolicyTab: React.FC<PrivacyPolicyTabProps> = ({ onRequestDeletion }) => (
  <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy</h2>
    <p className="text-gray-500 text-sm mb-6">Last updated: 24 June 2025</p>
    <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-200">
      <li>
        <span className="font-semibold">Who we are</span><br />
        "News Aggregator" is a news-aggregation service operated by Vasil Karakulev. You can reach us at <a href="mailto:vasil.karakulev@outlook.com" className="text-blue-600 underline">vasil.karakulev@outlook.com</a>.
      </li>
      <li>
        <span className="font-semibold">What data we collect today</span><br />
        We collect no personal data about visitors or end-users. The only information stored in our database is:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Text, media URLs, and timestamps of public Facebook page posts.</li>
          <li>Text, images, and timestamps of public web-site articles.</li>
          <li>System logs containing standard server diagnostics (IP address, timestamp, request path) kept for 7 days for security.</li>
        </ul>
      </li>
      <li>
        <span className="font-semibold">Why we store this information</span><br />
        We process public-post content solely to:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Display the latest municipal news in one place.</li>
          <li>Provide full-text search across public updates.</li>
        </ul>
        We do not build user profiles, run behavioural ads, or resell data.
      </li>
      <li>
        <span className="font-semibold">Legal basis (GDPR Art. 6 §1 f)</span><br />
        Processing public content is necessary for our legitimate interest in publishing a curated local news feed. We store only material already made public by its original author.
      </li>
      <li>
        <span className="font-semibold">Future metrics (planned)</span><br />
        If we later measure how many users clicked or liked an article, we will store that data only in aggregated, non-identifiable form. Any future collection of personal data will be announced here before activation.
      </li>
      <li>
        <span className="font-semibold">Data retention</span><br />
        Public-content records are kept for up to 30 days; older items are automatically deleted.<br />
        System logs are rotated after 7 days.<br />
        Back-ups are encrypted and retained for 14 days.
      </li>
      <li>
        <span className="font-semibold">Sharing & third-party services</span><br />
        Facebook Graph API – source of public posts.<br />
        OpenAI LLM API – used (when enabled) to generate English headlines from Macedonian text. We send only post text; no user data is transmitted.<br />
        We do not share data with advertisers or analytics companies.
      </li>
      <li>
        <span className="font-semibold">Cookies & tracking</span><br />
        Our public site sets no cookies. If we add optional features that require cookies (e.g., login or dark-mode), these will be strictly necessary and documented here.
      </li>
      <li>
        <span className="font-semibold">Your rights</span><br />
        Because we store no personal data, most GDPR data-subject rights (access, rectification, portability) do not apply. If you are the owner of a Facebook page or web site we index, you may request removal of your content—see §10.
      </li>
      <li>
        <span className="font-semibold">Content removal requests</span><br />
        <span>To request removal of your content, <button className="text-blue-600 underline hover:text-blue-800" onClick={onRequestDeletion}>click here</button> to go to the content removal page.</span>
      </li>
      <li>
        <span className="font-semibold">Changes to this policy</span><br />
        We may update this notice to reflect new features or legal requirements. The "Last updated" date at the top will change; significant changes will be announced on our home page.
      </li>
      <li>
        <span className="font-semibold">Contact</span><br />
        Vasil Karakulev<br />
        E-mail: <a href="mailto:vasil.karakulev@outlook.com" className="text-blue-600 underline">vasil.karakulev@outlook.com</a>
      </li>
    </ol>
  </div>
);

export default PrivacyPolicyTab; 