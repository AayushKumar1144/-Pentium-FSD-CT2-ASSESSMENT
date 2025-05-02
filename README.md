A full-stack web application to manage student team members, allowing you to add, view, and get detailed information about team members with profile images.

Built with:

Frontend: React.js

Backend: Node.js + Express.js

Database: MongoDB

File Uploads: Multer

📦 Project Features
✅ Add new team members with name, role, email, and profile image
✅ View all team members in a list with images
✅ Click to view full details of each member
✅ Store uploaded images in /uploads/ folder
✅ API endpoints for adding and retrieving members

🚀 Installation Steps
1️⃣ Clone the repository
bash
Copy
Edit
git clone <repository-url>
cd student-team-app
2️⃣ Install backend dependencies
bash
Copy
Edit
cd backend
npm install
3️⃣ Install frontend dependencies
bash
Copy
Edit
cd ../frontend
npm install
⚙️ Configuration
✅ Ensure MongoDB is running locally on mongodb://127.0.0.1:27017/studentteam
✅ Or update the MongoDB connection string in backend/server.js if needed

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/members	Add a new member (with image)
GET	/api/members	Get list of all members
GET	/api/members/:id	Get details of a member by ID

 

🏃 How to Run
▶️ Run Backend Server
In /backend folder:

bash
Copy
Edit
npx nodemon server.js
The backend will run at http://localhost:5000

▶️ Run Frontend React App
In /frontend folder:

bash
Copy
Edit
npm start
The frontend will open at http://localhost:3000

✅ How it works
Open frontend in browser → http://localhost:3000

Use Add Member to add new team members

View members in View Members page

Click View Details to see individual member info

📝 Notes
Don’t forget to create /backend/uploads/ folder manually before running

Add .gitignore to exclude node_modules, /uploads/, /build/

👨‍💻 Developed by 
Aayush Kumar
Anurag Jethi
Aditya Vijay
Adarsh Chauhan

-Pentium-FSD-CT2-ASSESSMENT
![image](https://github.com/user-attachments/assets/c1d71fcb-a67d-4d15-a0c8-62f3b8d3d54a)
![image](https://github.com/user-attachments/assets/7505e28a-0ee4-4381-bc6c-7488ad5ff42e)


