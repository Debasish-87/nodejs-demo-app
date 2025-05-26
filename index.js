import express from 'express';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';

const app = express();
const PORT = 3000;

console.log(
  gradient.rainbow(
    figlet.textSync('DevOps CI/CD!', { horizontalLayout: 'full' })
  )
);

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello, DevOps CI/CD World!</h1>
    <p>This is your basic Node.js app running successfully.</p>
  `);
});

app.listen(PORT, () => {
  console.log(chalk.green(`✅ Server is up and running on port ${PORT}`));
});
