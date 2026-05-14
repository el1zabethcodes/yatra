/**
 * TEST ACCOUNTS DATABASE
 * See also: docs/test-accounts.md for the full reference sheet
 */
export const TEST_USERS = [
  {
    id: "usr_001",
    name: "Arjun Sharma",
    email: "arjun.sharma@gmail.com",
    password: "Yatra2025!",
    birthDate: "March 12, 2003",
    goal: "Land a Frontend Engineer role at a product company",
    bio: "Full-Stack Explorer · CS Junior",
    subscription: "Explorer",
    memberSince: "January 2025",
    avatar: "/assets/3d_prof_anf.png",
    progress: 45,
    streak: 12,
    skills: 5,
    pearls: 8,
    radarScores: { Frontend: 0.72, Backend: 0.38, Logic: 0.55, Design: 0.60, SoftSkills: 0.70 },
  },
  {
    id: "usr_002",
    name: "Priya Nair",
    email: "priya.nair@gmail.com",
    password: "Ocean#2025",
    birthDate: "July 4, 2002",
    goal: "Become a UX/Product Designer at a SaaS startup",
    bio: "Design Voyager · HCI Graduate",
    subscription: "Navigator",
    memberSince: "March 2025",
    avatar: "/assets/3d_prof_anf_binocular.png",
    progress: 68,
    streak: 21,
    skills: 8,
    pearls: 14,
    radarScores: { Frontend: 0.55, Backend: 0.20, Logic: 0.45, Design: 0.88, SoftSkills: 0.82 },
  },
  {
    id: "usr_003",
    name: "Rohan Mehta",
    email: "rohan.mehta@gmail.com",
    password: "Captain99$",
    birthDate: "November 28, 2001",
    goal: "Get into a top ML research lab or FAANG as a Data Scientist",
    bio: "Data Captain · ML Enthusiast",
    subscription: "Captain",
    memberSince: "October 2024",
    avatar: "/assets/ai_bot_octo.png",
    progress: 82,
    streak: 34,
    skills: 11,
    pearls: 23,
    radarScores: { Frontend: 0.30, Backend: 0.65, Logic: 0.90, Design: 0.25, SoftSkills: 0.60 },
  },
];

/**
 * Authenticate a user by email + password.
 * Returns the user object (without password) or null.
 */
export function authenticate(email, password) {
  const user = TEST_USERS.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase().trim() &&
      u.password === password
  );
  if (!user) return null;
  const { password: _pw, ...safe } = user;
  return safe;
}

/**
 * Find user by id (for session restore).
 */
export function getUserById(id) {
  const user = TEST_USERS.find((u) => u.id === id);
  if (!user) return null;
  const { password: _pw, ...safe } = user;
  return safe;
}
