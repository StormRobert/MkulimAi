import HomeNavbar from "./Home/HomeNavbar";
import HomeHero from "./Home/HomeHero";
import HomeFormPanel from "./Home/HomeFormPanel";
import HomeFooter from "./Home/HomeFooter";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/50 text-gray-800">
      <HomeNavbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <HomeHero />
          <HomeFormPanel />
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}

export default Home;
