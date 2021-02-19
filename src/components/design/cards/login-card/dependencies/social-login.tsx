import {GeneralLink} from 'components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons' 
export const SocialLogin = () => {
    const SocialBox = ({type})=>{
        return(
            <>
            {(type === 'facebook') ?
            <GeneralLink href='./'>
            <div className={`bg-blue-600 text-white h-12 w-full flex flex-row-reverse  items-center justify-between mb-8 px-5 rounded-lg  ` }>
            <div>ورود با فیسبوک</div>
          <FontAwesomeIcon  icon={faFacebook} className='text-2xl' />
            </div>
            </GeneralLink>
            :             
            <GeneralLink href='./'>
            <div className={`bg-red-600 text-white h-12 w-full flex flex-row-reverse items-center  justify-between mb-8 px-5  rounded-lg ` }>
            <div>ورود با گوگل</div>
            <FontAwesomeIcon  icon={faGoogle} className='text-2xl'/>
            </div>
            </GeneralLink>

            }
            </>
        )
    }
    return (
        <div className='flex flex-col'>
            <p className='text-gray-500 text-center mb-8'>با استفاده از شبکه های اجتماعی به حساب خود وارد شوید</p> 
            <SocialBox type='google'/>           
            <SocialBox type='facebook'/>           
            
        </div>
    )
}
