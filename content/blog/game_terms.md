+++
title = "Game Terminology"
date = 2025-03-14
description = "A comprehensive guide to game terms"
draft = false

[taxonomies]
tags = ["game", "terms", "terminology", "gamedev", "llm"]
categories = ["guides"]

[extra]
toc = true
+++


**Core Game Concepts:**

1.  **Entity:** A fundamental game object.
2.  **Component:** A data structure that defines an entity's attributes.
3.  **System:** A process that operates on entities and components.
4.  **World:** The overall game environment.
5.  **Scene:** A specific area or level within the world.
6.  **GameState:** The overall state of the game.
7.  **Player:** The controlled character.
8.  **Actor:** A general term for any entity that can act.
9.  **Object:** A general game element.
10. **Item:** A collectible or usable object.
11. **Inventory:** A collection of items.
12. **Equipment:** Items worn or used by an actor.
13. **Skill:** A learned ability.
14. **Spell:** A magical ability.
15. **Effect:** A temporary change to an entity's state.
16. **Status:** A persistent change to an entity's state.
17. **Buff:** A positive status effect.
18. **Debuff:** A negative status effect.
19. **Projectile:** A launched object.
20. **Trigger:** An event that initiates an action.
21. **Interaction:** An action between entities.
22. **Dialogue:** A conversation between characters.
23. **Quest:** A task given to the player.
24. **Objective:** A specific goal within a quest.
25. **Loot:** Items dropped by defeated enemies.
26. **Reward:** Items or experience gained from completing quests.
27. **Experience:** Points gained from completing tasks.
28. **Level:** A measure of character progression.
29. **Stats:** Core character attributes (strength, dexterity, etc.).
30. **Attributes:** Properties of an entity.
31. **Modifiers:** Changes to attributes or stats.
32. **Damage:** A reduction in health.
33. **Healing:** A restoration of health.
34. **Resistance:** A reduction in damage taken.
35. **Vulnerability:** An increase in damage taken.
36. **Collision:** An event when two entities overlap.
37. **Hitbox:** A region used for collision detection.
38. **Hurtbox:** A region that can receive damage.
39. **Pathfinding:** An algorithm for navigating through the world.
40. **AI (Artificial Intelligence):** Systems that control non-player characters.
41. **Behavior:** An AI's actions and responses.
42. **Pattern:** A predictable sequence of actions.
43. **Animation:** A sequence of images or frames.
44. **State Machine:** A system for managing animation and behavior states.
45. **Input:** Player actions.
46. **Control:** Player or AI control of an entity.
47. **Movement:** Changes in an entity's position.
48. **Navigation:** The process of moving through the world.
49. **Tile:** A unit of space in a grid-based world.
50. **Grid:** A structured layout of tiles.
51. **Region:** A large area within the world.
52. **Zone:** A distinct area within a region.
53. **Room:** A smaller enclosed area within a zone.
54. **Dungeon:** A procedurally generated or hand-crafted area.
55. **Biome:** A distinct ecological region.
56. **Terrain:** The ground and environment.
57. **Weather:** Environmental conditions.
58. **Lighting:** The illumination of the scene.
59. **Shadow:** An area of darkness.
60. **Camera:** The viewpoint of the player.
61. **Viewport:** The visible area of the screen.
62. **UI (User Interface):** Elements for player interaction.
63. **HUD (Heads-Up Display):** UI elements that overlay the game world.
64. **Menu:** A UI element for navigating game options.
65. **Popup:** A UI element that appears temporarily.
66. **Save:** Storing game progress.
67. **Load:** Restoring game progress.
68. **Resource:** A global data structure.
69. **Asset:** A game file (texture, model, sound, etc.).
70. **Pool:** A collection of reusable objects.
71. **Factory:** A system for creating objects.
72. **Manager:** A system for managing game data.
73. **Event:** A signal that something has happened.
74. **Message:** A data structure used for communication.
75. **Packet:** A data structure for network communication.
76. **Serialization:** Converting data to a format for storage or transmission.
77. **Deserialization:** Converting serialized data back to its original format.
78. **Randomizer:** A system for generating random numbers.
79. **Seed:** A value used to initialize a random number generator.
80. **Noise:** A pattern of random values.
81. **Procedural Generation:** Creating content algorithmically.
82. **Map:** A representation of the world or a level.
83. **Graph:** A data structure representing connections.
84. **Node:** A point in a graph.
85. **Edge:** A connection between nodes.
86. **State:** A specific condition of an entity or system.
87. **Transition:** A change from one state to another.
88. **Timer:** A system for tracking time.
89. **Cooldown:** A period of time before an action can be repeated.
90. **Waypoint:** A point used for navigation.
91. **Checkpoint:** A point where the player can save or respawn.
92. **Unlock:** A progression mechanic.
93. **Upgrade:** An improvement to an entity or item.
94. **Crafting:** Combining items to create new items.
95. **Recipe:** A formula for crafting.
96. **Faction:** A group of entities with shared goals.
97. **Reputation:** A measure of standing with a faction.
98. **Lore:** The background story and history of the game world.
99. **Cutscene:** A pre-rendered or scripted sequence.
100. **Particle System:** A system for creating visual effects.
101. **Shader:** A program that runs on the GPU.
102. **Render Target:** A buffer that stores rendered images.
103. **Texture:** An image used for rendering.
104. **Mesh:** A 3D model.
105. **Skeleton:** A structure used for animating 3D models.
106. **Physics Material:** properties used for physics simulations.
107. **Sound Effect:** a playable audio file.
108. **Music Track:** a longer playable audio file.
109. **Localization:** the process of adapting a game for different languages.
110. **Profile:** a collection of user settings.

# Game Development Terminology for Data Structures

## Core Entity Components

1. **Entity** - Base class/struct for any object in the game world
2. **Transform** - Position, rotation, and scale data
3. **Sprite** - Visual representation of an entity
4. **Collider** - Hitbox for collision detection
5. **RigidBody** - Physics properties for an entity
6. **Controller** - Input handling component
7. **Stats** - Character attributes like health, strength, etc.
8. **Inventory** - Container for items
9. **WorldObject** - Static element in the game world
10. **Actor** - Any entity that can perform actions

## Character Systems

11. **Character** - Player or NPC with attributes
12. **PlayerCharacter** - User-controlled entity
13. **NonPlayerCharacter** - AI-controlled entity
14. **Mob** - Mobile enemy entity
15. **Boss** - Special powerful enemy
16. **Companion** - Ally that follows the player
17. **Faction** - Grouping for allegiance systems
18. **Class** - Character archetype (Warrior, Mage, etc.)
19. **Race** - Character species or type
20. **Profession** - Character's role or occupation

## Combat Systems

21. **Weapon** - Item used to deal damage
22. **Armor** - Item used for defense
23. **Projectile** - Moving object (arrows, bullets, etc.)
24. **Damage** - Harm dealt to entities
25. **DamageType** - Category of damage (Fire, Physical, etc.)
26. **StatusEffect** - Temporary modification to an entity
27. **CombatManager** - System controlling combat interactions
28. **Hitbox** - Area that can receive damage
29. **Hurtbox** - Area that can deal damage
30. **AttackPattern** - Sequence of attack moves

