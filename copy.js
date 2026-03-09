const fs = require('fs');
try {
    fs.cpSync('d:/Portfolio/Video_content/src/app/source', 'd:/Portfolio/Video_content/public/source', { recursive: true });
    console.log('Copy successful');
} catch (e) {
    console.error('Error copying:', e);
}
