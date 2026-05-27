const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const mockUsers = [
  {
    id: 1,
    name: "Eleanor Vance",
    email: "eleanor.vance@example.com",
    role: "Senior Product Designer",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Vance",
    email: "marcus.v@example.com",
    role: "Full Stack Engineer",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Sophia Chen",
    email: "sophia.chen@example.com",
    role: "Lead PM",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Devon Lane",
    email: "devon.lane@example.com",
    role: "Cybersecurity Analyst",
    location: "Boston, MA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  },
  {
    id: 5,
    name: "Amara Okeke",
    email: "amara.okeke@example.com",
    role: "Data Scientist",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop"
  },
  {
    id: 6,
    name: "Liam O'Connor",
    email: "liam.oconnor@example.com",
    role: "DevOps Engineer",
    location: "Dublin, Ireland",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
  }
];


app.get('/api/users', (req, res) => {
  try {
    res.status(200).json(mockUsers);
  } catch (error) {
    res.status(500).json({ message: "Server error occurred while fetching users" });
  }
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 Backend Server running on port ${PORT}`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api/users`);
  console.log(`=========================================`);
});
