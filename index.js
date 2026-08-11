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

const PROMPTS_DIR = path.join(__dirname, 'prompts');

const prompts = {
  codeReview: loadCategory(path.join(PROMPTS_DIR, 'code-review')),
  debugging: loadCategory(path.join(PROMPTS_DIR, 'debugging')),
  architecture: loadCategory(path.join(PROMPTS_DIR, 'architecture')),
  testing: loadCategory(path.join(PROMPTS_DIR, 'testing')),
  prSummary: loadCategory(path.join(PROMPTS_DIR, 'pr-summary')),
  refactoring: loadCategory(path.join(PROMPTS_DIR, 'refactoring')),
  documentation: loadCategory(path.join(PROMPTS_DIR, 'documentation')),
};

module.exports = { prompts, extractPrompt, fill };
