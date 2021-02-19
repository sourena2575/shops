import {useForm} from 'react-hook-form'
import {GeneralLink,FormInput} from 'components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
export const LoginForm = () => {
    const {register,handleSubmit,errors} = useForm();
    console.log(errors,'errors')
    const onSubmit =(data)=>{
        console.log(data,'data')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
            <p className='text-xs text-gray-500 mb-8 '>یا با نام کاربری ثبت نامی خود وارد شوید.</p>
            <FormInput type='text' placeholder='نام کاربری' name='userName' register={register} error={errors.userName} errorMessage='.لطفا نام کاربری را وارد کنید' /> 
            <FormInput type='text' placeholder='رمز عبور' name='password' register={register} error={errors.password} errorMessage='.لطفارمزعبور را وارد کنید'  />           

            <GeneralLink className='w-full text-left text-xs text-gray-500 mb-5' ><p>.رمز عبور خود را فراموش کرده ام</p></GeneralLink>
            <div className='flex flex-row-reverse mb-8 text-sm'>
            <span  >هنوز حساب کاربری ندارید؟</span>
            <GeneralLink className='text-green-300 hover:text-green-400 mr-2'>.ثبت نام کنید</GeneralLink>
            
            </div>
        <button className='self-end text-white bg-green-300 w-20 h-12 rounded-lg flex justify-center items-center focus:outline-none hover:bg-green-400' type='submit'>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl' style={{width:'1em'}}/>
            </button>
        </form>
    )
}
