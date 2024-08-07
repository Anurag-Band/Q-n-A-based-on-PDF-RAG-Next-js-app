import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import Alert from "./components/ui/Alert";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 background-gradient">
      <Alert />
      <Header />
      <ChatSection />
    </main>
  );
}
