export const solvers: Record<string, Function> = {
    'node-global-objects': () => {
        // In a real Node.js environment:
        // const nodeVersion = process.version;
        // const currentDirectory = __dirname;
        // return `Node Version: ${nodeVersion}\nRunning in: ${currentDirectory}`;
        return `(Conceptual) In Node.js, this would show info like:\nNode Version: v18.12.1\nRunning in: /path/to/project`;
    },
    'node-fs-readfile': () => {
        return `// Conceptual Node.js code:\nconst fs = require('fs');\n\nfs.readFile('/path/to/file.txt', 'utf8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log(data);\n});`;
    },
    'node-http-server': () => {
        return `// Conceptual Node.js code:\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(3000, '127.0.0.1', () => {\n  console.log('Server running...');\n});`;
    },
};