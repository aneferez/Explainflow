export const EXPLAINFLOW_FORMATS = [
  "visualnotes",
  "stickynotes",
  "mindmap",
  "infographic",
  "flowchart",
  "diagram",
  "architecture",
  "timeline",
  "roadmap",
  "cheatsheet",
  "conceptmap",
  "tree",
  "pipeline",
  "workflow",
  "funnel",
  "layers",
  "flashcards",
  "comparison",
  "quiz",
  "eli10",
  "beginner",
  "expert",
  "teacher",
  "mentor",
  "stepbystep",
  "keypoints",
  "summary",
  "examples",
  "crashcourse",
  "deepdive"
] as const;

export type ExplainFlowFormat = (typeof EXPLAINFLOW_FORMATS)[number];

export type FormatRule = {
  purpose: string;
  required: string[];
  avoid: string[];
};

export const FORMAT_RULES: Record<ExplainFlowFormat, FormatRule> = {
  visualnotes: {
    purpose: "Turn the topic into highly scannable visual study notes.",
    required: ["group related ideas into short blocks", "use concise labels and explicit relationships", "surface only high-value details"],
    avoid: ["long essay paragraphs", "decorative structure that obscures meaning"]
  },
  stickynotes: {
    purpose: "Explain the topic as short sticky-note-style concept blocks.",
    required: ["one core idea per block", "short titles", "clear grouping"],
    avoid: ["dense prose", "mixing unrelated concepts in one block"]
  },
  mindmap: {
    purpose: "Represent the topic as a single-root hierarchy.",
    required: ["one clear root", "short branches", "logical parent-child relationships"],
    avoid: ["paragraph-length nodes", "multiple competing root topics"]
  },
  infographic: {
    purpose: "Create an infographic-style structured explanation.",
    required: ["compact sections", "headline facts", "high scanability", "clear hierarchy"],
    avoid: ["claiming text is an actual generated image", "wall-of-text output"]
  },
  flowchart: {
    purpose: "Show a process or decision path from start to finish.",
    required: ["start state", "directional transitions", "decision branches when needed", "end state"],
    avoid: ["ambiguous arrows", "missing failure/alternate path where the process requires one"]
  },
  diagram: {
    purpose: "Show labeled components and their relationships.",
    required: ["component labels", "relationship labels or arrows", "compact layout"],
    avoid: ["inventing unsupported components", "unlabeled connectors"]
  },
  architecture: {
    purpose: "Explain software or system architecture by layers and data/control flow.",
    required: ["separate clients, services, data stores, and external systems when relevant", "directional flow", "component responsibility"],
    avoid: ["inventing infrastructure not implied by the request", "visual clutter"]
  },
  timeline: {
    purpose: "Present events or stages chronologically.",
    required: ["explicit order", "consistent granularity", "dates only when known or supplied"],
    avoid: ["invented dates", "mixing chronology with unrelated grouping"]
  },
  roadmap: {
    purpose: "Turn a goal into progressive milestones or phases.",
    required: ["ordered phases", "milestones", "increasing complexity", "clear outcomes"],
    avoid: ["unordered task dump", "unrealistic precision without evidence"]
  },
  cheatsheet: {
    purpose: "Create a compact high-density reference.",
    required: ["group by task or concept", "short definitions/syntax/examples", "minimal filler"],
    avoid: ["narrative essay", "repeating the same concept in multiple sections"]
  },
  conceptmap: {
    purpose: "Show relationships among multiple concepts.",
    required: ["explicit relationship labels", "cross-links when meaningful", "distinguish hierarchy from association"],
    avoid: ["reducing everything to a simple tree", "unexplained links"]
  },
  tree: {
    purpose: "Represent a root-to-leaf hierarchy.",
    required: ["single root", "clear nesting", "mutually understandable branches"],
    avoid: ["cycles", "paragraph-length leaves"]
  },
  pipeline: {
    purpose: "Show input, processing stages, and output.",
    required: ["input", "ordered processing stages", "output", "direction of flow"],
    avoid: ["unordered steps", "missing handoffs"]
  },
  workflow: {
    purpose: "Show an end-to-end operational workflow.",
    required: ["trigger/start", "major handoffs", "decisions when relevant", "completion state"],
    avoid: ["isolated steps with no handoff", "missing actors when actors matter"]
  },
  funnel: {
    purpose: "Show progression from a broad entry stage to narrower conversion stages.",
    required: ["ordered stages", "clear narrowing logic", "conversion objective"],
    avoid: ["reversing stage order", "invented conversion metrics"]
  },
  layers: {
    purpose: "Explain the topic layer by layer.",
    required: ["correct layer order", "responsibility of each layer", "interfaces between adjacent layers when useful"],
    avoid: ["mixing layers", "omitting ordering"]
  },
  flashcards: {
    purpose: "Create concise question/answer revision cards.",
    required: ["one concept per card", "concise answer", "coverage of core concepts"],
    avoid: ["trick questions unless requested", "answers longer than necessary"]
  },
  comparison: {
    purpose: "Compare two or more things using matched criteria.",
    required: ["same criteria for each option", "trade-offs", "neutral wording"],
    avoid: ["unsupported absolutes", "comparing different criteria across options"]
  },
  quiz: {
    purpose: "Test understanding with relevant questions and accurate answers.",
    required: ["questions aligned to the topic", "answer key", "difficulty matched to audience"],
    avoid: ["ambiguous answers", "irrelevant trivia"]
  },
  eli10: {
    purpose: "Explain simply for a roughly 10-year-old audience.",
    required: ["simple language", "concrete analogy", "retain factual accuracy"],
    avoid: ["unnecessary jargon", "oversimplification that becomes wrong"]
  },
  beginner: {
    purpose: "Teach a beginner with definitions and low assumed knowledge.",
    required: ["define unfamiliar terms", "progressive explanation", "small examples"],
    avoid: ["unexplained jargon", "assuming prior expertise"]
  },
  expert: {
    purpose: "Provide an advanced domain-appropriate explanation.",
    required: ["precise terminology", "trade-offs", "constraints", "failure modes when relevant"],
    avoid: ["basic-only treatment", "unsupported certainty"]
  },
  teacher: {
    purpose: "Teach progressively and check understanding.",
    required: ["concept explanation", "worked example", "progression from simple to harder", "short understanding check when useful"],
    avoid: ["answer dump without teaching", "jumping directly to advanced details"]
  },
  mentor: {
    purpose: "Guide the user through decisions and next actions.",
    required: ["decision guidance", "trade-offs", "next steps", "questions only when genuinely needed"],
    avoid: ["dumping a finished solution without guidance", "generic motivational filler"]
  },
  stepbystep: {
    purpose: "Provide a numbered sequential procedure.",
    required: ["numbered steps", "one main action per step", "dependencies in correct order"],
    avoid: ["unordered bullets", "hidden prerequisite steps"]
  },
  keypoints: {
    purpose: "Return only the highest-value points.",
    required: ["prioritized points", "minimal filler", "short explanations only when needed"],
    avoid: ["long background sections", "minor details that dilute the main points"]
  },
  summary: {
    purpose: "Compress the topic while preserving essential meaning.",
    required: ["core idea", "critical supporting points", "concise structure"],
    avoid: ["new unsupported information", "excessive depth"]
  },
  examples: {
    purpose: "Teach primarily through examples.",
    required: ["multiple relevant examples", "brief explanation of what each demonstrates", "varied cases when useful"],
    avoid: ["abstract-only explanation", "examples unrelated to the user's context"]
  },
  crashcourse: {
    purpose: "Provide a fast practical overview sufficient to start using the topic.",
    required: ["core concepts", "essential terminology", "small practical examples", "common mistakes"],
    avoid: ["encyclopedic depth", "rare edge cases before fundamentals"]
  },
  deepdive: {
    purpose: "Provide a detailed technical treatment.",
    required: ["architecture or conceptual model", "mechanics", "trade-offs", "failure modes", "practical implications"],
    avoid: ["surface-only definitions", "unsupported implementation claims"]
  }
};

export function recommendFormat(goal: string): ExplainFlowFormat {
  const g = goal.toLowerCase();
  if (/compare|versus|vs\b|difference/.test(g)) return "comparison";
  if (/architecture|system design|components|service/.test(g)) return "architecture";
  if (/process|decision|flow|sequence/.test(g)) return "flowchart";
  if (/timeline|history|chronolog|when/.test(g)) return "timeline";
  if (/roadmap|learn|plan|milestone/.test(g)) return "roadmap";
  if (/revision|cheat|reference|interview/.test(g)) return "cheatsheet";
  if (/quiz|test me|questions/.test(g)) return "quiz";
  if (/flashcard|memor/.test(g)) return "flashcards";
  if (/expert|deep|advanced|trade-off/.test(g)) return "deepdive";
  if (/beginner|simple|eli10|child/.test(g)) return "beginner";
  if (/steps|how to|procedure|deploy|install/.test(g)) return "stepbystep";
  if (/summary|summarize|brief/.test(g)) return "summary";
  if (/hierarchy|mind map|mindmap/.test(g)) return "mindmap";
  return "visualnotes";
}
