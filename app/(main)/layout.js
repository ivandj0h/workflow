import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import Topbar from "@/components/Shared/Topbar/Topbar";

export default async function ProtectedLayout({ children }) {
  return (
    <section>
      <div className="flex">
        <aside className="w-[220px] h-screen border-r">
            <Sidebar />
        </aside>

        <div className="w-[calc(100%-220px)] bg-[#f2f4f7] dark:bg-background">
            <Topbar />
            <div>
                {children}
            </div>
        </div>
      </div>
    </section>
  );
}
