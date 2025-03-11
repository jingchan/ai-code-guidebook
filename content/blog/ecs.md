+++
title = "Suggestions for Components and Systems."
date = 2025-03-12
template = "blog-page.html"
[taxonomies]
tags = ["prompt", "list", "ecs", "components"]
+++

# ECS Suggestions

## Components

### **1. Core Components**

These are fundamental components that most entities will use.

1. **Transform**: Position, rotation, and scale in 3D space.
2. **Velocity**: Linear velocity for movement.
3. **Acceleration**: Rate of change of velocity.
4. **AngularVelocity**: Rotational speed.
5. **AngularAcceleration**: Rate of change of angular velocity.
6. **Parent**: Entity that this entity is a child of.
7. **Children**: List of child entities.
8. **Tag**: A string or enum for categorizing entities.
9. **Name**: A human-readable identifier for the entity.
10. **Active**: Whether the entity is active or inactive.

---

### **2. Rendering Components**

Components related to visual representation.

11. **Mesh**: Reference to a 3D mesh.
12. **Material**: Reference to a material/shader.
13. **Texture**: Reference to a texture.
14. **Color**: Base color for rendering.
15. **UVOffset**: Texture coordinate offset.
16. **Animation**: Current animation state.
17. **Sprite**: 2D image for rendering.
18. **Billboard**: Always faces the camera.
19. **Light**: Light source properties (color, intensity, range).
20. **ShadowCaster**: Whether the entity casts shadows.
21. **ShadowReceiver**: Whether the entity receives shadows.
22. **ParticleEmitter**: Emits particles for effects.
23. **Decal**: Projects a texture onto surfaces.
24. **LOD**: Level of detail for rendering.
25. **Transparency**: Controls opacity.
26. **Reflection**: Reflectivity properties.
27. **Refraction**: Refraction properties.
28. **Glow**: Emissive glow effect.
29. **Outline**: Outline rendering for selection or highlighting.
30. **Camera**: Defines a viewport and projection.

---

### **3. Physics Components**

Components for physics simulation.

31. **Collider**: Defines collision shape (e.g., box, sphere, capsule).
32. **Rigidbody**: Physical properties (mass, drag, gravity).
33. **Trigger**: Detects overlaps without physical collision.
34. **Force**: Applied force for movement.
35. **Torque**: Applied rotational force.
36. **Gravity**: Custom gravity settings.
37. **Friction**: Surface friction.
38. **Bounciness**: How much the entity bounces on collisions.
39. **Kinematic**: Whether the entity is controlled by scripts rather than
    physics.
40. **RaycastHit**: Stores results of a raycast.
41. **Buoyancy**: Simulates floating in fluids.
42. **WindAffected**: Responds to wind forces.
43. **HingeJoint**: Rotational constraint between entities.
44. **SpringJoint**: Elastic constraint between entities.
45. **FixedJoint**: Rigidly connects two entities.
46. **Ragdoll**: Simulates physics-based character animation.
47. **WaterSurface**: Defines a water plane for physics interactions.
48. **Cloth**: Simulates cloth physics.
49. **Softbody**: Simulates soft, deformable physics.
50. **ExplosionForce**: Applies force in a radial pattern.

---

### **4. Animation Components**

Components for animating entities.

51. **Animator**: Controls animation states and transitions.
52. **BlendShape**: Morph target for facial expressions.
53. **Bone**: Part of a skeleton for rigging.
54. **IKTarget**: Target for inverse kinematics.
55. **AnimationClip**: Reference to a specific animation.
56. **AnimationSpeed**: Playback speed of animations.
57. **AnimationEvent**: Triggers events during animation playback.
58. **LipSync**: Synchronizes mouth movements with audio.
59. **FacialExpression**: Controls facial animations.
60. **Gesture**: Hand or body gestures for characters.

---

### **5. Audio Components**

Components for sound and music.

61. **AudioSource**: Plays sounds or music.
62. **AudioListener**: Represents the "ear" for 3D audio.
63. **SoundEffect**: Short audio clip for effects.
64. **MusicTrack**: Background music.
65. **Volume**: Controls audio volume.
66. **Pitch**: Controls audio pitch.
67. **SpatialBlend**: Balances 2D and 3D audio.
68. **ReverbZone**: Applies reverb effects.
69. **AudioClip**: Reference to an audio file.
70. **AudioLoop**: Whether the audio loops.

