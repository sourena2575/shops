import {Drawer} from 'components'
export const DesignLayout = ({children}) => {
    return (
        <div className='container mx-auto font-iransans'>
            {/* <Drawer/> */}
            <div className='w-full flex flx-col justify-center items-center'>
                {children}
            </div>
                    </div>
    )
}
