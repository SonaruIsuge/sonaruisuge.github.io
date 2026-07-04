# Pin Invasion

## Overview

Pin Invasion is an experimental game that combines classic pinball mechanics with wave-based survival gameplay inspired by Vampire Survivors. Players continuously launch and bounce pinballs to defeat incoming enemies, gain experience, unlock upgrades, and ultimately challenge the final boss.

--- 
<br>

Unlike the previous commercial projects I worked on, Pin Invasion started as an internal prototype where the team explored different gameplay ideas from scratch. After numerous design discussions, we decided to expand the concept into a hybrid of pinball and survival defense.

Because the team was relatively small, I was responsible for designing and implementing many of the game's core systems. This project gave me the opportunity to think beyond individual features and instead focus on building a scalable architecture that would support rapid iteration throughout development.

## Technical Highlights

### Game Flow & Architecture

One of my primary responsibilities was designing the overall game flow.

The game lifecycle was managed through a singleton-based Game Manager, while gameplay progression was organized using a State Machine. Each game state was responsible for its own logic, UI updates, and transitions, allowing systems to remain independent while keeping the overall flow easy to understand.

To further reduce coupling between systems, I adopted an event-driven architecture. Rather than directly referencing one another, gameplay systems subscribed to events only when necessary, improving modularity and making future features easier to integrate.

For level management, I separated gameplay logic and environment assets using Multiple Scenes. This structure simplified level expansion while allowing only the required scenes to be loaded, reducing runtime overhead.

Overall, the architecture emphasized maintainability, scalability, and loose coupling.

### Enemy & Wave System

The enemy framework was designed to prioritize composition over inheritance.

The base enemy class only contained essential behavior and virtual interfaces, while additional functionality was implemented through reusable components. This approach reduced inheritance complexity and made creating new enemy types much faster.

Enemy spawning was built on an Object Pool, minimizing runtime allocations. Spawn position calculation was abstracted through interfaces, allowing different spawning strategies to be implemented without modifying the spawning system itself.

Wave progression followed a data-driven approach using ScriptableObjects. Combined with UniTask, the wave controller managed enemy spawning asynchronously and also supported starting the game from any wave, greatly improving debugging and playtesting efficiency.

### Upgrade System

The upgrade system was designed around flexibility and future expansion.

A central Upgrade Manager maintained all upgrade data and dynamically filtered the available upgrade choices based on the player's current progression.

Gameplay abilities shared a common abstract base class, allowing every skill to be triggered through the same interface while keeping each implementation independent.

This architecture made it straightforward to introduce new upgrades and abilities without modifying existing gameplay logic, significantly reducing future maintenance costs.

## Stack
Unity, C#, State Machine, Event System, ScriptableObject, UniTask, Object Pooling, Design Patterns, Git

## Links
Private