## Movement & Physics

31. **Velocity** - Speed and direction
32. **Acceleration** - Change in velocity
33. **Gravity** - Downward force
34. **Jump** - Upward movement mechanic
35. **Dash** - Quick movement ability
36. **Teleport** - Instantaneous movement
37. **PathNode** - Point in a navigation path
38. **NavMesh** - Navigation mesh for AI movement
39. **CollisionLayer** - Group for collision filtering
40. **PhysicsMaterial** - Properties affecting physics behavior

## Progression Systems

41. **Level** - Character progression stage
42. **Experience** - Points toward level advancement
43. **Skill** - Special ability or action
44. **SkillTree** - Hierarchical skill organization
45. **Perk** - Passive bonus
46. **Talent** - Specialization option
47. **Attribute** - Base character statistic
48. **ProgressionManager** - System tracking advancement
49. **Milestone** - Significant achievement point
50. **Quest** - Objective-based mission

## Items & Equipment

51. **Item** - Collectible object
52. **Equipment** - Wearable item
53. **Consumable** - One-use item
54. **Rarity** - Item quality level
55. **CraftingMaterial** - Resource for item creation
56. **Recipe** - Formula for crafting
57. **Modifier** - Statistical change applied to items
58. **Enchantment** - Magical property on equipment
59. **Currency** - Medium of exchange
60. **Loot** - Items dropped by enemies

## World & Environment

61. **Room** - Discrete area in the game
62. **Zone** - Larger region containing rooms
63. **Biome** - Environmental type with specific properties
64. **Portal** - Connection between areas
65. **Hazard** - Environmental danger
66. **Checkpoint** - Save or respawn point
67. **Spawner** - Entity generation point
68. **Trigger** - Area causing an event when entered
69. **Destructible** - Object that can be broken
70. **Weather** - Environmental condition

## Procedural Generation

71. **Generator** - System creating content
72. **Seed** - Value initializing random generation
73. **DungeonLayout** - Structure of game level
74. **ProceduralRule** - Constraint for generation
75. **TileSet** - Collection of map pieces
76. **TerrainType** - Category of landscape
77. **MapChunk** - Section of a larger map
78. **NodeGraph** - Connection structure for rooms
79. **GenerationParameter** - Setting for procedural systems
80. **RoomTemplate** - Pattern for room creation

## Game State Management

81. **GameState** - Current mode of play
82. **SaveData** - Persistent game information
83. **Objective** - Current goal
84. **SceneManager** - System handling different game areas
85. **EventSystem** - Manager for game events
86. **Flag** - Boolean game state marker
87. **Condition** - Requirement for an event
88. **Timeline** - Sequence of game events
89. **DialogueTree** - Conversation structure
90. **Cutscene** - Non-interactive sequence

## Abilities & Magic

91. **Ability** - Special action with cooldown
92. **Spell** - Magical effect
93. **Cooldown** - Time until reuse
94. **Mana** - Magic resource
95. **Aura** - Area-based persistent effect
96. **ElementType** - Magical affinity
97. **CastingTime** - Duration to use ability
98. **AbilitySlot** - Container for equipped ability
99. **Combo** - Sequence of actions for special effect
100. **ResourcePool** - Energy for using abilities

## UI & Feedback

101. **HealthBar** - Visual representation of health
102. **Minimap** - Condensed map view
103. **Notification** - Message to player
104. **HUD** - Heads-up display elements
105. **MenuState** - Current menu configuration
106. **Tooltip** - Information popup
107. **InventorySlot** - Position in inventory grid
108. **QuestMarker** - Visual indicator for objectives
109. **DamageNumber** - Floating combat text
110. **InteractionPrompt** - UI for possible actions

## Metroidvania Specifics

111. **Ability_Unlock** - New player capability that enables progression
112. **MapCell** - Individual section of the overall map
113. **SecretArea** - Hidden location with rewards
114. **BacktrackTrigger** - Event causing return to previous areas
115. **ProgressionBarrier** - Obstacle requiring specific ability
116. **MapRevealComponent** - System for uncovering the map
117. **AbilityGate** - Obstacle requiring specific ability
118. **WorldConnectionNode** - Link between map areas
119. **Shortcut** - Unlockable path between areas
120. **DiscoveryTracker** - Record of found secrets/areas

## Roguelike Specifics

121. **Run** - Single playthrough attempt
122. **MetaProgression** - Advancement between runs
123. **Permadeath** - Final character death mechanic
124. **FloorLevel** - Depth in dungeon
125. **ItemPool** - Collection of possible items
126. **RogueRandom** - Random number generator
127. **Curse** - Negative effect on character
128. **Blessing** - Positive effect on character
129. **AscensionLevel** - Difficulty tier
130. **RelicEffect** - Permanent run modifier

## ARPG Specifics

131. **StatScaling** - Growth of attributes with level
132. **DamageFormula** - Calculation for attack power
133. **LootTable** - Probability distribution for drops
134. **AttributeRequirement** - Stat needed to use item
135. **AreaOfEffect** - Range of ability impact
136. **CriticalHit** - Enhanced damage chance
137. **BuildData** - Character specialization info
138. **GearSet** - Related equipment pieces
139. **SocketSystem** - Modification slots in equipment
140. **DifficultyTier** - Challenge level setting


Below is a comprehensive list of **500 names** that you might encounter as classes, structs, traits, or similar constructs in a typical game engine or game source code. This list is designed to support a versatile game engine capable of creating games across multiple genres, such as Action RPGs (ARPGs), Roguelikes, and Metroidvanias. The names cover core engine components, game-specific features, and utilities, providing you with a broad and recognizable vocabulary for developing new features.

The list is organized into categories for clarity, ensuring coverage of rendering, physics, audio, input, scripting, UI, networking, AI, and genre-specific functionalities, among others. Each name is unique and could plausibly appear in a game engine’s architecture.

---

### Core Engine Components
1. **Engine** - The main game engine class.
2. **Game** - Represents the game instance.
3. **Application** - Handles application lifecycle.
4. **MainLoop** - Manages the game’s main loop.
5. **UpdateLoop** - Controls game logic updates.
6. **RenderLoop** - Manages rendering cycles.

---

