import sha256 from 'crypto-js/sha256'; // Import the necessary library for hashing

export const userId = (email) => {
  // Convert the email to lowercase and remove any whitespace
  const cleanedEmail = email.toLowerCase().trim();

  // Generate a hash using a hashing algorithm (e.g., SHA-256)
  const hash = sha256(cleanedEmail);

  // Extract a portion of the hash to use as the user ID
  const userId = hash.slice(0, 8); // Using the first 8 characters as the user ID

  return userId;
};