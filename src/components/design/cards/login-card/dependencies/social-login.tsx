import {GeneralLink} from 'components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons' 
export const SocialLogin = () => {
    const SocialBox = ({type})=>{
        return(
            <>
            {(type === 'facebook') ?
            <GeneralLink>
            <div className={`bg-blue-600 text-white h-12 w-full flex flex-row-reverse  items-center justify-between mb-8 px-5 ` }>
            <div>ورود با فیسبوک</div>
            <div><FontAwesomeIcon  icon={faFacebook} className='text-2xl' /></div>
            </div>
            </GeneralLink>
            :             
            <GeneralLink>
            <div className={`bg-red-600 text-white h-12 w-full flex flex-row-reverse items-center  justify-between mb-8 px-5 ` }>
            <div>ورود با گوگل</div>
            <div><FontAwesomeIcon  icon={faGoogle} className='text-2xl'/></div>
            </div>
            </GeneralLink>

            }
            </>
        )
    }
    return (
        <div className='flex flex-col mb-8'>
            <p className='text-gray-500 text-center mb-8'>با استفاده از شبکه های اجتماعی به حساب خود وارد شوید</p> 
            <SocialBox type='google'/>           
            <SocialBox type='facebook'/>           
            
        </div>
    )
}
