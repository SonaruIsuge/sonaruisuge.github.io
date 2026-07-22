# OpenGL Shooting Game

## Overview

This project is a 2D bullet-hell shooter developed directly on top of OpenGL, without relying on a commercial game engine such as Unity or Unreal Engine. While the game itself is intentionally simple, the primary objective was to understand how a gameplay runtime is constructed from the ground up by implementing rendering, input handling, object management, collision detection, enemy spawning, and gameplay flow manually.

--- 
<br>

This project significantly improved my understanding of low-level game programming, particularly the relationship between rendering, gameplay logic, and resource management. More importantly, it reinforced the importance of designing systems around scalability and maintainability, even in relatively small projects.

## Technical Highlights

### Custom Gameplay Runtime

> **Built a minimal game runtime directly on OpenGL — window/context setup, input, resource loading, a deterministic main loop, and a reusable rendering abstraction over VAO/VBO/GLSL.**

The primary goal of this project was to understand what a game engine normally provides behind the scenes by building a minimal gameplay runtime directly on top of OpenGL.

The project is responsible for every stage of execution, including window creation, OpenGL context initialization, input registration, resource loading, rendering, gameplay updates, and shutdown. This explicit control exposes how individual gameplay systems depend on one another during every frame.

The main game loop follows a deterministic execution order. Each frame processes user input, updates timing information, advances gameplay systems, performs collision detection, updates enemy and projectile states, renders the scene, and finally swaps the frame buffer. Maintaining a consistent update order ensures that object interactions remain predictable while avoiding subtle synchronization issues between systems.

Rendering is implemented using a lightweight abstraction around VAOs, VBOs, and GLSL shader programs. Rather than exposing raw OpenGL calls throughout the codebase, rendering responsibilities are encapsulated inside reusable rendering classes that manage vertex buffers, shader uniforms, transformation matrices, and draw submission. This separation keeps gameplay logic independent from rendering implementation details while making the renderer easier to extend in the future.

### Object & Component Architecture

> **Combined a lightweight object hierarchy with composable, type-safe components (an ECS-lite approach) to keep class trees shallow and make expansion easy.**

The gameplay framework is built around a lightweight object hierarchy combined with a component-based architecture.

Every gameplay entity derives from a common Object base class responsible for lifecycle management and rendering. Additional functionality is attached through reusable components such as collision detection or weapon systems, allowing gameplay behaviors to be composed rather than duplicated across multiple classes.

While inheritance is still used to model high-level gameplay concepts—for example, Character, Enemy, and Boss—behavior that may be shared across otherwise unrelated objects is implemented as independent components. This approach keeps class hierarchies relatively shallow while encouraging code reuse.

To simplify component management, the project uses templated helper functions that provide type-safe access to attached components without requiring explicit casting. Although significantly lighter than a full Entity Component System (ECS), this architecture achieves many of the same benefits while remaining easy to understand and maintain.

Designing the gameplay framework this way also made future expansion considerably easier. New gameplay features can often be introduced by attaching additional components rather than modifying existing entity classes, reducing the likelihood of introducing regressions.

### Projectile Pooling & Collision Management

> **Recycled bullets through a custom Object Pool and centralized collision in dedicated managers to keep frame rate stable under heavy bullet counts.**

Bullet-heavy games frequently create large numbers of short-lived objects, making memory allocation an important consideration.

To avoid repeated heap allocations during gameplay, all projectiles are managed through a custom Object Pool. Instead of constructing and destroying bullets whenever weapons fire, inactive projectiles are recycled and returned to the pool after their lifetime expires.

This approach keeps allocation costs predictable while significantly reducing unnecessary memory churn during periods of intense combat. Since projectiles are among the most frequently created objects in the game, object pooling also improves frame consistency by minimizing runtime allocation spikes.

Weapon behavior is encapsulated inside reusable Shooting Components that request projectiles from the pool rather than creating them directly. This design separates weapon logic from projectile lifecycle management, allowing players, enemies, and bosses to share the same firing infrastructure regardless of their specific attack patterns.

Collision detection is centralized within dedicated manager classes using lightweight circular colliders. By handling collision queries in one location instead of distributing collision logic across individual entities, the system remains straightforward while keeping gameplay objects focused on their own responsibilities.

### Enemy Wave System & Boss State Machine

> **Managed enemies with a modular wave system and drove the multi-phase boss with an explicit State Machine for readable, easily extensible encounters.**

Enemy progression is organized around a modular wave management system.

Each wave defines its own spawn configuration, enemy composition, spawn timing, and progression conditions. Rather than embedding wave logic inside gameplay code, the level manager coordinates wave progression while allowing individual enemy classes to focus exclusively on movement and attack behavior.

Enemy behavior is intentionally distributed across specialized subclasses. Different enemy types implement unique movement patterns and firing logic while inheriting common functionality such as health management, activation state, and targeting behavior. This separation keeps enemy implementations compact and makes iteration significantly easier during gameplay balancing.

The boss encounter is implemented using an explicit State Machine instead of a single update function filled with conditional branches. Individual states encapsulate movement, attack patterns, and transition logic independently, allowing each phase to evolve without affecting the others.

This design greatly improves readability while reducing the complexity typically associated with multi-phase boss encounters. It also makes introducing additional boss phases considerably simpler, as new behaviors can be implemented as independent states rather than modifying existing logic.

### Data-driven Geometry Pipeline

> **Moved 2D geometry into custom .gd data files so visuals can change without recompiling — cleanly separating content from code.**

Rather than hardcoding geometry directly in C++, the project introduces a lightweight data-driven asset pipeline for simple 2D models.

Geometry is stored in custom .gd files containing vertex positions, colors, and collision radius information. During loading, these files are parsed into intermediate geometry data before being uploaded into GPU vertex buffers.

Separating geometry from source code significantly improves iteration speed. Adjusting the appearance of a player, enemy, or projectile no longer requires recompiling the entire application, allowing content changes to remain independent from gameplay implementation.

Although intentionally simple, this pipeline demonstrates the value of separating runtime systems from content data—a principle that scales well to larger game development pipelines using dedicated asset management tools.

## Stack
C++, OpenGL, GLFW, GLEW, GLM, GLSL, SOIL2, VAO / VBO, Orthographic Camera, Object Pool, State Machine, Data-driven Design, Collision Detection

## Period
Jan 2024 - Feb 2024

## Platform
Windows

## Type
Personal Project

## Links
[Repo](https://github.com/SonaruIsuge/OpenGL_exercise/tree/ShootingGame)
[Video](https://www.youtube.com/watch?v=Sm481ejpxCI)