### Rendering
7. **Renderer** - Base rendering system.
8. **Graphics** - Graphics context manager.
9. **Window** - Display window handler.
10. **Viewport** - Defines the rendering area.
11. **FrameBuffer** - Off-screen rendering target.
12. **RenderTarget** - Destination for rendering output.
13. **Shader** - Programmable graphics shader.
14. **VertexShader** - Shader for vertex processing.
15. **FragmentShader** - Shader for pixel processing.
16. **GeometryShader** - Shader for geometry manipulation.
17. **ComputeShader** - General-purpose compute shader.
18. **Material** - Defines surface properties.
19. **Texture** - Base texture class.
20. **Texture2D** - 2D texture representation.
21. **Texture3D** - 3D volumetric texture.
22. **CubeMap** - Environment mapping texture.
23. **RenderTexture** - Texture for render-to-texture.
24. **Mesh** - 3D geometry data.
25. **Model** - Complete 3D object with mesh and material.
26. **Vertex** - Single point in a mesh.
27. **IndexBuffer** - Indices for mesh rendering.
28. **VertexBuffer** - Vertex data storage.
29. **Geometry** - Abstract geometry representation.
30. **Primitive** - Basic renderable shape.
31. **Line** - Line geometry.
32. **Triangle** - Triangle geometry.
33. **Quad** - Quadrilateral geometry.
34. **Polygon** - General polygon geometry.
35. **Camera** - Base camera class.
36. **PerspectiveCamera** - Camera with perspective projection.
37. **OrthographicCamera** - Camera with orthographic projection.
38. **Light** - Base lighting class.
39. **PointLight** - Omnidirectional light source.
40. **DirectionalLight** - Sun-like light source.
41. **SpotLight** - Focused light source.
42. **AmbientLight** - Uniform background lighting.
43. **Skybox** - Background environment renderable.
44. **PostProcessing** - Post-render effects manager.
45. **Bloom** - Glow effect for bright areas.
46. **DepthOfField** - Focus blur effect.
47. **MotionBlur** - Blur for fast-moving objects.
48. **ScreenSpaceReflection** - Real-time reflections.
49. **VolumetricLight** - Light scattering effect.
50. **ParticleSystem** - Manages particle effects.
51. **ParticleEmitter** - Spawns particles.
52. **Particle** - Individual particle instance.
53. **Sprite** - 2D renderable image.
54. **SpriteSheet** - Collection of sprites.
55. **Animation** - Base animation class.
56. **Animator** - Controls animation playback.
57. **Skeleton** - Bone structure for animation.
58. **Bone** - Single bone in a skeleton.
59. **Skin** - Mesh deformation data.
60. **MorphTarget** - Shape key for morph animations.

---

### Physics
61. **PhysicsEngine** - Core physics simulation.
62. **PhysicsWorld** - Physics simulation environment.
63. **RigidBody** - Physics object with mass.
64. **Collider** - Base collision shape.
65. **BoxCollider** - Rectangular collision volume.
66. **SphereCollider** - Spherical collision volume.
67. **CapsuleCollider** - Capsule-shaped collision volume.
68. **MeshCollider** - Mesh-based collision shape.
69. **Trigger** - Non-physical collision detector.
70. **Constraint** - Limits object movement.
71. **Joint** - Base joint for constraints.
72. **HingeJoint** - Rotational joint.
73. **BallSocketJoint** - Spherical joint.
74. **FixedJoint** - Rigid connection.
75. **Spring** - Elastic constraint.
76. **Force** - Applied physics force.
77. **Gravity** - Gravitational force simulator.
78. **Friction** - Surface friction handler.
79. **Restitution** - Bounce coefficient manager.
80. **CollisionDetection** - Detects object intersections.
81. **BroadPhase** - Initial collision filtering.
82. **NarrowPhase** - Precise collision detection.
83. **Contact** - Collision contact point.
84. **Manifold** - Collision contact details.
85. **Raycast** - Ray intersection test.
86. **SweepTest** - Continuous collision test.
87. **FluidSimulation** - Liquid physics system.
88. **ClothSimulation** - Fabric physics system.
89. **DestructionSystem** - Breakable object manager.

---

### Audio
90. **AudioManager** - Manages audio playback.
91. **Sound** - Base audio class.
92. **Music** - Background music handler.
93. **AudioSource** - Audio emission point.
94. **AudioListener** - Audio reception point.
95. **AudioClip** - Audio data container.
96. **SoundEffect** - Short audio effect.
97. **AmbientSound** - Background environmental sound.
98. **PositionalSound** - 3D-positioned sound.
99. **GlobalSound** - Non-spatial sound.
100. **LoopingSound** - Continuously repeating sound.
101. **Reverb** - Echo effect.
102. **Echo** - Delayed sound repetition.
103. **Distortion** - Audio distortion effect.
104. **SpatialAudio** - 3D audio system.
105. **HRTF** - Head-related transfer function for 3D audio.
106. **BinauralAudio** - Stereo 3D audio simulation.

---

### Input
107. **InputManager** - Handles all input devices.
108. **Keyboard** - Keyboard input handler.
109. **Mouse** - Mouse input handler.
110. **Controller** - Gamepad input handler.
111. **Joystick** - Analog stick input.
112. **TouchInput** - Touchscreen input.
113. **GestureRecognizer** - Detects touch gestures.
114. **VRController** - Virtual reality controller input.
115. **Key** - Single key input.
116. **Button** - Generic button input.
117. **Axis** - Analog input axis.
118. **InputAction** - Mapped input event.
119. **InputBinding** - Custom input mapping.

---

### Scripting
120. **Script** - Base script class.
121. **Behavior** - Scripted entity behavior.
122. **Component** - Modular script component.
123. **ScriptEngine** - Executes scripts.
124. **LuaScript** - Lua-based script.
125. **PythonScript** - Python-based script.
126. **Function** - Scripted function.
127. **Variable** - Script variable.
128. **Event** - Script-triggered event.
129. **Delegate** - Function pointer for scripting.

---

### Entity-Component-System (ECS)
130. **Entity** - Basic game object.
131. **GameObject** - Entity with components.
132. **Transform** - Position, rotation, scale data.
133. **Component** - Modular entity feature.
134. **System** - Processes components.
135. **EntityManager** - Manages entities.
136. **ComponentManager** - Manages component types.
137. **SystemManager** - Coordinates systems.

---

### Scene Management
138. **Scene** - Game level or state.
139. **SceneGraph** - Hierarchical scene structure.
140. **SceneNode** - Node in the scene graph.
141. **Layer** - Rendering or logic layer.
142. **Tag** - Entity identifier.
143. **Hierarchy** - Parent-child relationships.

---

### Resource Management
144. **ResourceManager** - Loads and manages assets.
145. **AssetLoader** - Loads specific asset types.
146. **Cache** - Stores loaded resources.
147. **Resource** - Base resource class.
148. **Asset** - Game asset (e.g., texture, model).
149. **Bundle** - Grouped assets.
150. **Prefab** - Preconfigured entity template.
151. **Template** - Reusable object blueprint.

---

### Event System
152. **EventManager** - Manages event dispatching.
153. **Event** - Base event class.
154. **Listener** - Event receiver.
155. **Subscriber** - Event subscription handler.
156. **EventQueue** - Queues events for processing.
157. **EventDispatcher** - Sends events to listeners.
158. **CollisionEvent** - Collision occurrence event.
159. **InputEvent** - User input event.
160. **NetworkEvent** - Multiplayer-related event.

---

