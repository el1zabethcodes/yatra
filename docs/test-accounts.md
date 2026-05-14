# Yatra — Test Accounts

Use these credentials on the [Sign In page](/login) to explore the dashboard.  
Click any account row on the login page to auto-fill the fields.

---

## Account 1 — Arjun Sharma
| Field        | Value                                              |
|--------------|----------------------------------------------------|
| **Name**     | Arjun Sharma                                       |
| **Email**    | arjun.sharma@gmail.com                             |
| **Password** | Yatra2025!                                         |
| **Plan**     | Explorer (Free)                                    |
| **Goal**     | Land a Frontend Engineer role at a product company |
| **DOB**      | March 12, 2003                                     |
| **Progress** | 45%                                                |
| **Streak**   | 12 days                                            |

---

## Account 2 — Priya Nair
| Field        | Value                                              |
|--------------|----------------------------------------------------|
| **Name**     | Priya Nair                                         |
| **Email**    | priya.nair@gmail.com                               |
| **Password** | Ocean#2025                                         |
| **Plan**     | Navigator (₹999/mo)                                |
| **Goal**     | Become a UX/Product Designer at a SaaS startup     |
| **DOB**      | July 4, 2002                                       |
| **Progress** | 68%                                                |
| **Streak**   | 21 days                                            |

---

## Account 3 — Rohan Mehta
| Field        | Value                                                        |
|--------------|--------------------------------------------------------------|
| **Name**     | Rohan Mehta                                                  |
| **Email**    | rohan.mehta@gmail.com                                        |
| **Password** | Captain99$                                                   |
| **Plan**     | Captain (₹7999/yr)                                           |
| **Goal**     | Get into a top ML research lab or FAANG as a Data Scientist  |
| **DOB**      | November 28, 2001                                            |
| **Progress** | 82%                                                          |
| **Streak**   | 34 days                                                      |

---

## Notes
- Passwords are stored in `frontend/lib/users.js` — **never commit real credentials here in production**.
- Each account has unique `radarScores` so the Skill Radar on the Dashboard tab shows different shapes per user.
- The "Remember me" checkbox persists the session in `localStorage` under the key `yatra_session_uid`.
- Sign Up flow is a demo — it shows a success state and redirects to Sign In. No new accounts are actually persisted.
