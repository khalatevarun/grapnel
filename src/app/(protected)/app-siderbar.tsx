'use client'

import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Anchor, Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const items = [
    
       { title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard
       },
       { title: "Q&A",
        url: "/qa",
        icon: Bot
       },
       { title: "Meetings",
        url: "/meetings",
        icon: Presentation
       },
       { title: "Billing",
        url: "/billing",
        icon: CreditCard
       },
]

const projects = [
    {
        name: "Project 1",
    },
    {
        name: "Project 1",
    },
    {
        name: "Project 1",
    },
    {
        name: "Project 1",
    }
]


export function AppSiderbar(){

    const pathname = usePathname();
    const { open } = useSidebar();

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
            <div className="flex items-center gap-2">
                <Anchor width={40} height={40}/>
                {
                    open && (
                        <h1 className="text-xl font-bold text-primary/80">
                            Grapnel
                        </h1>
                    )
                }
            </div>
            </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Applicaiton
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item)=>{
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url} className={cn({
                                        '!bg-primary !text-white': pathname === item.url,
                                    })}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    })}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Your Projects
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {projects.map((project, index)=>{
                            return (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <div>
                                            <div className={cn(
                                                'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
                                                {
                                                    'bg-primary text-white': true
                                                })}>
                                                {project.name[0]}
                                            </div>
                                            <span>{project.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                       
                        {open &&
                         <div className="h-2">
                            <SidebarMenuItem>
                                <Link href="/create">
                                <Button size="sm" variant={"outline"} className="w-fit">
                                    <Plus/>
                                  Create Project
                            </Button>
                                </Link>
                            </SidebarMenuItem>
                            </div>
                        }
                       
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        </Sidebar>
    )
}