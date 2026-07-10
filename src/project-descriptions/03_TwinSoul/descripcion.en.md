# Twin Soul

## Overview

Twin Soul is a rhythm-based side-scrolling action game inspired by ancient Japanese mythology. Players control two different protagonists, synchronizing their actions with the music while battling enemies and uncovering the story.

--- 
<br>

This project was unique because it was developed collaboratively with another game studio. Their team owned the project's architecture and development workflow, while our team was responsible for implementing new features within their framework.Working in a cross-company environment required more than programming skills. I needed to quickly understand a large existing codebase, communicate technical issues clearly across teams, and design systems that fit seamlessly into an unfamiliar architecture.

## Technical Highlights

### Understanding a Large Existing Architecture

> **Tackled a heavily abstracted partner-studio codebase by mapping one subsystem at a time with architecture diagrams, quickly reaching the point where I could ship production features.**

The biggest challenge when joining the project was its complexity. Because the partner studio had developed its own framework and workflow, many systems were heavily abstracted and layered, making the overall architecture difficult to understand.

Rather than reading files one by one, I focused on understanding one subsystem at a time. I created architecture diagrams to visualize class relationships, data flow, and dependencies between systems.

This approach allowed me to identify how each subsystem interacted with the others and significantly shortened the time required before I could begin implementing production features.

### Vegetation System

> **Built a designer-facing procedural vegetation tool, then eliminated the resulting draw-call bottleneck with GPU Instancing (DrawMeshInstanced).**

One of my largest responsibilities was developing a vegetation system for level designers.

Initially, the requirement was to allow planners to quickly populate large areas with different types of grass. I developed a custom editor tool that generated vegetation procedurally based on configurable parameters, while also supporting editing and deleting vegetation within selected regions.

Since I anticipated very large environments, runtime performance was considered from the beginning. The system divided vegetation into chunks, updated visible regions according to player position, and reused objects through object pooling.

However, as production continued, the amount of vegetation placed by designers greatly exceeded the original assumptions, creating a new rendering bottleneck.

After investigating multiple optimization techniques, I implemented GPU Instancing using DrawMeshInstanced, rendering vegetation by sending transformation data directly to the GPU instead of instantiating GameObjects.

This dramatically reduced draw calls and solved the performance bottleneck while preserving the designers' workflow.

### Key Configuration System

> **Implemented keyboard/gamepad rebinding by leveraging Unity Input System's built-in features and focusing on save data, UI, and interaction flow.**

I implemented the game's key rebinding system for both keyboard and gamepad.

Although this was my first time developing a key configuration feature, Unity's Input System already provided built-in support for rebinding and conflict detection. Instead of reinventing those features, I focused on designing the surrounding systems, including persistent save data, UI updates, and user interaction flow.

This experience reinforced the importance of understanding existing frameworks before implementing custom solutions.

### Localized Texture System

> **Designed a modular, Addressables-based localization system with Observer-pattern auto-updates and a custom editor window to centralize texture management.**

During development, the project required different textures for multiple languages and platforms.

To simplify asset management, I designed a modular localization system consisting of four independent components:
- Localized Texture Component
- Texture Manager
- Localization Data Structure
- Custom Editor Tool

Texture assets were managed using Addressables. Since the target platform never changes while the game is running, platform-specific assets were loaded only once during startup.

For language switching, I implemented an Observer Pattern, allowing every localized component to update automatically whenever the language changed.

To improve workflow for designers, I also developed a custom editor window that centralized texture management. Instead of editing multiple ScriptableObjects individually, users could manage all localized textures, languages, and platforms from a single interface.

This significantly improved productivity and reduced configuration mistakes.

### Enemy AI Development

> **Analyzed and extended an undocumented enemy framework, refactoring duplicated base-class logic into reusable abstractions to simplify future enemy creation.**

I implemented several enemy types based on the project's existing enemy framework.

Since no architecture documentation was available, I first analyzed the base enemy implementation to understand component responsibilities and inheritance relationships before extending the system.

During development, I noticed duplicated functionality across multiple base classes. After discussing the changes, I extracted the common logic into reusable abstractions, reducing duplicated code and making future enemy implementations simpler.

This task helped me become much more comfortable working with large inheritance hierarchies and maintaining complex production code.

### Developer Tools

> **Built team-wide editor tools — a regex-based batch asset renamer and a Scene View camera-follow overlay — that became daily-use productivity boosters.**

Besides gameplay systems, I actively developed tools that improved the productivity of the entire development team.

1. Batch Asset Renaming Tool

When planners renamed a level, a large number of related assets also required renaming. To eliminate repetitive manual work, I developed a batch renaming tool using Regular Expressions and predefined naming conventions. Through a custom editor window, developers could rename hundreds of assets safely and consistently in only a few clicks.

2. Scene Camera Follow Tool

While developing a side-scrolling game, developers constantly needed to inspect gameplay around the player. Frequently repositioning the Unity Scene View camera became an everyday frustration, so I investigated Unity's editor APIs and created a lightweight custom overlay that automatically controlled the Scene View camera.

The tool supported three modes:
- Focus
- Follow
- Focus & Follow

Although technically simple, it became one of the team's most frequently used editor tools throughout development.

Seeing a small tool become part of everyone's daily workflow was especially rewarding because it demonstrated that improving developer experience can be just as valuable as implementing gameplay features.

## Stack
Unity, C#, GPU Instancing, Addressables, Input System, ScriptableObject, Custom Editor, Object Pooling, Design Pattern, Regular Expression, Performance Optimization, Git

## Period
Jan 2024 - Jan 2025

## Platform
Windows

## Type
Company Project

## Links
[Steam Page](https://store.steampowered.com/app/3844290/Twin_Soul/)
