import Introduction from "./components/Introduction";
import About from  "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-20">
        <container className="container mx-auto px-12 py-4">
          <Introduction />
        </container>
        <container className="container mx-auto px-12 py-4">
          <About /> 
        </container>
        <container className="container mx-auto px-12 py-4">
          <Experience />
        </container>
        <container className="container mx-auto px-12 py-4">
          <Projects />
        </container>
    </main>
  );
}
