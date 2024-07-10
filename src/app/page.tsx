import Banner from "@/components/Banner";
import MenuBar from "@/components/MenuBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <MenuBar />
      <Banner />
      <main>
        <Services />
      </main>
    </>
  );
}
