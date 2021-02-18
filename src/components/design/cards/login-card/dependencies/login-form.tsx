import {useForm} from 'react-hook-form'
import {GeneralLink} from 'components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
export const LoginForm = () => {

    const {register} = useForm()
    return (
        <div className='flex flex-col justify-center items-center'>
            <p>یا با نام کاربری ثبت نامی خود وارد شوید.</p>
            <input type='text' placeholder='نام کاربری' name='userName' ref={register({required:'لطفا نام کاربری را وارد کنید.'})} className='h-12'/>
            <input type='text' placeholder='رمز عبور' name='password' ref={register({required:'لطفا رمزعبور را وارد کنید.'})} className='h-12' />           
            <GeneralLink className='justify-self-end' ><p>رمز عبور خود را فراموش کرده ام.</p></GeneralLink>
            <div className='flex flex-row-reverse'>
            <div>هنوز حساب کاربری ندارید؟</div>
            <GeneralLink className='text-green-600'>ثبت نام کنید.</GeneralLink>
            
            </div>
        <button className='self-end text-white bg-green-600 w-20 h-10 ' type='submit'>
                <FontAwesomeIcon icon={faArrowCircleRight}/>
            </button>
        </div>
    )
}
