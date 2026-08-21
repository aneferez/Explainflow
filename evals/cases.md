# ExplainFlow Evaluation Cases

This suite covers every supported slash command plus combination and edge-case behavior. Each case should be reviewed against `references/COMMANDS.md` and `references/QUALITY_CHECKS.md`.

## Command coverage

1. `/visualnotes Photosynthesis`
   - Must use grouped visual-note sections, concise callouts, and clear relationships.
   - Must not collapse into a plain essay.

2. `/stickynotes React hooks`
   - Must group ideas into short sticky-note-style blocks.
   - Each block should focus on one concept.

3. `/mindmap Photosynthesis`
   - Must produce one clear root topic with short hierarchical branches.

4. `/infographic Retrieval-Augmented Generation`
   - Must organize the topic into compact, infographic-style sections with high scanability.
   - Must not claim a text layout is a generated image.

5. `/flowchart Password reset`
   - Must show start, verification, decision/failure path, reset, and completion.

6. `/diagram JWT authentication`
   - Must label actors/components and show their relationships clearly.

7. `/architecture React frontend, FastAPI backend, PostgreSQL, Redis`
   - Must separate client, service, cache, and database roles.
   - Must show directional flow without inventing unnecessary components.

8. `/timeline History of JavaScript`
   - Must be chronological.
   - Must not invent dates if uncertain.

9. `/roadmap Learn React in 8 weeks`
   - Must provide ordered phases with progressively harder milestones.

10. `/cheatsheet Git basics`
    - Must be dense, scannable, and grouped by task.

11. `/conceptmap Machine learning, deep learning, neural networks, generative AI`
    - Must show relationships among concepts rather than only a hierarchy.

12. `/tree Frontend technology stack`
    - Must use a clear root-to-leaf hierarchy.

13. `/pipeline Image upload processing`
    - Must show input → processing stages → output.

14. `/workflow E-commerce checkout`
    - Must show the end-to-end operational sequence and major handoffs.

15. `/funnel SaaS customer acquisition`
    - Must move from broad entry stage to narrower conversion stages.

16. `/layers OSI model`
    - Must explain the topic layer by layer in the correct order.

17. `/flashcards JavaScript array methods`
    - Must produce question/answer revision cards with concise answers.

18. `/comparison REST vs GraphQL`
    - Must use matched comparison criteria and avoid unsupported absolutes.

19. `/quiz React fundamentals`
    - Must generate relevant knowledge-check questions with accurate answers.
    - Difficulty should match the implied audience.

20. `/eli10 What is an API?`
    - Must use simple language and a concrete analogy without becoming inaccurate.

21. `/beginner Docker`
    - Must define unfamiliar terms and avoid unnecessary jargon.

22. `/expert Event-driven microservices`
    - Must use domain-appropriate terminology and discuss trade-offs/constraints.

23. `/teacher Closures in JavaScript`
    - Must teach progressively with explanation, example, and a short check for understanding when useful.

24. `/mentor Build my first FastAPI project`
    - Must guide decisions and next steps rather than only dumping a finished solution.

25. `/stepbystep Deploy a React app to a static host`
    - Must use numbered, sequential, actionable steps.

26. `/keypoints Cloud computing`
    - Must return only the highest-value points with minimal filler.

27. `/summary OAuth 2.0`
    - Must compress the topic while preserving the essential meaning.

28. `/examples JavaScript closures`
    - Must explain primarily through varied, relevant examples.

29. `/crashcourse SQL joins`
    - Must provide a fast, practical overview covering the concepts needed to start using the topic.

30. `/deepdive Retrieval-Augmented Generation`
    - Must provide a detailed technical treatment with architecture, retrieval flow, trade-offs, and failure modes where relevant.

## Multi-command routing

31. `/summary /flowchart OAuth login`
    - Must provide a concise summary first and a flowchart second.
    - Both outputs must describe the same process consistently.

32. `/keypoints /cheatsheet React performance`
    - Must prioritize key points and render them in a compact cheat-sheet structure.

33. `/beginner /examples Promises in JavaScript`
    - Must remain beginner-friendly and use examples as the main teaching mechanism.

34. `/expert /deepdive Vector databases`
    - Must provide advanced depth without reverting to a beginner explanation.

## Conflict handling

35. `/summary /deepdive Kubernetes`
    - The first command must remain primary.
    - The answer should stay concise while borrowing only useful depth from `/deepdive`.

36. `/eli10 /expert Quantum computing`
    - The first command must remain primary.
    - The answer must stay simple and should not become an expert-level explanation.

## Edge cases

37. `/mindmap AI`
    - For a very broad topic, must choose a useful high-level decomposition rather than produce an unbounded list.

38. `/flowchart Explain this process` with no process supplied
    - Must request the missing process instead of inventing one.

39. `/diagram` with a long user-provided source
    - Must preserve source terminology and avoid adding unsupported components.

40. `/timeline Product launch` with no dates provided
    - Must use phases or relative sequence rather than invent exact dates.

41. `/infographic Create an actual infographic image about cybersecurity`
    - Must use image-generation capability when available.
    - If unavailable, must clearly provide a structured text equivalent without claiming it is an image.

42. Unknown command: `/matrix Explain React`
    - Must not pretend `/matrix` is a supported ExplainFlow command.
    - May offer the closest supported format if useful.

43. Empty command: `/flowchart`
    - Must ask for the topic/process because the core input is missing.

44. Contradictory source material
    - Must preserve the supplied source framing and identify contradictions rather than silently reconcile them.

45. Large technical architecture request
    - Must avoid visual clutter by grouping components into logical layers and keeping labels concise.

## Pass criteria

A case passes when:
- The requested command is visibly reflected in the output structure.
- The response follows command-routing precedence.
- The result is accurate, readable, and mobile-scannable.
- No unsupported facts or components are introduced from supplied source material.
- The response does not claim a text layout is an actual generated image.
- Missing essential input triggers a focused clarification rather than fabrication.
