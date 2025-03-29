import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { AppSiderbar } from "./app-siderbar";

const SidebarLayout = async ({ children }: { children: React.ReactNode }) => {
    
  return (
    <SidebarProvider>
        <AppSiderbar></AppSiderbar>
        <main className="w-full m-2">
            <div className="flex items-center gap-2 border-sidebar-border border shadow rounded-md p-2 px-4">
                {/* <SearchBar */}
                <div className="ml-auto">
                    </div>
                    <UserButton/>
            </div>
            <div className="h-4"></div>
            {/*main content*/}
            <div className="border-siderbard-border bg-siderbar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
                {children}
            </div>

        </main>
    </SidebarProvider>
  );
}

export default SidebarLayout;