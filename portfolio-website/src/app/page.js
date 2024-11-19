import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import About from  "./components/About";
import Projects from "./components/Projects"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-20">
      <Navbar />
        <container className="container mx-auto px-12 py-4">
          <Introduction />
        </container>
        <container className="container mx-auto px-12 py-4">
          <About /> 
        </container>
        <container className="container mx-auto px-12 py-4">
          <Projects />
        </container>
    </main>
  );
}
