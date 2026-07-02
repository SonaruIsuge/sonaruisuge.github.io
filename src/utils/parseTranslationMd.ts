export function parseTranslationMd(raw: string): Record<string, string> {
  const result: Record<string, string> = {};

  // Filter out empty sections and split by "### " which indicates a new section in the markdown
  const sections = raw.split(/^### /m).filter(Boolean);

  for (const section of sections) {
    
    // The first line is the key, the rest is the value
    const newlineIndex = section.indexOf('\n');
    const key = section.slice(0, newlineIndex).trim();
    const value = section.slice(newlineIndex).trim();

    if (key) result[key] = value;
  }

  return result;
}