### User Interface
161. **UIManager** - Manages UI elements.
162. **HUD** - Heads-up display.
163. **Menu** - Menu screen.
164. **Button** - Clickable UI element.
165. **Text** - Text display element.
166. **Image** - UI image element.
167. **Slider** - Adjustable value control.
168. **Checkbox** - Toggleable option.
169. **Dropdown** - Selection menu.
170. **ScrollView** - Scrollable content area.
171. **Panel** - UI container.
172. **Layout** - UI element arrangement.
173. **Widget** - Generic UI component.
174. **Canvas** - UI rendering surface.

---

### Networking
175. **NetworkManager** - Manages network connections.
176. **Server** - Hosts multiplayer sessions.
177. **Client** - Connects to servers.
178. **Packet** - Network data unit.
179. **Protocol** - Communication rules.
180. **Connection** - Network link.
181. **Socket** - Network endpoint.
182. **TCPConnection** - Reliable network connection.
183. **UDPConnection** - Fast, unreliable connection.
184. **WebSocketConnection** - Web-based connection.
185. **Matchmaking** - Player pairing system.
186. **Lobby** - Pre-game gathering area.
187. **VoiceChat** - Real-time voice communication.

---

### Artificial Intelligence
188. **AIController** - Manages AI behavior.
189. **Pathfinding** - Navigation system.
190. **StateMachine** - Finite state machine for AI.
191. **BehaviorTree** - Hierarchical AI behavior.
192. **Agent** - AI-controlled entity.
193. **Brain** - AI decision-making core.
194. **Decision** - AI choice logic.
195. **PatrolState** - AI patrol behavior.
196. **ChaseState** - AI pursuit behavior.
197. **FleeState** - AI escape behavior.
198. **NavigationMesh** - Pathfinding grid.
199. **Waypoint** - Navigation marker.

---

### Animation
200. **Animation** - Base animation class.
201. **Animator** - Controls animation playback.
202. **AnimationClip** - Single animation sequence.
203. **AnimationState** - Current animation status.
204. **AnimationCurve** - Animation timing curve.
205. **Skeleton** - Bone structure.
206. **Bone** - Single skeletal element.
207. **Skin** - Mesh deformation data.
208. **MorphTarget** - Shape key animation.
209. **Keyframe** - Animation frame marker.
210. **BlendTree** - Animation blending system.
211. **InverseKinematics** - Realistic limb positioning.

---

### Particle Systems
212. **ParticleSystem** - Manages particle effects.
213. **ParticleEmitter** - Spawns particles.
214. **Particle** - Single particle instance.
215. **Affector** - Modifies particle behavior.
216. **PointEmitter** - Single-point particle source.
217. **LineEmitter** - Linear particle source.
218. **VolumeEmitter** - 3D volume particle source.
219. **GPUParticle** - GPU-accelerated particle.

---

### Save and Load
220. **SaveManager** - Handles game saving.
221. **LoadManager** - Handles game loading.
222. **Serializer** - Converts data to storage format.
223. **Deserializer** - Restores data from storage.
224. **JSONSerializer** - JSON-based serialization.
225. **XMLSerializer** - XML-based serialization.
226. **BinarySerializer** - Binary data serialization.
227. **CloudSave** - Online save storage.
228. **Encryption** - Data security for saves.

---

### Utility Classes
229. **Vector** - Base vector class.
230. **Vector2** - 2D vector.
231. **Vector3** - 3D vector.
232. **Vector4** - 4D vector.
233. **Matrix** - Base matrix class.
234. **Matrix3x3** - 3x3 matrix.
235. **Matrix4x4** - 4x4 matrix.
236. **Quaternion** - Rotation representation.
237. **Color** - Color data.
238. **Rect** - Rectangle structure.
239. **AABB** - Axis-aligned bounding box.
240. **Sphere** - Spherical bounds.
241. **Plane** - Flat surface.
242. **Line** - Straight line.
243. **Ray** - Directed line segment.
244. **Math** - Mathematical utilities.
245. **Random** - Random number generator.
246. **Noise** - Noise generation base.
247. **PerlinNoise** - Smooth noise function.
248. **SimplexNoise** - Optimized noise function.
249. **Time** - Time management.
250. **Timer** - Countdown or interval timer.
251. **Clock** - Real-time clock.
252. **Stopwatch** - Performance timing.

---

### Game-Specific Features
253. **Character** - Base character class.
254. **Player** - Player-controlled character.
255. **NPC** - Non-player character.
256. **Enemy** - Hostile character.
257. **Stats** - Character attributes.
258. **Health** - Hit points tracker.
259. **Mana** - Magic resource tracker.
260. **Experience** - Progression points.
261. **Level** - Character or game progression stage.
262. **Skill** - Character ability.
263. **Ability** - Special power or move.
264. **Talent** - Passive character trait.
265. **Inventory** - Item storage.
266. **Item** - Base item class.
267. **Weapon** - Combat item.
268. **Armor** - Protective item.
269. **Consumable** - Usable item.
270. **Potion** - Healing consumable.
271. **Scroll** - Magic consumable.
272. **Amulet** - Equippable accessory.
273. **Quest** - Story or task objective.
274. **Dialogue** - Conversation system.
275. **Choice** - Dialogue option.
276. **CraftingRecipe** - Item creation formula.
277. **Ingredient** - Crafting component.
278. **CraftingStation** - Crafting location.
279. **ProceduralGenerator** - Dynamic content creator.
280. **DungeonGenerator** - Dungeon layout creator.
281. **TerrainGenerator** - Landscape creator.
282. **RoomGenerator** - Room layout creator.
283. **CorridorGenerator** - Passage creator.
284. **LootGenerator** - Item drop creator.
285. **Map** - Game world overview.
286. **Tile** - Map grid unit.
287. **TileMap** - Grid-based map.
288. **Room** - Enclosed map area.
289. **Door** - Map transition point.
290. **Checkpoint** - Save or respawn point.
291. **Gate** - Progression barrier.
292. **TurnManager** - Turn-based system.
293. **Action** - Turn-based move.
294. **Command** - Player or AI instruction.
295. **Permadeath** - Permanent death system.
296. **TurnBasedCombat** - Combat turn manager.
297. **Backtracking** - Exploration mechanic.
298. **AbilityGating** - Progression lock system.

---

### Debugging and Profiling
299. **Debug** - Debugging utilities.
300. **Profiler** - Performance monitor.
301. **Logger** - Event logger.
302. **Console** - In-game command console.
303. **DebugDraw** - Visual debugging tool.
304. **Log** - Single log entry.
305. **Assertion** - Runtime check.

---

### Platform-Specific
306. **Platform** - Base platform class.
307. **Device** - Hardware abstraction.
308. **WindowsPlatform** - Windows-specific code.
309. **MacPlatform** - macOS-specific code.
310. **LinuxPlatform** - Linux-specific code.
311. **AndroidPlatform** - Android-specific code.
312. **iOSPlatform** - iOS-specific code.
313. **ConsolePlatform** - Console-specific code.
314. **WebPlatform** - Web-based platform code.

---

