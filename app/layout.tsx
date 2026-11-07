export const metadata = {
  title: "RedPay Dashboard",
  description: "Modern dashboard for a demo wallet app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
