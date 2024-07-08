# Profile Management App

This application demonstrates how to manage a user profile using React, Redux, Chakra UI, and React Router. It allows users to view their profile information, update it through a form, and persist changes across page refreshes using local storage.

## Components

### ProfileCard.jsx

The `ProfileCard.jsx` component displays the user's profile information, including their name, title, location, biography, and a profile picture. It allows users to navigate to the update profile form for making changes.

#### Features:

- Displays user profile details fetched from Redux state or local storage if not available in Redux.
- Utilizes Chakra UI components for layout and styling.
- Allows navigation to the update profile form for editing profile information.

#### Usage:

- Renders a profile card with dynamic content based on the user's profile data.
- Includes a button to navigate to `/update-profile` for editing the profile.

### UpdateProfileForm.jsx

The `UpdateProfileForm.jsx` component provides a form for users to update their profile information. It integrates with Redux for state management and local storage for persistent data storage across sessions.

#### Features:

- Retrieves initial profile data from Redux state or local storage if not available in Redux.
- Updates profile information dynamically as users type in the form fields.
- Handles form submission to update both Redux state and local storage with the new profile data.
- Uses Chakra UI components for form elements and styling.

#### Usage:

- Displays input fields for updating name, title, location, and biography.
- Submits changes to Redux state and local storage upon form submission.
- Redirects users back to the profile view (`/`) after successful submission.

### Setup and Installation

1. **Clone Repository:**

   ```bash
   git clone <repository_url>
   cd profile-management-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run Application:**

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

### Additional Notes

- Ensure Redux store configuration (`profileSlice`) correctly handles profile state initialization and updates.
- Use browser developer tools to monitor local storage updates (`localStorage.getItem('profile')`) for debugging persistence issues.
- Customize styling and UI components further using Chakra UI theming and components as needed.