---

### **6. AI and Behavior Components**

Components for AI and entity behavior.

71. **AIState**: Current state of the AI (e.g., idle, chasing).
72. **Pathfinding**: Pathfinding data and goals.
73. **Waypoint**: A point in a path.
74. **BehaviorTree**: Hierarchical AI decision-making.
75. **Blackboard**: Shared data for AI decisions.
76. **Target**: Entity to target (e.g., for attacks or movement).
77. **VisionCone**: Defines what the entity can "see."
78. **HearingRange**: Defines what the entity can "hear."
79. **PatrolRoute**: Path for patrolling behavior.
80. **Flocking**: Group movement behavior.
81. **Steering**: Steering behaviors (e.g., seek, flee).
82. **Aggression**: How aggressive the entity is.
83. **Fear**: How fearful the entity is.
84. **Curiosity**: How curious the entity is.
85. **Memory**: Stores information about the environment.
86. **DecisionMaker**: Makes decisions based on inputs.
87. **UtilityAI**: Scores actions based on utility.
88. **Goal**: What the AI is trying to achieve.
89. **Action**: An action the AI can perform.
90. **ReactionTime**: How quickly the AI reacts.

---

### **7. Gameplay Components**

Components for gameplay mechanics.

91. **Health**: Current and maximum health.
92. **Damage**: Amount of damage the entity can deal.
93. **Armor**: Reduces incoming damage.
94. **Experience**: Tracks experience points.
95. **Level**: Current level of the entity.
96. **Inventory**: Stores items.
97. **Equipment**: Items currently equipped.
98. **Weapon**: Defines weapon properties.
99. **Ammo**: Tracks ammunition.
100.  **Cooldown**: Time before an action can be performed again.
101.  **Timer**: Counts down time for events.
102.  **Score**: Tracks points or score.
103.  **Objective**: Defines a goal or objective.
104.  **Quest**: Tracks quest progress.
105.  **Dialogue**: Stores dialogue lines.
106.  **Interaction**: Defines how the entity can be interacted with.
107.  **Pickup**: Can be picked up by the player.
108.  **Door**: Can be opened or closed.
109.  **Switch**: Can be toggled on or off.
110.  **Key**: Unlocks something (e.g., a door).
111.  **Lock**: Requires a key to unlock.
112.  **Trap**: Damages or hinders entities.
113.  **Checkpoint**: Saves progress.
114.  **Respawn**: Defines respawn behavior.
115.  **Team**: Which team the entity belongs to.
116.  **Faction**: Relationship with other factions.
117.  **Reputation**: How others perceive the entity.
118.  **Stealth**: How stealthy the entity is.
119.  **Detection**: How easily the entity is detected.
120.  **Reward**: What the entity gives when defeated or interacted with.

---

### **8. UI Components**

Components for user interface elements.

121. **UIElement**: Base component for UI elements.
122. **Button**: Clickable UI button.
123. **Text**: Displays text.
124. **Image**: Displays an image.
125. **Slider**: Adjustable slider.
126. **ProgressBar**: Shows progress.
127. **Dropdown**: Selectable dropdown menu.
128. **InputField**: Text input field.
129. **Tooltip**: Displays additional information on hover.
130. **HUD**: Heads-up display elements.
131. **Menu**: Collection of UI elements.
132. **Cursor**: Custom cursor behavior.
133. **Notification**: Displays temporary messages.
134. **HealthBar**: Displays health.
135. **Minimap**: Displays a small map.
136. **Crosshair**: Aiming reticle.
137. **Scoreboard**: Displays scores.
138. **TimerUI**: Displays a countdown.
139. **InventoryUI**: Displays inventory.
140. **DialogueUI**: Displays dialogue.

---

### **9. Networking Components**

Components for multiplayer and networking.

141. **NetworkID**: Unique identifier for networked entities.
142. **Replication**: Synchronizes data across the network.
143. **Latency**: Simulates network latency.
144. **PacketLoss**: Simulates packet loss.
145. **Authority**: Which client or server has control.
146. **Snapshot**: Stores a snapshot of the entity's state.
147. **Prediction**: Predicts entity movement.
148. **Interpolation**: Smooths entity movement.
149. **RPC**: Remote procedure call for networked actions.
150. **Lobby**: Manages multiplayer lobbies.

---

### **10. Miscellaneous Components**

Creative and niche components.