### Editor Tools
315. **Editor** - Game editor interface.
316. **SceneEditor** - Scene design tool.
317. **AssetBrowser** - Asset management tool.
318. **Inspector** - Property viewer/editor.
319. **PropertyEditor** - Specific property editor.
320. **Tool** - Generic editor tool.
321. **Brush** - Terrain or object placement tool.
322. **Gizmo** - Transform manipulation tool.

---

### Version Control
323. **VersionControl** - Versioning system.
324. **GitIntegration** - Git support.
325. **SVNIntegration** - SVN support.
326. **PerforceIntegration** - Perforce support.

---

### Licensing and Attribution
327. **LicenseManager** - License validation.
328. **CreditsScreen** - Attribution display.
329. **Attribution** - Credit entry.

---

### Analytics and Telemetry
330. **AnalyticsManager** - Tracks game data.
331. **EventTracker** - Logs specific events.
332. **MetricsCollector** - Gathers performance metrics.
333. **Telemetry** - Remote data reporting.

---

### Monetization
334. **InAppPurchase** - In-game purchases.
335. **AdManager** - Advertisement system.
336. **SubscriptionService** - Recurring payment system.
337. **Microtransaction** - Small purchase handler.

---

### Social Features
338. **SocialManager** - Social integration.
339. **Leaderboard** - Player rankings.
340. **AchievementSystem** - Achievement tracker.
341. **Friend** - Social connection.
342. **Message** - Player communication.
343. **Notification** - In-game alert.

---

### Security
344. **AntiCheat** - Cheat prevention system.
345. **Encryption** - Data security.
346. **Decryption** - Data recovery.
347. **Hash** - Data integrity check.
348. **Authentication** - User verification.

---

### Cloud Services
349. **CloudSave** - Online save storage.
350. **CloudStorage** - General cloud storage.
351. **RemoteConfig** - Dynamic configuration.
352. **API** - Cloud service interface.
353. **Endpoint** - API connection point.

---

### Virtual Reality / Augmented Reality
354. **VRManager** - VR system manager.
355. **ARSession** - AR session handler.
356. **TrackingSystem** - Position tracking.
357. **Headset** - VR/AR device.
358. **Controller** - VR/AR input device.
359. **Tracker** - Motion tracker.

---

### Haptics
360. **HapticManager** - Feedback manager.
361. **VibrationController** - Vibration effects.
362. **ForceFeedback** - Advanced haptic response.
363. **Rumble** - Controller rumble effect.

---

### Accessibility
364. **AccessibilityOptions** - Accessibility settings.
365. **ScreenReader** - Text-to-speech system.
366. **ColorBlindMode** - Color adjustment.
367. **FontSize** - Text scaling.
368. **Contrast** - Visual contrast settings.
369. **AudioDescription** - Narration for visuals.
370. **RemappableControls** - Custom input mapping.
371. **Subtitles** - Text for audio.

---

### Internationalization
372. **LocalizationManager** - Language manager.
373. **Language** - Language settings.
374. **Translation** - Text translation.
375. **Locale** - Regional settings.
376. **Format** - Data formatting.
377. **DateTimeFormat** - Time/date display.
378. **CurrencyFormat** - Money display.

---

### Design Patterns
379. **Singleton** - Single-instance class.
380. **Observer** - Event listener pattern.
381. **Factory** - Object creation pattern.
382. **Strategy** - Interchangeable behavior.
383. **Command** - Encapsulated action.
384. **State** - State management pattern.
385. **Visitor** - Operation on object structure.

---

### General Managers and Systems
386. **GameManager** - Oversees game state.
387. **SceneManager** - Manages scene transitions.
388. **AudioManager** - Controls audio.
389. **InputManager** - Handles input.
390. **NetworkManager** - Manages networking.
391. **UIManager** - Manages UI.
392. **PhysicsManager** - Oversees physics.
393. **AnimationManager** - Controls animations.
394. **ParticleManager** - Manages particles.
395. **ResourceManager** - Handles assets.
396. **EventManager** - Manages events.
397. **ScriptManager** - Manages scripts.
398. **AIManager** - Oversees AI.
399. **SaveManager** - Handles saving.
400. **LoadManager** - Handles loading.
401. **DebugManager** - Manages debugging.
402. **ProfileManager** - Manages profiling.
403. **SettingsManager** - Manages game settings.

---

### Interfaces and Abstract Classes
404. **IRenderable** - Renderable object interface.
405. **ICollidable** - Collidable object interface.
406. **IAudible** - Audible object interface.
407. **IUpdatable** - Updatable object interface.
408. **IDrawable** - Drawable object interface.
409. **IClickable** - Clickable object interface.
410. **IMovable** - Movable object interface.
411. **IInteractable** - Interactive object interface.
412. **ISerializable** - Serializable object interface.
413. **ICloneable** - Cloneable object interface.
414. **IComparable** - Comparable object interface.

---

### Data Structures
415. **Array** - Basic array structure.
416. **List** - Dynamic list structure.
417. **Map** - Key-value mapping.
418. **Set** - Unique element collection.
419. **Queue** - FIFO structure.
420. **Stack** - LIFO structure.
421. **Tree** - Hierarchical structure.
422. **Graph** - Node-edge structure.
423. **EntityList** - List of entities.
424. **ComponentMap** - Component type mapping.
425. **EventQueue** - Queued events.

---

### Mathematical Concepts
426. **Point** - 2D/3D point.
427. **Vector2D** - 2D vector.
428. **Vector3D** - 3D vector.
429. **Matrix2x2** - 2x2 matrix.
430. **Matrix3x3** - 3x3 matrix.
431. **Matrix4x4** - 4x4 matrix.
432. **Quaternion** - Rotation data.
433. **EulerAngles** - Angle-based rotation.
434. **Transform** - Position/rotation/scale.
435. **Rotation** - Rotation component.
436. **Scale** - Scaling component.
437. **Translation** - Position component.
438. **Projection** - Camera projection.
439. **Frustum** - Viewable volume.
440. **ViewVolume** - Visible area.

---

### Time and Timing
441. **DeltaTime** - Time between frames.
442. **FrameRate** - Frames per second.
443. **TimeScale** - Game speed multiplier.
444. **FixedTimestep** - Fixed update interval.
445. **VariableTimestep** - Dynamic update interval.

---

### Randomness
446. **RandomGenerator** - Random number source.
447. **Seed** - Random seed value.
448. **Distribution** - Random distribution base.
449. **UniformDistribution** - Even random spread.
450. **NormalDistribution** - Bell-curve random spread.
451. **PoissonDistribution** - Event frequency spread.

---

### Color and Imaging
452. **ColorRGB** - RGB color model.
453. **ColorRGBA** - RGBA color model.
454. **ColorHSV** - HSV color model.
455. **ColorHSL** - HSL color model.
456. **Palette** - Color collection.
457. **Gradient** - Color transition.
458. **Image** - Base image class.
459. **Pixel** - Single image pixel.
460. **Bitmap** - Raster image.
461. **VectorImage** - Scalable image.

---

### Text and Fonts
462. **Font** - Text typeface.
463. **Glyph** - Single character shape.
464. **TextRenderer** - Renders text.
465. **String** - Text data.
466. **LocalizationString** - Translated text.

