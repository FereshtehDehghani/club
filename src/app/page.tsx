import HomePageContent from "@/components/features/HomePageContent";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { clubData } from "@/data/clubData";

export default function Home() {
  return (
    <div className='flex flex-row justify-center font-irsans bg-transparent  min-h-screen w-full'>
      <main className='px-0 py-0 max-w-5xl w-full min-h-auto'>
        <Header
          clubName={clubData.name}
          logoSrc={clubData.images.logo}
          backgroundImage={clubData.images.mainImage}
        />
        <HomePageContent />
        <Footer />
      </main>
    </div>
  );
}
