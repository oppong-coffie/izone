import Header from "../components/Header";
import Footer from "../components/ui/Footer";

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
      <Footer />
    </>
  );
}
