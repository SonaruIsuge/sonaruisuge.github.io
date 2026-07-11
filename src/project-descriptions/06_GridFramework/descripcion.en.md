# Grid Framework

## Overview

This project is an experimental framework built to explore grid-based game systems, with a particular focus on reusable grid architecture, pathfinding, and building placement. Rather than targeting a specific game genre, the project aims to provide a flexible foundation that can support various gameplay mechanics such as city builders, tower defense games, simulation games, or tactical RPGs.

The framework is developed during my spare time as a technical research project. Instead of implementing gameplay first, I focused on designing reusable systems that could be extended in future projects. Current development includes a generic grid system, an optimized A* pathfinding implementation, asynchronous pathfinding, NPC navigation, and a modular building placement system.

Although the project is still in an early stage, it has become a valuable playground for experimenting with architecture design, algorithm optimization, and scalable gameplay systems outside of commercial production constraints.

## Technical Highlights

### Generic Grid Framework

> **Designed a reusable generic grid framework that decouples gameplay logic from grid management, enabling multiple systems—including pathfinding, building placement, and future gameplay mechanics—to share the same underlying infrastructure.**

The project is built upon a generic grid framework designed to separate grid management from gameplay logic.

Instead of storing game-specific information directly inside the grid, each grid cell can store arbitrary user-defined data through generic programming. This allows the same grid implementation to support multiple gameplay systems without modification.

The framework provides bidirectional conversion between world coordinates and grid coordinates, allowing gameplay systems to seamlessly translate player interactions into logical grid positions.

To improve modularity, the grid system exposes change notifications through delegates. Whenever a grid cell is modified, subscribed systems receive automatic updates without requiring direct dependencies on the grid itself. This event-driven approach simplifies synchronization between gameplay systems while reducing coupling.

### Optimized A* Pathfinding

> **Built an asynchronous A\* pathfinding system with heap-based optimization, multithreading, terrain weighting, and path simplification to improve scalability and runtime performance.**

Navigation is implemented using the A* pathfinding algorithm on top of the generic grid framework.

To improve search efficiency, the open set is implemented using a binary heap instead of a linear container. Selecting the node with the lowest evaluation cost is therefore reduced from O(N) to O(log N), significantly improving performance on larger maps.

Pathfinding requests are executed asynchronously on a background thread. Rather than blocking Unity's main thread during expensive searches, worker threads calculate the path independently before safely returning the result through thread synchronization mechanisms. This allows multiple NPCs to request paths without noticeably affecting frame rate.

Once a path has been generated, unnecessary intermediate nodes along straight segments are removed through simple geometric analysis. This reduces memory usage while producing cleaner movement paths for navigation.

The framework also supports weighted movement costs, allowing different terrain types to influence path selection. NPCs naturally avoid expensive terrain and choose more efficient routes without requiring additional gameplay logic.

### NPC Navigation

> **Implemented a responsive NPC navigation system using asynchronous movement tasks and geometric waypoint detection to achieve smooth path following while supporting dynamic path updates.**

NPC movement is implemented independently from the pathfinding system.

Movement updates are managed using UniTask, making it straightforward to cancel an existing navigation task whenever a new destination is requested. This prevents multiple movement routines from running simultaneously while simplifying asynchronous control flow.

To produce smoother movement, waypoint transitions are determined using geometric calculations instead of relying solely on distance thresholds. By evaluating whether the NPC has crossed the perpendicular line of the current waypoint segment, direction changes occur naturally without abrupt stopping or oscillation around target nodes.

Separating navigation from path generation also allows alternative pathfinding algorithms to be integrated in the future without modifying movement behavior.

### Grid-based Building System

> **Developed a modular building system on top of the generic grid framework, supporting multi-layer placement, object rotation, and flexible grid interaction without introducing grid-specific dependencies.**

The building system is implemented entirely on top of the generic grid framework. 

Mouse positions are converted into grid coordinates, allowing buildings to snap precisely onto valid cells regardless of camera position or world scale.

Buildings can be rotated in 90-degree increments before placement, enabling more flexible layouts while keeping alignment with the underlying grid.

To support more advanced construction scenarios, each grid cell maintains multiple placement layers instead of storing a single object. This allows different categories of objects to occupy the same grid position without interfering with one another.

The framework also includes object removal functionality. Individual layers can be modified independently, allowing specific buildings to be removed while preserving objects stored in other layers.

By treating construction as an extension of the grid framework rather than a standalone gameplay feature, the system remains highly reusable and can easily be adapted for different genres in future projects.

## Stack
Unity, C#, A* Pathfinding, UniTask, Multi-threading, Heap, Building System

## Period
Mar 2026 - Jul 2026

## Platform
Windows

## Type
Side Project

## Links
[Repo](https://github.com/SonaruIsuge/grid-system)
