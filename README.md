Spotify clone built with NestJS, PostgreSQL, and featuring authentication, playlist management, song handling, and artist functionality:

**Introduction**

This API documentation serves as a guide for developers and users interacting with a Spotify clone application. It details the functionalities, endpoints, request/response structures, authentication mechanisms, and data models involved.

**Technologies**

- Backend Framework: NestJS
- Database: PostgreSQL
- Authentication -- Not yet
- Data Models: Entities representing real-world concepts (users, playlists, songs, artists)

**Authentication**

_This section will be filled with specific details of your implemented authentication mechanism._

The API utilizes a secure authentication system to control access to sensitive data and functionalities. To interact with the API, users must obtain a valid authentication token through a separate login or signup process. This token should be included in the authorization header of all subsequent requests.

**Data Models**

- **User:** Represents a registered user with relevant information (ID, first name, last name, email, etc.)
- **Playlist:** Represents a user-created playlist containing songs (ID, name, user, songs)
- **Song:** Represents a song entity (ID, title, artist, duration, released date, lyrics, playlist, artists)
- **Artist:** Represents an artist associated with songs (ID, songs)

**Entities and Relationships**

(Replace placeholders with actual entity field names)

```
User
  - id (primary key)
  - first name
  - last name
  - email
  - password

Playlist
  - id (primary key)
  - name
  - owner_id (foreign key to User)
  - songs One to many relation 
  - user Many to one relation 

Song
  - id (primary key)
  - title
  - released date 
  - duration
  - lyrics
  - playlist Many to one relation
  - Artists Many to many relation

Artist
  - id (primary key)
  - songs Many to many relation
```

**API Endpoints**

**1. Users:**

- **POST /users** (Create User): Creates a new user account. **Request Body:** `{ firstName: string, lastName: string, email: string, password: string }` 

**2. Authentication (Placeholder):**

- **POST /auth/login** (Login): Authenticates a user and returns an access token. **Request Body:** `{ email: string, password: string }` **Response:** `{ token: string }` (Authentication token) --not yet

**3 . Playlists:**

- **GET /playlists** (Get All Playlists): Retrieves all playlists for the authenticated user (requires valid token). **Response:** `{ playlists: Playlist[] }` (Array of playlist objects)
- **GET /playlists/:id** (Get Playlist by ID): Retrieves a specific playlist by its ID (requires valid token). **Path Parameter:** `{ id: number }` **Response:** `{ playlist: Playlist }` (Playlist object)
- **POST /playlists** (Create Playlist): Creates a new playlist for the authenticated user (requires valid token). **Request Body:** `{ name: string }` **Response:** `{ playlist: Playlist }` (Newly created playlist object)
- **PUT /playlists/:id** (Update Playlist): Updates an existing playlist (requires valid token). **Path Parameter:** `{ id: number }` **Request Body:** `{ name: string }` (Optional fields for update) **Response:** `{ playlist: Playlist }` (Updated playlist object)
- **DELETE /playlists/:id** (Delete Playlist): Deletes a playlist by ID (requires valid token). **Path Parameter:** `{ id: number }` **Response:** `{ message: string }` (Success message)

**4. Songs:**

- **GET /songs** (Get All Songs): Retrieves all songs (consider pagination for large datasets). **Response:** `{ songs: Song[] }` (Array of song objects)
- **GET /songs/:id** (Get Song by ID): Retrieves a specific song by its ID. **Path Parameter:** `{ id: number }` **Response:** `{ song: Song }` (Song object)

**5. Artists:**

- **GET /artists** (Get All Artists): Retrieves all artists (consider pagination for large datasets). **Response:** `{ artists: Artist[] }` (Array of artist objects)
- **GET /artists/:id** (Get Artist by ID): Retrieves a specific artist by its ID. **Path Parameter:** `{ id: number }` **Response:** `{ artist: Artist }` (Artist object)