---

### Geometry
467. **Circle** - Circular shape.
468. **Ellipse** - Oval shape.
469. **Rectangle** - Rectangular shape.
470. **Polygon** - Multi-sided shape.
471. **Polyline** - Connected line segments.
472. **BezierCurve** - Smooth curve.
473. **Spline** - Interpolated curve.

---

### Optimization
474. **OcclusionCulling** - Hides unseen objects.
475. **FrustumCulling** - Removes out-of-view objects.
476. **LevelOfDetail** - Detail level manager.
477. **BatchRendering** - Groups render calls.
478. **Instancing** - Efficient object rendering.
479. **GPUInstancing** - GPU-based instancing.
480. **CPUInstancing** - CPU-based instancing.

---

### Testing and QA
481. **TestFramework** - Testing system.
482. **MockObject** - Simulated object for tests.
483. **Stub** - Placeholder functionality.
484. **Spy** - Monitors interactions.
485. **TestCase** - Single test scenario.
486. **TestSuite** - Group of tests.

---

### Versioning
487. **VersionNumber** - Software version.
488. **BuildNumber** - Build identifier.
489. **Revision** - Version revision.
490. **Branch** - Development branch.
491. **Tag** - Version marker.

---

### Licensing
492. **LicenseKey** - Activation key.
493. **Validation** - License check.

---

### Additional Game Mechanics
494. **StatusEffect** - Temporary character condition.
495. **DialogueNode** - Conversation tree node.
496. **Objective** - Quest goal.
497. **Reward** - Quest completion prize.
498. **Equipment** - Equippable item slot.
499. **Path** - Movement route.
500. **Navigator** - Pathfinding guide.


(Due to technical issues, the search service is temporarily unavailable.)

Here’s a **comprehensive list of over 500 game engine class/struct/trait names**, organized by category for clarity. These cover core systems, rendering, physics, gameplay, and genre-specific features (ARPG, Roguelike, Metroidvania):

---

### **Core Engine Systems**
1. `Application`
2. `GameInstance`
3. `EngineConfig`
4. `Logger`
5. `Profiler`
6. `AssetManager`
7. `ResourceLoader`
8. `FileSystem`
9. `Time` (handles delta time, scaling)
10. `SceneManager`
11. `GameState`
12. `ObjectPool`
13. `EventSystem`
14. `Settings` (graphics, audio, input)
15. `Platform` (abstracts OS interactions)
16. `MemoryManager`
17. `TaskScheduler`
18. `ModuleManager`
19. `PluginSystem`
20. `DebugDraw`
21. `Localization`
22. `BuildSystem`
23. `PerformanceMonitor`

---

### **Entity Component System (ECS)**
24. `Entity`
25. `Component`
26. `System`
27. `EntityManager`
28. `ComponentPool`
29. `TransformComponent`
30. `SpriteComponent`
31. `PhysicsComponent`
32. `ScriptComponent`
33. `CameraComponent`
34. `LightComponent`
35. `AudioComponent`
36. `UIComponent`
37. `AnimationComponent`
38. `ColliderComponent`
39. `InventoryComponent`
40. `HealthComponent`
41. `StatusEffectComponent`
42. `AIComponent`
43. `NetworkComponent`

---

### **Rendering**
44. `Renderer`
45. `Camera`
46. `Shader`
47. `Texture`
48. `Material`
49. `Mesh`
50. `VertexBuffer`
51. `IndexBuffer`
52. `Framebuffer`
53. `RenderTarget`
54. `Viewport`
55. `GraphicsAPI` (abstracts DirectX/Vulkan/OpenGL)
56. `BlendMode`
57. `DepthStencil`
58. `SpriteBatch`
59. `DeferredRenderer`
60. `PostProcess` (bloom, AA, etc.)
61. `Skybox`
62. `ParticleRenderer`
63. `LineRenderer`
64. `FontAtlas`
65. `RenderPipeline`
66. `Model` (3D asset)
67. `SkinnedMesh`
68. `LODGroup` (Level of Detail)

---

### **Physics & Collision**
69. `PhysicsWorld`
70. `RigidBody`
71. `Collider`
72. `BoxCollider`
73. `SphereCollider`
74. `CapsuleCollider`
75. `RaycastHit`
76. `PhysicsMaterial`
77. `Joint`
78. `CharacterController`
79. `TriggerVolume`
80. `PhysicsDebugDraw`
81. `VehiclePhysics`
82. `Ragdoll`

---

### **Input Handling**
83. `InputManager`
84. `InputAction`
85. `Keyboard`
86. `Mouse`
87. `Gamepad`
88. `TouchInput`
89. `InputEvent`
90. `GestureRecognizer`
91. `InputRebinding`

---

### **Audio**
92. `AudioManager`
93. `Sound`
94. `Music`
95. `AudioSource`
96. `AudioListener`
97. `AudioMixer`
98. `SpatialAudio`
99. `VoiceChat`

---

### **UI System**
100. `UIManager`
101. `Widget`
102. `Button`
103. `Panel`
104. `TextLabel`
105. `Slider`
106. `Canvas`
107. `HUD`
108. `InventoryUI`
109. `DialogueBox`
110. `Minimap`
111. `Tooltip`

---

### **Animation**
112. `Animation`
113. `Animator`
114. `AnimationClip`
115. `Bone`
116. `Skeleton`
117. `BlendTree`
118. `IKController` (Inverse Kinematics)
119. `SpriteAnimation`

---

### **AI & Pathfinding**
120. `AIAgent`
121. `BehaviorTree`
122. `Blackboard`
123. `Pathfinding`
124. `NavMesh`
125. `SteeringBehavior`
126. `FSM` (Finite State Machine)
127. `UtilityAI`

---

### **Networking**
128. `NetworkManager`
129. `Packet`
130. `Client`
131. `Server`
132. `RPC` (Remote Procedure Call)
133. `NetworkTransform`
134. `Replication`
135. `LagCompensation`

---

### **Scripting**
136. `ScriptEngine`
137. `LuaScript`
138. `ScriptInstance`
139. `HotReload`
140. `ScriptBinding`

---

### **Gameplay Systems**
141. `GameMode`
142. `PlayerController`
143. `Character`
144. `Inventory`
145. `Item` (weapons, armor, consumables)
146. `Quest`
147. `DialogueSystem`
148. `Level`
149. `SpawnPoint`
150. `TriggerZone`
151. `LootTable`
152. `Crafting`
153. `SkillTree`
154. `Attribute` (STR, DEX, etc.)
155. `SaveSystem`
156. `Achievement`
157. `Cutscene`
158. `Projectile`
159. `Ability`
160. `Cooldown`

---

### **Math & Data Structures**
161. `Vector2`/`Vector3`/`Vector4`
162. `Matrix4`
163. `Quaternion`
164. `Transform` (position, rotation, scale)
165. `Bounds`
166. `Ray`
167. `Color`
168. `Random` (RNG utilities)
169. `Curve` (animation/easing)
170. `Grid` (tilemaps, pathfinding)
171. `Graph` (nodes for AI)
172. `SerializedObject` (save/load)

