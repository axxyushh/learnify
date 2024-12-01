import { useState } from 'react';

const TriggerKestra = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const triggerWorkflow = async () => {
    setLoading(true);
    const res = await fetch('/api/triggerKestra', {
      method: 'POST',
    });
    const data = await res.json();
    setResponse(data);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={triggerWorkflow} disabled={loading}>
        {loading ? 'Triggering...' : 'Trigger Workflow'}
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default TriggerKestra;