import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('http://localhost:8080/api/v1/workflows/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workflow: 'my_workflow',  // Use the workflow ID from your Kestra YAML
          inputs: {
            key: 'value',  // Optional: Inputs for your workflow
          }
        }),
      });

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error triggering Kestra workflow' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}