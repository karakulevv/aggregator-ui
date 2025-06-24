import React, { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

type Screenshot = {
  data: string; // base64
  ext: string;
};

const DeletionRequestTab: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    url: '',
    email: '',
    reason: '',
    screenshots: [] as Screenshot[],
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newScreenshots: Screenshot[] = [];
      let loaded = 0;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (ev) => {
          newScreenshots.push({
            data: ev.target?.result as string,
            ext: file.name.split('.').pop() || '',
          });
          loaded++;
          if (loaded === files.length) {
            setForm(f => ({ ...f, screenshots: newScreenshots }));
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/content/removal/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setMessage('Your request has been submitted and will be reviewed by our team.');
        setForm({ fullName: '', url: '', email: '', reason: '', screenshots: [] });
      } else {
        setStatus('error');
        setMessage('There was an error submitting your request. Please try again later.');
      }
    } catch {
      setStatus('error');
      setMessage('There was an error submitting your request. Please try again later.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-8">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Request Post Deletion</h2>
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded">
        <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-200">Content Removal Request – Instructions</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-2">
          <li>If you are the owner or lawful representative of content currently displayed on News Aggregator and would like it removed from our platform, please fill out the form below and include all of the following information:</li>
        </ul>
        <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-200">
          <li>Your full name and (if applicable) the organization you represent.</li>
          <li>Contact email address where we can reach you for any clarification.</li>
          <li>Direct URL(s) to the post(s) or article(s) you wish to have removed.</li>
          <li>Reason for removal (e.g., copyright ownership, personal data, outdated or inaccurate information).</li>
          <li>Proof of ownership or authorization (for example, a screenshot of the original Facebook Page admin panel or a short statement on official letterhead). <span className="font-semibold">A screenshot is required for authorization.</span></li>
        </ul>
        <div className="mt-2 text-gray-700 dark:text-gray-200">
          <p className="mb-1 font-semibold">What happens next</p>
          <ul className="list-disc list-inside ml-4">
            <li>We will acknowledge your request within 24 hours.</li>
            <li>If the submission contains all required details, the specified content will be removed from our database and caches within one business day.</li>
            <li>We will confirm removal by email.</li>
          </ul>
          <p className="mt-2">Need help? For questions about this process, contact us at <a href="mailto:vasil.karakulev@outlook.com" className="text-blue-600 underline">vasil.karakulev@outlook.com</a>.</p>
        </div>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-gray-700 dark:text-gray-200">Your Full Name (and Organization, if applicable):
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
        </label>
        <label className="text-gray-700 dark:text-gray-200">URL of the Post:
          <input type="url" name="url" value={form.url} onChange={handleChange} required className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
        </label>
        <label className="text-gray-700 dark:text-gray-200">Email for contact:
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
        </label>
        <label className="text-gray-700 dark:text-gray-200">Reason for deletion:
          <textarea name="reason" value={form.reason} onChange={handleChange} required className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
        </label>
        <label className="text-gray-700 dark:text-gray-200">Screenshots for authorization (at least one required):
          <input type="file" accept="image/*" multiple onChange={handleFileChange} required={form.screenshots.length === 0} className="mt-1 w-full p-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" />
        </label>
        {form.screenshots.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-2">
            {form.screenshots.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={img.data} alt={`Screenshot ${idx + 1}`} className="w-24 h-24 object-cover rounded border" />
                <span className="text-xs text-gray-500 mt-1">.{img.ext}</span>
              </div>
            ))}
          </div>
        )}
        <button type="submit" disabled={status === 'loading'} className="self-end px-6 py-2 rounded-lg font-semibold bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition disabled:opacity-60">{status === 'loading' ? 'Submitting...' : 'Submit Request'}</button>
      </form>
      {message && <div className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message}</div>}
    </div>
  );
};

export default DeletionRequestTab; 