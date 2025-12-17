import Header from "../components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* Space for fixed header */}
      <main className="pt-[104px]">{children}</main>
    </>
  );
}
