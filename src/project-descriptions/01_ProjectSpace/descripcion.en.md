# Project Space

## Overview

Project Space was a local cooperative party game developed during my internship over the course of two months together with another intern responsible for the art.

The game supports up to four local players. Players take on the role of penguins cleaning up space debris within a limited amount of time. Each player can freely move and float in zero gravity, switching between different tools to collect trash, gather scattered objects, and sort them into the appropriate recycling facilities.

--- 
<br>

This project was my first experience participating in a professional game development workflow from start to finish. Instead of immediately jumping into implementation, I learned how to validate ideas through documentation, technical planning, and estimation before writing a single line of code. It gave me a much broader understanding of how professional game development is organized beyond programming itself.

## Technical Highlights

### Game Design Documentation (GDD, TDD & Estimation)

> **Spent the first week writing the GDD, TDD, and effort estimates before a single line of code — turning documentation into the roadmap that guided the entire two-month build.**

One of the biggest differences from student projects was learning how much preparation happens before development begins.

During the first week, we created a complete Game Design Document (GDD) describing gameplay, mechanics, and feature requirements. Based on the GDD, I wrote the Technical Design Document (TDD) for the programming side, analyzing technical challenges and implementation approaches before estimating the development effort for each system.

Although this documentation work initially felt less exciting than programming, it became the roadmap that guided the entire two-month development process and greatly improved task planning and communication.

### Local Multiplayer with Unity Input System

> **Used Unity's Input System with device-pairing events to reliably map up to four controllers to players, including seamless reconnection mid-game.**

Supporting four local players required a reliable way to determine which controller belonged to which player.

After researching several approaches, I chose Unity's Input System, using device pairing events to dynamically assign controllers to players. The system also supported reconnecting disconnected devices without interrupting gameplay, providing a much smoother multiplayer experience.

### Lightweight Tutorial System

> **Shipped a full tutorial in just a few days by combining async/await dialogue flow, per-action input-lock tracking, and an event-driven architecture.**

As playtesting progressed, we realized new players struggled to learn the controls. However, the project was already approaching its deadline.

To rapidly implement a tutorial, I identified three essential components: dialogue progression, player input locking, and dynamic UI updates.

Using asynchronous programming (async/await), I built a dialogue flow controller while maintaining a dictionary that tracked the lock state of each input action. Combined with an event-driven architecture, this allowed different gameplay mechanics to be enabled or disabled at specific tutorial stages.

The entire tutorial system was completed in only a few days and successfully integrated into the game.

### Physics Refactoring through Component-based Movement

> **Refactored player movement into swappable, interface-based components so I could compare implementations freely — ultimately choosing a Rigidbody controller for a better feel.**

Since the game takes place in space, player movement relied heavily on physics.

The original implementation used CharacterController, but after extensive tuning, the movement still felt unnatural. Instead of replacing everything outright, I separated the movement logic from the player object by defining a movement interface and implementing movement as interchangeable components.

This allowed me to experiment with multiple movement implementations without affecting the rest of the player system.

After comparing different approaches, I ultimately chose a Rigidbody-based controller, which provided much more satisfying movement while keeping the architecture flexible for future iteration.

### Improving UI/UX through World Integration

> **Rebuilt the UI as part of the game world — spaceship control panels instead of menus — using Cinemachine, DOTween, and async transitions for immersive onboarding.**

Originally, the game's UI only displayed information and menu screens.

Following feedback from senior developers, we redesigned the experience so that the UI became part of the game world itself. The lobby interface was integrated into the spaceship's control panels instead of appearing as traditional menus.

Using Cinemachine, DOTween, and asynchronous transitions, we created a more immersive player onboarding experience while making controller pairing visually engaging rather than purely functional.

This significantly improved both presentation and user experience.

## Stack
Unity, C#, Input System, Cinemachine, DOTween, Async/Await, Interface-based Architecture, Unity Physics, Event-driven Design, Git

## Period
Feb 2023 - April 2023

## Platform
Windows

## Type
Professional Project

## Links
[Repo](https://github.com/SonaruIsuge/ProjectSpace/tree/develop)
[Video](https://www.youtube.com/watch?v=4CMfkhOZMS4)
