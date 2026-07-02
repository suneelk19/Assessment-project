// File: app/layout.js

import "./globals.css";

export const metadata = {
  title: "Creator Portfolio",
  description: "Creator Portfolio Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}