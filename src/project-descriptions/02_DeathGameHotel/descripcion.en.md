# Death Game Hotel

## Overview

Death Game Hotel is an online multiplayer VR card game where players gamble everything they own—including parts of their own bodies—in pursuit of enormous wealth. Every match is a high-risk psychological battle where a single decision can completely change the outcome.

--- 
<br>

This was the second project I worked on during my internship. By the time I joined, development was already well underway, so one of my first challenges was understanding an unfamiliar production codebase within a limited amount of time.

My responsibilities included developing interactive VR objects, maintaining and redesigning an existing VR UI system, and investigating performance issues related to UI and font rendering. Through this project, I gained hands-on experience with commercial game development, VR interaction design, and multiplayer networking.

## Technical Highlights

### Interactive Objects in a Multiplayer Environment

My initial assignment was to implement several interactive objects used throughout the game.

The core interaction framework had already been established, allowing me to focus on implementing the unique behavior of each object. During development, I encountered synchronization issues where certain interactions were not correctly replicated across clients.

After studying Photon Fusion's networking model and discussing the problem with senior engineers, I identified the synchronization bottleneck and resolved it using RPC-based communication, ensuring consistent gameplay behavior across all connected players.

Beyond solving the immediate issue, this experience gave me a much deeper understanding of multiplayer synchronization and network authority.

### Refactoring a Large VR UI System

One of the largest tasks I was assigned was refactoring the project's VR UI system.

The UI handled nearly every player interaction—including room management, tutorials, in-game menus, and item purchasing—and had been modified by multiple developers over time. As a result, the hierarchy and dependencies had become increasingly difficult to understand and maintain.

I first documented the relationships between every UI page to visualize the overall architecture before removing obsolete objects and redundant logic. I then reorganized the hierarchy, introduced helper scripts to reduce duplicated code, and simplified the communication between UI components.

During the refactoring process, I also discovered several unnecessary cross-system UI updates that negatively impacted rendering performance. After eliminating these bottlenecks, both the maintainability and runtime performance of the UI were significantly improved.

This project taught me the importance of understanding an existing architecture before attempting to improve it.

### Optimizing Text Rendering with Dynamic Fonts

Because the game contained a large amount of Japanese text, the generated TextMeshPro font atlases became excessively large, increasing memory usage and build size.

Instead of accepting the limitation, I researched the official TextMeshPro documentation and investigated the Dynamic Font Asset workflow.

After implementing and validating the new solution, I confirmed that dynamic font generation substantially reduced font asset size while maintaining visual quality.

Although the implementation itself was relatively small, this experience was especially rewarding because it was the first time I independently researched a technical problem, evaluated the available solutions, verified the results through experimentation, and successfully introduced the improvement into a commercial project.

## Stack
Unity, C#, VR, Photon Fusion, TextMeshPro, Addressables, ScriptableObject, GitLab

## Period
Apr 2023 - Jul 2023

## Links
[Trailer](https://www.youtube.com/watch?v=RVi0f6ZA8n8)
[Game Page](https://www.meta.com/ja-jp/experiences/death-game-hotel-a-white-owls-game/7371422382882960/)
