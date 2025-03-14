import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-0">
        <main className="p-1.5 w-full">
          <div className="flex">
            <SidebarTrigger />
            <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mr-2"></div>
            <span>
              Dashboard
            </span>
          </div>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}