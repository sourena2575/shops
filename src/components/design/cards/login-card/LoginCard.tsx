import {SocialLogin,LoginForm} from './dependencies'
export const LoginCard = () => {
    return (
        <div className='px-2 flex flex-col justify-center'>
            

            <h4 className='text-center'>ورود به حساب کاربری</h4>
            <SocialLogin/>
            <LoginForm/>
        </div>
    )
}