---

### **Utilities**
173. `Singleton`
174. `Factory`
175. `EventDispatcher`
176. `StateMachine`
177. `Timer`
178. `Coroutine`
179. `Command` (undo/redo)
180. `JSONParser`

---

### **ARPG-Specific**
181. `LootGenerator`
182. `ItemRarity` (common, epic, legendary)
183. `Affix` (item modifiers)
184. `SkillTree`
185. `Talent`
186. `ClassSystem` (warrior, mage)
187. `StatusResistance`
188. `Relic` (equippable power-ups)

---

### **Roguelike-Specific**
189. `ProceduralLevel`
190. `DungeonGenerator`
191. `Permadeath`
192. `RunHistory`
193. `Seed` (procedural generation)
194. `Biome` (forest, dungeon)
195. `FogOfWar`
196. `RiskReward` (gameplay choice)

---

### **Metroidvania-Specific**
197. `MapRevealer`
198. `AbilityGate` (locked by upgrades)
199. `DoubleJump`
200. `Grapple`
201. `MorphBall`
202. `SaveStation`
203. `Backtracking` (revisit areas)
204. `BossDoor`
205. `ElementalWeakness`

---

### **Advanced Systems**
206. `WeatherSystem` (rain, snow)
207. `TimeOfDay` (day/night cycle)
208. `Destructible` (breakable objects)
209. `StealthVisibility`
210. `DynamicEvent` (random encounters)
211. `ModSupport` (user-generated content)
212. `LevelEditor`

---

### **Physics Add-Ons**
213. `Buoyancy`
214. `ClothSimulation`
215. `SoftBody`

---

### **UI Extensions**
216. `DragDrop`
217. `InventoryTooltip`
218. `RadialMenu`
219. `DialogueChoice`

---

### **AI Extensions**
220. `Flocking` (group movement)
221. `ThreatAssessment`
222. `InfluenceMap`

---

### **Networking Extensions**
223. `SnapshotInterpolation`
224. `CheatDetection`
225. `VoiceData`

---

### **Scripting Extensions**
226. `ScriptedEvent`
227. `ConditionalTrigger`

---

### **Genre-Blended Systems**
228. `CraftingMaterial`
229. `Alchemy` (potion brewing)
230. `Shrine` (buff/debuff zones)
231. `EnvironmentalHazard` (lava, traps)
232. `PuzzleLock` (color-coded, sequence-based)

---

### **Low-Level Optimizations**
233. `SpatialPartition` (quadtree, octree)
234. `BatchRenderer`
235. `MemoryPool`

---

Core: Application, GameInstance, EngineConfig, Logger, AssetManager,
ResourceLoader, FileSystem, Time, SceneManager, GameState, ObjectPool,
EventSystem, Settings, Platform, MemoryManager, TaskScheduler, ThreadPool,
ModuleManager, PluginSystem, VersionControl, DebugDraw, CrashReporter,
CommandLineParser, Localization, ProjectSettings, BuildSystem, UpdateLoop,
FrameStats, PerformanceMonitor.

ECS: Entity, Component, System, EntityManager, ComponentPool,
TransformComponent, SpriteComponent, PhysicsComponent, ScriptComponent,
TagComponent, HierarchyComponent, CameraComponent, LightComponent,
AudioComponent, UIComponent, AnimationComponent, ParticleComponent,
ColliderComponent, RigidBodyComponent, NavMeshAgentComponent,
InventoryComponent, HealthComponent, StatusEffectComponent, WeaponComponent,
AIComponent, NetworkComponent, TerrainComponent, VehicleComponent,
PathfindingComponent, CharacterControllerComponent.

Rendering: Renderer, Camera, Shader, Texture, Material, Mesh, VertexBuffer,
IndexBuffer, RenderPass, Framebuffer, RenderTarget, Viewport, GraphicsAPI,
RenderState, BlendMode, DepthStencil, Rasterizer, VertexArray, UniformBuffer,
ComputeShader, SpriteBatch, DeferredRenderer, ForwardRenderer, PostProcess,
Skybox, Cubemap, Lightmap, ShadowMap, ParticleRenderer, LineRenderer,
TextRenderer, FontAtlas, GPUTimer, RenderPipeline, ShaderCompiler, TextureAtlas,
MaterialInstance, SubMesh, Model, SkinnedMesh, LODGroup, OcclusionCuller.

Physics: PhysicsWorld, RigidBody, Collider, BoxCollider, SphereCollider,
CapsuleCollider, MeshCollider, CompoundCollider, PhysicsMaterial, RaycastHit,
SweepResult, OverlapResult, Joint, HingeJoint, SpringJoint, FixedJoint,
CharacterController, PhysicsSimulation, CollisionLayer, TriggerVolume,
PhysicsShape, CollisionEvent, PhysicsSolver, ContactPoint, GravityArea,
ForceField, PhysicsDebugDraw, VehiclePhysics, Ragdoll, Raycaster,
CollisionGroup.

Input: InputManager, InputAction, InputMapping, Keyboard, Mouse, Gamepad,
TouchInput, InputEvent, InputAxis, InputButton, InputState, GestureRecognizer,
InputHandler, InputContext, ActionMap, Joystick, InputQueue, InputBinding,
InputDevice, InputSource, InputProcessor, VirtualButton, InputRebinding,
InputFeedback, MotionSensor, Gyroscope, Accelerometer.

Audio: AudioManager, Sound, Music, AudioSource, AudioListener, AudioClip,
AudioBuffer, AudioEffect, ReverbEffect, EchoEffect, AudioMixer, SoundInstance,
AudioGroup, SpatialAudio, AudioParameter, AudioEvent, AudioLoader, VoiceChat,
Microphone, AudioStream, Playlist, AudioPriority, AudioFade, AudioEnvelope,
AudioFilter, AudioAnalyzer, SoundBank, AudioResource, AudioUtils.

UI: UIManager, Widget, Button, Panel, TextLabel, Slider, Checkbox, RadioButton,
Dropdown, ScrollView, ProgressBar, Image, Canvas, Layout, GridLayout,
StackLayout, UIStyle, Font, Cursor, Tooltip, ModalWindow, HUD, InventoryUI,
DialogueBox, HealthBar, Minimap, Scoreboard, MenuSystem, UIAnimation, UIMask,
UIInputField, UIEffect, UIDataBinding, UILocalization, UINavigation, UIEvents,
UIRenderer, UITheme, UIState.

Animation: Animation, Animator, AnimationClip, AnimationState, AnimationLayer,
AnimationEvent, Bone, Skeleton, Skinning, Keyframe, Curve, BlendTree,
StateMachine, Transition, IKController, Rig, Pose, AnimationBlendSpace,
AnimationController, SpriteAnimation, FrameAnimation, SkeletalMesh, MorphTarget,
AnimationGraph, AnimationNode, Timeline, AnimationSequence, AnimationBlendMode,
AnimationExport, Retargeting.

