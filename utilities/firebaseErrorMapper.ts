// map firebase error to custom error
export const firebaseErrorMapper = (error: string) => {
  switch (error) {
    case "auth/email-already-in-use":
      return "Email already in use";
    case "auth/invalid-email":
      return "Invalid email";
    case "auth/user-not-found":
      return "User not found";
    case "auth/wrong-password":
      return "Wrong password";
    case "auth/user-disabled":
      return "User disabled";
    case "auth/too-many-requests":
      return "Too many requests";
    case "auth/user-token-expired":
      return "User token expired";
    case "auth/user-token-not-found":
      return "User token not found";
    case "auth/invalid-credential":
      return "Invalid credential";
    case "auth/invalid-verification-code":
      return "Invalid verification code";
    case "auth/invalid-verification-id":
      return "Invalid verification id";
    case "auth/invalid-password":
      return "Invalid password";
    case "auth/weak-password":
      return "Weak password";
    case "auth/requires-recent-login":
      return "Requires recent login";
    case "auth/requires-recent-login":
      return "Requires recent login";
    case "auth/user-not-found":
      return "User not found";
    case "auth/user-disabled":
      return "User disabled";
    case "auth/user-token-expired":
      return "User token expired";
    case "auth/user-token-not-found":
      return "User token not found";
    case "auth/invalid-credential":
      return "Invalid credential";
    case "auth/invalid-verification-code":
      return "Invalid verification code";
    case "auth/invalid-verification-id":
      return "Invalid verification id";
    case "auth/invalid-password":
      return "Invalid password";
    case "auth/weak-password":
      return "Weak password";
    case "auth/requires-recent-login":
      return "Requires recent login";
    case "auth/requires-recent-login":
      return "Requires recent login";
    case "auth/user-not-found":
      return "User not found";
    case "auth/user-disabled":
      return "User disabled";
  }
};

export default firebaseErrorMapper;
