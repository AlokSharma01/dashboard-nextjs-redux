import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { ChildrenType } from '@/types/types'
import { X } from 'lucide-react'

import SideDrawerContent from './side-drawer-content'

const SideDrawer = ({ activeTab ,children }: {activeTab:string,children:React.ReactNode}) => {
    return (
        <Drawer >
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent
                style={{
                    position: 'fixed',
                    top: "-100px",
                    right: 0,
                    height: '100vh',
                    width: '50vw',
                    transform: 'translateX(100%)', 
                    transition: 'transform 0.3s ease-in-out', 
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white', 
                    zIndex: 9999, 
                }}
                className="custom-drawer-content"
            >
                <div className='bg-blue-700 text-white font-semibold p-2 px-5 flex items-center justify-between'>
                    <p>Add Widget</p>
                    <DrawerClose>
                        <X />
                    </DrawerClose>
                </div>
                <DrawerHeader>
                    <DrawerTitle>Personalise your dashboard by adding the following widget</DrawerTitle>
                </DrawerHeader>
                <SideDrawerContent activeTab={activeTab}/>
                {/* <DrawerFooter className='flex flex-row-reverse'>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}

export default SideDrawer