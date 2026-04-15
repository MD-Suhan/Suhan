import "./globals.css";

export const metadata = {
  title: "Sidratul Portfolio",
  description: "Personal Developer Portfolio"
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