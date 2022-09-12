const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, "scss")],
  },
  env: {
    backendUrl: process.env.backendUrl,
    firebaseApiKey: process.env.firebaseApiKey,
    firebaseAuthDomain: process.env.firebaseAuthDomain,
    projectID: process.env.projectID,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  },
};

module.exports = nextConfig;
