const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Mock data
const universityData = {
  overview: {
    name: "Elite University",
    established: 1995,
    location: "Mumbai, Maharashtra",
    accreditation: "NAAC A++ Grade",
    totalStudents: 15000,
    facultyCount: 800,
    campusArea: "50 acres"
  },
  courses: [
    {
      name: "Computer Science",
      duration: "4 years",
      degree: "B.Tech",
      specializations: ["AI/ML", "Cybersecurity", "Data Science", "Software Engineering"]
    },
    {
      name: "Engineering",
      duration: "4 years",
      degree: "B.Tech",
      specializations: ["Mechanical", "Electrical", "Civil", "Chemical"]
    },
    {
      name: "Business Administration",
      duration: "3 years",
      degree: "BBA",
      specializations: ["Finance", "Marketing", "HR", "International Business"]
    },
    {
      name: "Medicine",
      duration: "5.5 years",
      degree: "MBBS",
      specializations: ["General Medicine", "Surgery", "Pediatrics"]
    },
    {
      name: "Law",
      duration: "5 years",
      degree: "LLB",
      specializations: ["Criminal Law", "Corporate Law", "International Law"]
    },
    {
      name: "Arts",
      duration: "3 years",
      degree: "BA",
      specializations: ["English Literature", "History", "Psychology", "Sociology"]
    },
    {
      name: "Science",
      duration: "3 years",
      degree: "BSc",
      specializations: ["Physics", "Chemistry", "Mathematics", "Biology"]
    }
  ]
};

const feesData = [
  {
    course: "B.Tech Computer Science",
    feeRange: "₹8,00,000 - ₹12,00,000"
  },
  {
    course: "B.Tech Mechanical Engineering",
    feeRange: "₹7,50,000 - ₹11,00,000"
  },
  {
    course: "B.Tech Electrical Engineering",
    feeRange: "₹7,00,000 - ₹10,50,000"
  },
  {
    course: "B.Tech Civil Engineering",
    feeRange: "₹6,50,000 - ₹9,50,000"
  },
  {
    course: "B.Tech Chemical Engineering",
    feeRange: "₹8,50,000 - ₹13,00,000"
  },
  {
    course: "B.Tech Information Technology",
    feeRange: "₹7,50,000 - ₹11,50,000"
  },
  {
    course: "B.Tech Electronics & Communication",
    feeRange: "₹7,00,000 - ₹10,00,000"
  },
  {
    course: "B.Tech Biotechnology",
    feeRange: "₹9,00,000 - ₹14,00,000"
  }
];

// Routes
app.get('/api/fees', (req, res) => {
  res.json(feesData);
});

app.get('/api/university', (req, res) => {
  res.json(universityData);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  GET /api/fees - Course fees data`);
  console.log(`  GET /api/university - University overview and courses`);
  console.log(`  GET /health - Health check`);
  console.log(`Static files served from current directory`);
});
