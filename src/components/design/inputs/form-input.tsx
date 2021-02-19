import {FC} from 'react'
import {useClass} from 'hooks'
import {useForm} from 'react-hook-form'
interface IFormInput {
    type?:string;
    placeholder?:string  
    errorMessage?:string;
    className?:string;
    errorClass?:string;
    register:any,
    error?:{},
    onChange?:any,
    onBlur?:any,
    name:string,
    required?:boolean

}

export const FormInput:FC<IFormInput> = ({className,errorMessage,errorClass,register,error,type,placeholder,name,required}) => {
    const {join} = useClass()
    console.log(error,'error')
    
    return<>
      <input dir='rtl' type={type ? type : 'text'} placeholder={placeholder} name={name} ref={register({required:required})} required={required} className={join('h-14   w-full  rounded-lg  border px-4  mb-5   focus:outline-none  focus:border-green-300 focus:bg-green-100',className)} />
      {error ? <span className={join('w-full text-right text-red-600 mb-5',errorClass)}>{errorMessage}</span> : null}
    </>
}


