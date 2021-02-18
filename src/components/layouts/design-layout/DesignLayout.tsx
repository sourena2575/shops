import {Drawer} from 'components'
export const DesignLayout = ({children}) => {
    return (
        <div className='container mx-auto'>
            {/* <Drawer/> */}
            <div className='w-full'>
                {children}
            </div>
                    </div>
    )
}
