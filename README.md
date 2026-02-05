EduProtocol

EduProtocol is an educational platform built around a value-exchange learning model powered by an internal digital token system.


The core idea is simple yet powerful:

1-Anyone can offer learning sessions for skills they possess.

2-By teaching others, they earn internal tokens.

3-These tokens can then be used to learn new skills from other members of the community.


The platform aims to create a sustainable learning economy driven by participation, interaction, and the real value of knowledge.


🎯 Project Goals

1-Encourage self-directed and continuous learning

2-Empower individuals to share their expertise and gain value in return

3-Build an internal, symbolic digital token economy

4-Create a scalable and maintainable backend architecture

5-Enable collaboration and contributions from developers


🧑‍💻 Tech Team & Roles

1-Alarin — Backend Lead

Responsible for backend architecture, API design, and system logic.


2-kuro — Frontend Developer

Working on HTML/CSS structure and implementing UI layouts.


3-Aram — Frontend Developer

Responsible for JavaScript logic, interactivity, and frontend integration.


4- Dima -- Frontend Assistant

  Assisting with basic HTML/CSS tasks under supervision.


5-Pearl — Graphic Designer

Designing the visual identity, UI mockups, and overall user experience.



🧩 Features

1-Internal digital token system (Token Economy)

2-Flexible educational sessions (short / long)

3-Users CRUD management

4-Educational session management

5-Rating and feedback system to improve content quality

6-Digital identity per user with achievements and learning history

7-RESTful API built with Express.js

8-Clean, scalable, and extensible project structure

9-Ready for future frontend integration


🛠️ Technologies Used

1-Node.js

2-Express.js

3-(Future)Database: MySQL or PostgreSQL

4-Git & GitHub for Version Management

5-(Future) JWT / Auth / Roles

EduProtocol/


│

├── backend/



│   ├── src/


│   │   ├── routes/

│   │   ├── controllers/

│   │   ├── services/

│   │   ├── models/

│   │   └── app.js


│   ├── package.json

│   └── .env.example

│
├── README.md

└── .gitignore


🚀 Run Locally

Requirements

Node.js (v18+ preferred)

npm or yarn

Database (MySQL or PostgreSQL)

Steps


# Clone the project

git clone https://github.com/Alarin-dev/Eduprotocol.git

# Navigate to the folder

cd EduProtocol

# Install the dependencies

npm install

# Configure environment variables

cp .env.example .env

# Start the server

npm run dev


(env.)

PORT=3000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=******

DB_NAME=eduprotocol


🤝 Contributing to the Project

We welcome all contributions:

1. Fork the project
2. Create a new branch (feature/your-feature)
3. Commit to changes
4. Push to the branch
5. Open a pull request


📌 Project Status
🚧 The project is currently in the early development / Early MVP design phase.

Current focus:

-Core user system
-Educational sessions management
-Internal token logic and rules

✨ Notes
This project is not just an educational experience, but the foundation for a real educational platform aimed at actual users.

