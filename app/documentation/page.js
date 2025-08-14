// app/documentation/page.js
import DocSidebar from "../components/DocSidebar";
import DocContent from "../components/DocContent";
// import DocAnchorNav from "../components/DocAnchorNav";

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <DocSidebar />

      {/* Main Content */}
      <main className="flex-1 max-w-4xl px-8 py-32 mx-auto relative">
        <DocContent />
        {/* Right Anchor Navigation */}
        <div className="hidden lg:block absolute right-[-200px] top-12">
          {/* <DocAnchorNav /> */}
        </div>
      </main>
    </div>
  );
}
