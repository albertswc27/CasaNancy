const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  
  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function createStaticExport() {
  const nextDir = '.next';
  const outDir = 'out';
  const publicDir = 'public';
  
  console.log('Creating static export...');
  
  // Create out directory
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });
  
  // Copy static files from .next/static
  if (fs.existsSync(path.join(nextDir, 'static'))) {
    copyDir(path.join(nextDir, 'static'), path.join(outDir, '_next', 'static'));
  }
  
  // Copy public assets
  if (fs.existsSync(publicDir)) {
    const publicFiles = fs.readdirSync(publicDir);
    for (const file of publicFiles) {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join(outDir, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  // Copy HTML files from .next/server/app
  const serverAppDir = path.join(nextDir, 'server', 'app');
  if (fs.existsSync(serverAppDir)) {
    // Copy index.html
    const indexHtmlPath = path.join(serverAppDir, 'index.html');
    const notFoundHtmlPath = path.join(serverAppDir, 'not-found.html');
    
    if (fs.existsSync(indexHtmlPath)) {
      fs.copyFileSync(indexHtmlPath, path.join(outDir, 'index.html'));
    }
    
    if (fs.existsSync(notFoundHtmlPath)) {
      fs.copyFileSync(notFoundHtmlPath, path.join(outDir, '404.html'));
    }
  }
  
  // If HTML files don't exist in the expected location, try to find them
  if (!fs.existsSync(path.join(outDir, 'index.html'))) {
    // Create a basic index.html from the built pages
    const pagesManifest = path.join(nextDir, 'server', 'pages-manifest.json');
    if (fs.existsSync(pagesManifest)) {
      const manifest = JSON.parse(fs.readFileSync(pagesManifest, 'utf8'));
      console.log('Pages manifest found:', Object.keys(manifest));
    }
    
    // Try to find pre-rendered HTML files
    function findHtmlFiles(dir, basePath = '') {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          findHtmlFiles(itemPath, path.join(basePath, item));
        } else if (item.endsWith('.html')) {
          const destPath = path.join(outDir, basePath, item);
          const destDir = path.dirname(destPath);
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }
          fs.copyFileSync(itemPath, destPath);
          console.log(`Copied HTML: ${itemPath} -> ${destPath}`);
        }
      }
    }
    
    findHtmlFiles(path.join(nextDir, 'server'));
  }
  
  console.log('Static export created successfully in ./out');
  console.log('Contents of out directory:');
  if (fs.existsSync(outDir)) {
    const files = fs.readdirSync(outDir);
    files.forEach(file => {
      console.log(`  ${file}`);
    });
  }
}

createStaticExport();