151. **Weather**: Controls weather effects.
152. **TimeOfDay**: Tracks the time of day.
153. **Season**: Tracks the current season.
154. **DayNightCycle**: Controls day/night transitions.
155. **Fog**: Controls fog density and color.
156. **Wind**: Controls wind direction and strength.
157. **Rain**: Controls rain intensity.
158. **Snow**: Controls snow intensity.
159. **Fire**: Simulates fire effects.
160. **Smoke**: Simulates smoke effects.
161. **Explosion**: Simulates explosions.
162. **Destructible**: Can be destroyed.
163. **Constructible**: Can be built or assembled.
164. **Harvestable**: Can be harvested for resources.
165. **Resource**: Stores resources (e.g., wood, gold).
166. **Crafting**: Defines crafting recipes.
167. **Trade**: Defines trade behavior.
168. **Economy**: Tracks currency and prices.
169. **Population**: Tracks population size.
170. **Happiness**: Tracks happiness level.
171. **Hunger**: Tracks hunger level.
172. **Thirst**: Tracks thirst level.
173. **Fatigue**: Tracks fatigue level.
174. **Temperature**: Tracks temperature.
175. **Radiation**: Tracks radiation level.
176. **Poison**: Tracks poison level.
177. **Disease**: Tracks disease state.
178. **Mutation**: Tracks mutations.
179. **Evolution**: Tracks evolutionary progress.
180. **Magic**: Tracks magical energy.
181. **Mana**: Tracks mana for spells.
182. **Spell**: Defines a spell or ability.
183. **Buff**: Temporary positive effect.
184. **Debuff**: Temporary negative effect.
185. **Aura**: Area-of-effect buff or debuff.
186. **Summon**: Summons another entity.
187. **Teleport**: Teleports the entity.
188. **Portal**: Transports entities between locations.
189. **TimeTravel**: Simulates time travel.
190. **GravityWell**: Simulates a gravity well.
191. **BlackHole**: Simulates a black hole.
192. **Wormhole**: Simulates a wormhole.
193. **Hologram**: Displays a holographic image.
194. **Drone**: Controls a drone entity.
195. **Robot**: Controls a robot entity.
196. **Alien**: Defines alien behavior.
197. **Zombie**: Defines zombie behavior.
198. **Vampire**: Defines vampire behavior.
199. **Werewolf**: Defines werewolf behavior.
200. **Ghost**: Defines ghost behavior.

## Systems