AI: AIAgent, BehaviorTree, Blackboard, AINode, Selector, Sequence, Decorator,
ActionNode, ConditionNode, UtilityAI, Goal, Sensor, Memory, Pathfinding,
NavMesh, NavMeshAgent, Waypoint, PatrolRoute, SteeringBehavior, Seek, Flee,
Pursue, Evade, Wander, ObstacleAvoidance, Flocking, DecisionMaking, FSM, State,
Transition, AIUtility, TargetAcquisition, ThreatAssessment, InfluenceMap,
AIAnimation, AICommunication, AISpawner, AIStats.

Networking: NetworkManager, Packet, Client, Server, Connection, RPC,
NetworkTransform, SyncVar, NetworkIdentity, Replication, Session, Lobby,
Matchmaking, Ping, Latency, Bandwidth, Serialization, Deserialization,
NetworkEvent, Peer, Host, NATPunchthrough, NetworkDiscovery, Channel,
ReliablePacket, UnreliablePacket, VoiceData, NetworkAnimator, NetworkObject,
NetworkScene, Authority, Ownership, Snapshot, Interpolation, Prediction,
LagCompensation, CheatDetection, NetworkStats, Protocol, Handshake.

Scripting: ScriptEngine, LuaScript, PythonScript, ScriptComponent,
ScriptInstance, ScriptClass, ScriptFunction, ScriptBinding, ScriptEvent,
ScriptVariable, Debugger, HotReload, ScriptAsset, Module, API, ExposeMethod,
ExposeProperty, Coroutine, ScriptThread, ScriptContext, ScriptResource,
ScriptLoader, TypeBinding, ScriptError, ScriptProfiler, ScriptConsole,
ScriptDocumentation, ScriptTemplate, PluginScript, GameScript, EntityScript,
SystemScript, UIscript.

Gameplay: GameMode, PlayerController, Character, Pawn, Inventory, Item, Weapon,
Armor, Consumable, Quest, QuestLog, Objective, Reward, DialogueSystem, NPC,
Merchant, Faction, Reputation, Level, World, Chunk, SpawnPoint, Checkpoint,
TriggerZone, Interactable, LootTable, DropRate, Crafting, Recipe, Skill, Talent,
Perk, Attribute, Stat, Experience, Leveling, Health, Mana, Stamina,
StatusEffect, Buff, Debuff, Respawn, SaveSystem, LoadSystem, GameRules,
VictoryCondition, Achievement, Leaderboard, Tutorial, Cutscene,
CameraController, Projectile, MeleeAttack, Spell, Ability, Cooldown, Charge,
Combo, Parry, Block, Dodge, Stealth, Detection, Patrol, Aggro, LootSystem,
Trading, Barter, Economy, Shop, Vendor, AuctionHouse, Guild, Party, Group, Raid,
PvP, PvE, Difficulty, Scaling, DynamicEvent, Weather, TimeOfDay, Season,
TerrainModifier, Destructible, PhysicsObject, Vehicle, Mount, Pet, Companion,
Summon, Trap, Puzzle, Lock, Key, Door, Portal, Teleporter, Elevator, Platform,
MovingObject, Rotator, TimerSwitch, PressurePlate, LightPuzzle, ColorCode,
SequenceMatcher, CodeLock, Hacking, RhythmMiniGame, QuickTimeEvent.

Math & Data: Vector2, Vector3, Vector4, Matrix3, Matrix4, Quaternion, Transform,
Bounds, Rect, Plane, Ray, Sphere, AABB, OBB, Frustum, Color, Gradient, Curve,
Noise, Random, Mathf, Geometry, Intersection, Collision, Easing, Interpolation,
Bezier, Spline, CatmullRom, Hash, Grid, GridCell, Octree, Quadtree, BVH, KDTree,
SpatialPartition, Graph, Node, Edge, WeightedGraph, PriorityQueue, Heap, Stack,
Queue, LinkedList, Dictionary, Set, Bitmask, BitField, EnumFlags,
SerializedObject, JSON, XML, BinaryFormatter, DataBuffer, Compression,
Encryption, Checksum, GUID, UUID, Variant, AnyType, TypeInfo, RTTI, Reflection,
MetaData, Field, Property, Method, Attribute.

Utilities: Singleton, Factory, ObjectPool, EventDispatcher, StateMachine, Timer,
Coroutine, Observer, Command, UndoRedo, Plugin, Module, ServiceLocator,
DependencyInjector, Config, Settings, INIReader, CSVReader, XMLParser,
JSONParser, Logger, Debug, Assert, Profiler, Benchmark, UnitTest, TestCase,
Mock, Stub, Fixture, Editor, Inspector, Hierarchy, ProjectExplorer, Console,
Terminal, Clipboard, UndoHistory, RedoHistory, Macro, Shortcut, Toolbar, Menu,
Dialog, Wizard, Importer, Exporter, Converter, BatchProcessor, Scheduler, Cron,
Timeout, Interval, Delay, Throttle, Debounce, Cache, LRUCache, FIFOCache,
PriorityCache, Memoization, Flyweight, Adapter, Decorator, Composite, Visitor,
Strategy, ChainOfResponsibility, Mediator, Memento, Prototype, Proxy, Bridge,
Facade, Flyweight, State, TemplateMethod, Iterator, Observer, Command,
Interpreter.

Genre-Specific (ARPG/Roguelike/Metroidvania): LootGenerator, ItemRarity, Affix,
Socket, Gem, Enchantment, Rune, SkillTree, TalentTree, ClassSystem, Progression,
Permadeath, RunHistory, Seed, ProceduralLevel, RoomTemplate, Corridor,
DungeonLayout, Biome, TileSet, TileMap, FogOfWar, MapReveal, AbilityGate,
PowerUp, MetroidAbility, DoubleJump, Dash, Grapple, MorphBall, Bomb, EnergyTank,
SaveStation, MapStation, TeleporterNode, SequenceBreak, Backtracking,
EnemyRespawn, RoomLock, BossDoor, SwitchPuzzle, ColorDoor, ElementalWeakness,
StatusResistance, CraftingMaterial, Alchemy, Potion, Scroll, RuneStone, Relic,
Artifact, Shrine, Altar, Blessing, Curse, ShopsRandom, MerchantInventory,
MysteryItem, RiskReward, ScoreMultiplier, ComboMeter, Heat, ThreatLevel,
StealthVisibility, NoiseLevel, PatrolPath, SecretArea, LoreNote, Codex,
Bestiary, MapMarker, QuestArrow, HintSystem, EnvironmentalHazard, Trapdoor,
SpikeTrap, PoisonGas, MovingBlade, FallingRock, Lava, WaterCurrent, WindTunnel,
IcePhysics, SlipperySurface, ConveyorBelt, MagneticField, LightBeam,
MirrorPuzzle, WeightedButton, TimedDoor, PressureSensitive, VoiceCommand,
GestureControl, MotionControl, VRIntegration, ARSupport, CrossPlatformSave,
CloudSync, ModSupport, WorkshopIntegration, UserGeneratedContent, LevelEditor,
ScriptingAPI, PluginSDK.
