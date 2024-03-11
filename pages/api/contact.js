async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    try {
      const addedMessage = await fetch('http://localhost:3001/messages', {
        method: 'POST',
        body: JSON.stringify({ email, name, message }),
        headers: { 'Content-Type': 'application/json' },
      });

      res
        .status(201)
        .json({ message: 'Success', addedMessage: await addedMessage.json() });
    } catch (e) {
      res.status(500).json({ message: 'DB error' });
      return;
    }
  }
}

export default handler;
