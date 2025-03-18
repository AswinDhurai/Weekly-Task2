import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Allow Nuxt frontend
  methods: ['POST', 'GET'], // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type']
}));

const slidesFilePath = path.join(process.cwd(), 'slides.md');

if (!fs.existsSync(slidesFilePath)) {
  fs.writeFileSync(slidesFilePath, '', 'utf8');
}

app.post('/save-slide', (req, res) => {
  try {
    const { markdown } = req.body;
    if (!markdown) {
      return res.status(400).json({ error: 'Markdown content is required' });
    }

    fs.appendFileSync(slidesFilePath, `\n\n---\n\n${markdown}`, `utf8`);
    res.json({ message: 'Slide updated successfully!' });
  } catch (error) {
    console.error('Error saving slide:', error);
    res.status(500).json({ error: 'Failed to update slide' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Slidev API running on http://localhost:${PORT}`);
});
