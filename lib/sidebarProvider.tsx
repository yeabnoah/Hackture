import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const SidebarProviderComp = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default SidebarProviderComp
