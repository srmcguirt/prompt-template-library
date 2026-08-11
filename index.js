const fs = require('fs');
const path = require('path');

/**
 * Load all prompts from a category directory
 */
function loadCategory(categoryPath) {
  const prompts = {};
  if (!fs.existsSync(categoryPath)) return prompts;

  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const name = path.basename(file, '.md');
    const content = fs.readFileSync(path.join(categoryPath, file), 'utf-8');
    prompts[name] = content;
  }
  return prompts;
}

/**
 * Extract the prompt block from a template markdown file
 */
function extractPrompt(markdown) {
  const match = markdown.match(/```\n([\s\S]+?)\n```/);
  return match ? match[1].trim() : markdown;
}

/**
 * Fill template placeholders with values
 * @param {string} template - Prompt template text
 * @param {Object} vars - Key/value pairs to substitute for [PLACEHOLDER] tokens
 */
function fill(template, vars = {}) {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp(`\\[${key}\\]`, 'gi'), value);
  }
  return result;
}

/**
 * List all available prompts across all categories
 * @returns {Array<{category: string, name: string}>}
 */
function listAll() {
  const results = [];
  const categories = fs.readdirSync(PROMPTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const category of categories) {
    const dir = path.join(PROMPTS_DIR, category);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      results.push({ category, name: path.basename(file, '.md') });
    }
  }
  return results;
}

/**
 * Get a single prompt by category and name
 * @param {string} category - e.g. 'code-review'
 * @param {string} name - e.g. 'deep-code-review'
 * @returns {string|null} raw markdown, or null if not found
 */
function get(category, name) {
  const filePath = path.join(PROMPTS_DIR, category, `${name}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf-8');
}

const PROMPTS_DIR = path.join(__dirname, 'prompts');

const prompts = {
  // Original categories
  codeReview: loadCategory(path.join(PROMPTS_DIR, 'code-review')),
  debugging: loadCategory(path.join(PROMPTS_DIR, 'debugging')),
  architecture: loadCategory(path.join(PROMPTS_DIR, 'architecture')),
  testing: loadCategory(path.join(PROMPTS_DIR, 'testing')),
  prSummary: loadCategory(path.join(PROMPTS_DIR, 'pr-summary')),
  refactoring: loadCategory(path.join(PROMPTS_DIR, 'refactoring')),
  documentation: loadCategory(path.join(PROMPTS_DIR, 'documentation')),
  // New categories (v1.1)
  gitWorkflow: loadCategory(path.join(PROMPTS_DIR, 'git-workflow')),
  performance: loadCategory(path.join(PROMPTS_DIR, 'performance')),
  database: loadCategory(path.join(PROMPTS_DIR, 'database')),
  apiDesign: loadCategory(path.join(PROMPTS_DIR, 'api-design')),
  devops: loadCategory(path.join(PROMPTS_DIR, 'devops')),
  communication: loadCategory(path.join(PROMPTS_DIR, 'communication')),
};

module.exports = { prompts, extractPrompt, fill, listAll, get };