Here’s a list of **200 systems** for an ECS architecture, categorized by
functionality and referencing the
[components from the previous list](https://www.reddit.com/r/gamedev/comments/15n6gq6/comment/jvm7k7r/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button).
Systems are designed to process components logically, ensuring efficiency and
scalability while avoiding anti-patterns.

---

### **1. Core Systems**

Process foundational components like transforms, hierarchy, and basic state.

1. **MovementSystem**: Updates `Transform` using `Velocity` and `Acceleration`.
2. **RotationSystem**: Updates rotation using `AngularVelocity` and
   `AngularAcceleration`.
3. **ParentingSystem**: Updates child entities based on `Parent` and `Children`.
4. **TagSystem**: Handles entity categorization via `Tag`.
5. **NamingSystem**: Manages entity `Name` for debugging/UI.
6. **ActivationSystem**: Toggles entity visibility/behavior via `Active`.
7. **HierarchySystem**: Maintains parent-child relationships.
8. **BoundsSystem**: Calculates bounding volumes for `Transform` and `Collider`.
9. **LifetimeSystem**: Tracks entity lifespan (e.g., for temporary effects).
10. **SpawnSystem**: Instantiates entities with predefined components.

---

### **2. Rendering Systems**

Handle rendering, lighting, particles, and visual effects. 11.
**RenderMeshSystem**: Draws entities with `Mesh`, `Material`, and
`Transform`. 12. **SpriteRenderingSystem**: Renders 2D `Sprite` entities. 13.
**LightingSystem**: Updates `Light` sources and shadows. 14.
**ShadowCastingSystem**: Manages `ShadowCaster` and `ShadowReceiver`. 15.
**ParticleUpdateSystem**: Simulates `ParticleEmitter` effects. 16.
**DecalSystem**: Projects `Decal` textures onto surfaces. 17.
**TransparencySystem**: Blends `Transparency` for translucent objects. 18.
**OutlineSystem**: Renders `Outline` effects for highlighted entities. 19.
**CameraSystem**: Updates `Camera` view/projection matrices. 20. **LODSystem**:
Swaps `LOD` meshes based on distance. 21. **ReflectionSystem**: Renders
`Reflection` probes. 22. **RefractionSystem**: Handles `Refraction` effects. 23.
**GlowSystem**: Applies `Glow` emissive effects. 24. **BillboardSystem**:
Orients `Billboard` entities toward the camera. 25. **UISystem**: Renders
`UIElement`, `Button`, `Text`, etc. 26. **HUDSystem**: Updates `HealthBar`,
`Minimap`, and `Scoreboard`. 27. **WeatherSystem**: Renders `Rain`, `Snow`, and
`Fog`. 28. **PostProcessingSystem**: Applies screen-space effects (e.g., blur,
color grading). 29. **SkyboxSystem**: Renders the skybox or `DayNightCycle`. 30.
**VFXSystem**: Manages visual effects like `Fire`, `Smoke`, and `Explosion`.

---

### **3. Physics Systems**

Simulate collisions, forces, and physical interactions. 31.
**PhysicsSimulationSystem**: Updates `Rigidbody`, `Velocity`, and `Force`. 32.
**CollisionDetectionSystem**: Checks `Collider` overlaps and `Trigger`
events. 33. **CollisionResponseSystem**: Resolves collisions using `Bounciness`
and `Friction`. 34. **GravitySystem**: Applies `Gravity` to entities. 35.
**BuoyancySystem**: Simulates `Buoyancy` in fluids. 36. **WindSystem**: Applies
`WindAffected` forces. 37. **JointSystem**: Updates `HingeJoint`, `SpringJoint`,
and `FixedJoint`. 38. **RagdollSystem**: Animates `Ragdoll` physics. 39.
**ClothSimulationSystem**: Simulates `Cloth` physics. 40. **SoftbodySystem**:
Deforms `Softbody` entities. 41. **RaycastSystem**: Performs raycasts and stores
`RaycastHit`. 42. **ExplosionSystem**: Applies `ExplosionForce` to nearby
entities. 43. **WaterInteractionSystem**: Handles `WaterSurface` physics. 44.
**KinematicSystem**: Updates `Kinematic` entities (script-controlled
movement). 45. **CharacterControllerSystem**: Manages player/enemy movement with
`Collider`.

---

### **4. Animation Systems**

Animate entities using skeletons, blend shapes, and procedural motion. 46.
**SkeletalAnimationSystem**: Drives `Bone` hierarchies and `Animator`. 47.
**BlendShapeSystem**: Interpolates `BlendShape` morph targets. 48. **IKSystem**:
Solves `IKTarget` inverse kinematics. 49. **LipSyncSystem**: Syncs `LipSync`
with `AudioSource`. 50. **FacialAnimationSystem**: Controls `FacialExpression`
states. 51. **GestureSystem**: Triggers `Gesture` animations. 52.
**AnimationEventSystem**: Fires events during `AnimationClip` playback. 53.
**AnimationBlendingSystem**: Blends multiple `AnimationClip` states. 54.
**ProceduralAnimationSystem**: Generates motion (e.g., `Flocking`). 55.
**AnimationSpeedSystem**: Adjusts `AnimationSpeed` dynamically.

---

### **5. Audio Systems**

Manage sound effects, music, and spatial audio. 56. **AudioPlaybackSystem**:
Plays `SoundEffect` and `MusicTrack`. 57. **SpatialAudioSystem**: Updates 3D
`AudioSource` and `AudioListener`. 58. **VolumeControlSystem**: Adjusts `Volume`
and `Pitch`. 59. **ReverbSystem**: Applies `ReverbZone` effects. 60.
**AudioLoopSystem**: Manages looping `AudioClip` instances. 61.
**DialogueSystem**: Triggers `Dialogue` audio lines. 62.
**MusicTransitionSystem**: Crossfades `MusicTrack` based on game state.

---

### **6. AI Systems**

Drive NPC behavior, pathfinding, and decision-making. 63.
**AIStateMachineSystem**: Updates `AIState` transitions (e.g., idle →
chase). 64. **PathfindingSystem**: Calculates paths using `Pathfinding` and
`Waypoint`. 65. **BehaviorTreeSystem**: Executes `BehaviorTree` decision
logic. 66. **BlackboardSystem**: Updates `Blackboard` data for AI. 67.
**TargetingSystem**: Selects `Target` entities for AI. 68. **VisionSystem**:
Checks `VisionCone` line-of-sight. 69. **HearingSystem**: Detects sounds in
`HearingRange`. 70. **PatrolSystem**: Follows `PatrolRoute` waypoints. 71.
**FlockingSystem**: Simulates `Flocking` group behavior. 72. **SteeringSystem**:
Applies `Seek`, `Flee`, and `Wander` behaviors. 73. **UtilityAISystem**: Scores
`Action` utility for `UtilityAI`. 74. **MemorySystem**: Updates `Memory` based
on observations. 75. **ReactionSystem**: Triggers actions based on
`ReactionTime`.

---

### **7. Gameplay Systems**

Handle health, combat, inventory, and quests. 76. **HealthSystem**: Updates
`Health` and applies `Damage`. 77. **CombatSystem**: Resolves attacks using
`Weapon` and `Armor`. 78. **InventorySystem**: Manages `Inventory` and
`Equipment`. 79. **CooldownSystem**: Tracks `Cooldown` timers for abilities. 80.
**ExperienceSystem**: Awards `Experience` and updates `Level`. 81.
**QuestSystem**: Tracks `Quest` objectives and rewards. 82.
**InteractionSystem**: Handles `Interaction` prompts (e.g., "Press E to
open"). 83. **LockpickingSystem**: Resolves `Lock` and `Key` mechanics. 84.
**TrapSystem**: Triggers `Trap` effects on collision. 85. **RespawnSystem**:
Handles `Respawn` logic for players/enemies. 86. **TeamSystem**: Manages `Team`
and `Faction` relationships. 87. **StealthSystem**: Updates `Stealth` and
`Detection` states. 88. **EconomySystem**: Trades `Resource` using `Economy`
prices. 89. **CraftingSystem**: Combines `Resource` into items via
`Crafting`. 90. **HarvestSystem**: Collects `Resource` from `Harvestable`
entities.

---

### **8. UI Systems**

Update and render user interface elements. 91. **ButtonSystem**: Handles
`Button` clicks and hover states. 92. **TextUpdateSystem**: Updates dynamic
`Text` (e.g., score, health). 93. **SliderSystem**: Adjusts `Slider` values
(e.g., volume). 94. **ProgressSystem**: Updates `ProgressBar` for
quests/loading. 95. **TooltipSystem**: Displays `Tooltip` on hover. 96.
**MenuSystem**: Manages `Menu` navigation and visibility. 97. **CursorSystem**:
Updates `Cursor` appearance and behavior. 98. **NotificationSystem**:
Shows/hides `Notification` messages. 99. **InventoryUISystem**: Syncs
`Inventory` with `InventoryUI`. 100. **DialogueUISystem**: Displays `Dialogue`
choices and text.

---

### **9. Networking Systems**

Synchronize data across clients and servers. 101. **NetworkSyncSystem**:
Replicates `Transform` and `Velocity` via `NetworkID`. 102. **SnapshotSystem**:
Interpolates `Snapshot` data for smooth movement. 103. **PredictionSystem**:
Predicts entity states to reduce latency. 104. **RPCHandlerSystem**: Executes
`RPC` calls (e.g., "Open Door"). 105. **AuthoritySystem**: Validates actions for
entities with `Authority`. 106. **LobbySystem**: Manages `Lobby` creation and
player joins. 107. **CheatDetectionSystem**: Flags suspicious `Replication`
data. 108. **LagCompensationSystem**: Rewinds time for hit detection. 109.
**PacketLossRecoverySystem**: Resends critical data on `PacketLoss`. 110.
**VoiceChatSystem**: Streams `AudioSource` data between players.

---

### **10. Creative/Miscellaneous Systems**

Handle unique mechanics like weather, magic, and sci-fi elements. 111.
**WeatherSystem**: Updates `Rain`, `Snow`, and `Wind`. 112. **TimeSystem**:
Advances `TimeOfDay` and `Season`. 113. **TemperatureSystem**: Adjusts
`Temperature` for survival games. 114. **RadiationSystem**: Applies `Radiation`
damage over time. 115. **MagicSystem**: Manages `Spell` casting and `Mana`
costs. 116. **BuffSystem**: Applies `Buff` and `Debuff` effects. 117.
**AuraSystem**: Updates `Aura` area effects. 118. **SummonSystem**: Spawns
entities via `Summon`. 119. **TeleportSystem**: Moves entities using
`Teleport`. 120. **PortalSystem**: Links `Portal` pairs for fast travel. 121.
**TimeTravelSystem**: Reverts entity states for `TimeTravel`. 122.
**GravityWellSystem**: Simulates `GravityWell` physics. 123.
**BlackHoleSystem**: Pulls entities toward `BlackHole`. 124. **HologramSystem**:
Renders `Hologram` projections. 125. **DroneControlSystem**: Pilots `Drone`
entities. 126. **AlienBehaviorSystem**: Drives `Alien` AI logic. 127.
**ZombieInfectionSystem**: Spreads `Disease` to entities. 128.
**VampireSystem**: Manages `Vampire` powers (e.g., feeding). 129.
**WerewolfTransformationSystem**: Triggers `Werewolf` transformations. 130.
**GhostSystem**: Enables `Ghost` phasing and invisibility.

---

### **11. Advanced Physics Systems**

131. **FluidDynamicsSystem**: Simulates fluid interactions with `Buoyancy`.
132. **VehicleSystem**: Manages car/plane physics (steering, acceleration).
133. **ProjectileSystem**: Updates trajectory for `Weapon` projectiles.
134. **DestructionSystem**: Breaks `Destructible` entities into fragments.
135. **ConstructionSystem**: Assembles `Constructible` entities.

---

### **12. Environmental Systems**

136. **EcosystemSystem**: Simulates `Population` and `Resource` cycles.
137. **FarmingSystem**: Grows crops using `Harvestable` and `Season`.
138. **PollutionSystem**: Tracks environmental decay from `Industry` components.
139. **DisasterSystem**: Triggers earthquakes, floods, or `Explosion` events.

---

### **13. Character Systems**

140. **HungerSystem**: Depletes `Hunger` over time.
141. **ThirstSystem**: Depletes `Thirst` and applies penalties.
142. **FatigueSystem**: Manages `Fatigue` for survival mechanics.
143. **MutationSystem**: Triggers `Mutation` effects (e.g., wings, claws).
144. **EvolutionSystem**: Unlocks traits via `Evolution` progress.

---

### **14. Economy & Social Systems**

145. **TradeSystem**: Facilitates `Trade` between entities.
146. **StockMarketSystem**: Simulates `Economy` fluctuations.
147. **HappinessSystem**: Updates `Happiness` based on events.
148. **ReputationSystem**: Adjusts `Reputation` with factions.

---

### **15. Sci-Fi Systems**

149. **WormholeSystem**: Stabilizes `Wormhole` connections.
150. **EnergyShieldSystem**: Toggles shields using `Magic` or `Resource`.
151. **LaserSystem**: Fires and tracks `Weapon` lasers.
152. **NanobotSystem**: Repairs entities using `Nanobot` components.

---

### **16. Horror Systems**

153. **SanitySystem**: Drains sanity near `Ghost` entities.
154. **JumpScareSystem**: Triggers `SoundEffect` and `AnimationEvent` scares.
155. **MonsterSpawnSystem**: Generates enemies based on `Fear` levels.

---

### **17. RPG Systems**

156. **TalentSystem**: Unlocks abilities via `Experience`.
157. **ClassSystem**: Manages RPG classes (e.g., warrior, mage).
158. **LootSystem**: Drops `Reward` items on entity death.
159. **DialogChoiceSystem**: Updates story branches via `Dialogue`.

---

### **18. Strategy Systems**

160. **ResourceManagementSystem**: Allocates `Resource` for building/units.
161. **UnitCommandSystem**: Issues orders to RTS units.
162. **FormationSystem**: Arranges entities into `Flocking` formations.

---

### **19. Simulation Systems**

163. **TrafficSystem**: Simulates vehicle `Pathfinding` in cities.
164. **CrowdSystem**: Manages `Flocking` pedestrians.
165. **WildlifeSystem**: Drives `Animal` AI and `BehaviorTree` logic.

---

### **20. Experimental Systems**

166. **NeuralNetworkSystem**: Trains AI using machine learning.
167. **GeneticAlgorithmSystem**: Evolves entity traits via `Mutation`.
168. **QuantumSystem**: Simulates quantum states (e.g., superposition).
169. **RealityShiftSystem**: Alters physics rules temporarily.
