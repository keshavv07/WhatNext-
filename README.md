# WhatNext?

WhatNext? 🔭
You picked your subjects. Now find out what you can actually do with them.

The Problem
At every stage of education, students pick subject combinations — sometimes by choice, sometimes by what was available, sometimes just because a friend took the same stream. But very rarely does anyone sit down and explain what that specific combination actually unlocks.
The internet has plenty of "careers in Computer Science" articles. It has plenty of "what to do after Psychology" listicles. What it does not have is a clear answer for the student who studied CS and Psychology together, or Physics and CS without Chemistry, or someone doing Statistics as an elective alongside a Business major. Those combinations fall through the cracks every time.
WhatNext? is built specifically for that gap.

What It Does
Pick your education level. Add the subjects you're studying or planning to study. Hit explore. The app shows you what career paths, higher education options, and industries become accessible with that exact combination — not each subject in isolation, but the combination as a whole.
There's also a compare feature where you can swap one subject and immediately see how the outcome changes. It's genuinely useful whether you're still deciding your subjects or already midway through and wondering what comes next.

Features

Three education levels — School (11th/12th), Undergraduate, and Postgraduate
Subject tag picker — add and remove subjects dynamically, no page reload
Combination-based results — outcomes are mapped to subject combinations, not individual subjects
Swap & compare — replace one subject and see how your paths shift
Save your combinations — store multiple sets locally and come back to them
Fully offline-ready — all data is curated and bundled, no API calls needed


Why Pre-defined Curated Data
Using a curated dataset was a deliberate choice. It means every result shown in the app has been thought through and written intentionally — not generated on the fly. The tradeoff is coverage, and that's a fair one. The app focuses on the most common and meaningful subject combinations across Indian education levels, which covers the vast majority of what students actually encounter. The upside is reliability: the app works the same way every time, with no loading states, no API failures, and no internet dependency.

Tech Stack

React — all UI built with functional components and hooks
React Router — multi-page navigation between levels and result views
useState / useEffect — state management and side effects throughout
localStorage — saving and retrieving subject combinations across sessions
Tailwind CSS — layout and styling
