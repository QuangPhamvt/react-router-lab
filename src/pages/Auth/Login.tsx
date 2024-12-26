import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { user } from '../../data/user'
import { useIsLoginContext } from '../../providers/UserContext'
import { useNavigate } from 'react-router'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
const Login: FC = () => {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const {
    reset,
    formState: { errors },
  } = form

  const { isLogin, setIsLogin } = useIsLoginContext()

  useEffect(() => {
    if (isLogin) {
      navigate('/')
    }
  }, [isLogin, navigate])

  const handleSubmit = () => {
    const isLogin = user.find(
      (u) =>
        u.email === form.getValues('email') &&
        u.password === form.getValues('password')
    )
    console.log('isLogin', !!isLogin)
    if (isLogin) {
      navigate('/')
      setIsLogin(!!isLogin)
      reset({
        email: '',
        password: '',
      })
    }
  }

  return (
    <div className="flex flex-col">
      <div>Login</div>
      <form
        className="flex flex-col gap-y-2 mt-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field }) => <input {...field} placeholder="Email" />}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field }) => <input {...field} placeholder="Password" />}
        />
        <button type="submit">Login</button>

        <ErrorMessage errors={errors} name="email" />
        <ErrorMessage errors={errors} name="password" />
      </form>
    </div>
  )
}

export default Login
