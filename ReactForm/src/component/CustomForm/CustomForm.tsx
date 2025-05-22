import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from 'zod'
import InputForm from './components/CustomInput';


const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"), 
    email: z.string().email("Correo invalido").min(1, "El correo es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñaes no coinciden",
    path: ["confirmPassword"],
})

type FormValues = z.infer<typeof schema>; //No hace falta volver a crear el type, lo podemos inferir del schema con Zod!

const CustomForm = () => {

    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm name='name' control={control} label='Nombre' type='text' error={errors.name} />
        <InputForm name='email' control={control} label='Email' type='email' error={errors.email} />
        <InputForm name='password' control={control} label='Password' type='password' error={errors.password} />
        <InputForm name='confirmPassword' control={control} label='Confirm Password' type='password' error={errors.confirmPassword} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default CustomForm;