import {SocialLogin,LoginForm} from './dependencies'
export const LoginCard = () => {
    return (
        <div className='px-2 flex flex-col justify-center py-5'>
            

            <h4 className='text-center text-2xl mb-8'>ورود به حساب کاربری</h4>
            <SocialLogin/>
            <LoginForm/>
        </div>
    )
}
