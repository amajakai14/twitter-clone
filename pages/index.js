import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create nexp app"></meta>
        <link rel="icon" href="/twittericon.ico"></link>
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  );
}
