const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware di sicurezza
app.use(helmet({
  contentSecurityPolicy: false, // Disabilita CSP per ora
}));

// Compressione gzip
app.use(compression());

// Servire file statici dalla cartella public
app.use(express.static(path.join(__dirname, 'public')));

// Route di fallback per SPA (se necessario)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});