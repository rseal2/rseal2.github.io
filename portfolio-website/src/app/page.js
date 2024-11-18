import Image from "next/image";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto py-4">
        <container className="container mx-auto px-12 py-4">
          <Introduction />
        </container>
    </main>
  );
}
