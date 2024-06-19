import { useForm, SubmitHandler } from 'react-hook-form';
import cls from './SignInForm.module.scss';
import { Text, TextSize, TextTheme } from '@/components/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/components/Stack';
import { Button, ThemeButton } from '@/components/Button';
import { memo, useState } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { signInByUsername } from '../../model/services/signInByUsername';
import { useSelector } from 'react-redux';
import {
    getSignInError,
    getSignInIsLoading,
} from '../../model/selectors/signInSelectors';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { PasswordVisibility } from '@/widgets/PasswordVisibility';

interface IFormInput {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

interface SignInFormProps {
    className?: string;
}

export const SignInForm = memo((props: SignInFormProps) => {
    const { className } = props;
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector(getSignInIsLoading);
    const error = useSelector(getSignInError);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const { email, password } = data;
        const payload = { email, password };

        dispatch(signInByUsername(payload)).unwrap();
        navigate(RoutePath.main);
    };

    const password = watch('password', '');

    return (
        <VStack className={classNames(cls.SignInForm, {}, [className])}>
            <Text text="Регистрация" />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                <label className={cls.label}>Имя</label>
                <input
                    className={classNames(cls.input, {
                        [cls.errorInput]: errors.username?.message,
                    })}
                    placeholder="Артур"
                    type="text"
                    {...register('username', { required: 'Имя обязательно' })}
                />
                {errors.username && (
                    <Text
                        text={errors.username.message}
                        className={cls.error}
                        theme={TextTheme.ERROR}
                        size={TextSize.S}
                    />
                )}
                <label className={cls.label}>Электронная почта</label>
                <input
                    className={classNames(cls.input, {
                        [cls.errorInput]: errors.email?.message,
                    })}
                    placeholder="example@mail.ru"
                    type="email"
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Некорректный email',
                        },
                    })}
                />
                {errors.email && (
                    <Text
                        text={errors.email.message}
                        className={cls.error}
                        theme={TextTheme.ERROR}
                        size={TextSize.S}
                    />
                )}
                <label className={cls.label}>Пароль</label>
                <VStack className={cls.containerInput}>
                    <input
                        className={classNames(cls.input, {
                            [cls.errorInput]: errors.password?.message,
                        })}
                        placeholder="******"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message:
                                    'Пароль должен быть не менее 6 символов',
                            },
                        })}
                    />
                    <PasswordVisibility
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        className={cls.passwordEye}
                    />
                    {errors.password && (
                        <Text
                            text={errors.password.message}
                            className={cls.error}
                            theme={TextTheme.ERROR}
                            size={TextSize.S}
                        />
                    )}
                </VStack>
                <label className={cls.label}>Подтвердите пароль</label>
                <VStack className={cls.containerInput}>
                    <input
                        className={classNames(cls.input, {
                            [cls.errorInput]: errors.confirmPassword?.message,
                        })}
                        placeholder="******"
                        type={showPassword ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message:
                                    'Пароль должен быть не менее 6 символов',
                            },
                            validate: (value) =>
                                value === password || 'Пароли не совпадают',
                        })}
                    />
                    <PasswordVisibility
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        className={cls.passwordEye}
                    />
                    {errors.confirmPassword && (
                        <Text
                            text={errors.confirmPassword.message}
                            className={cls.error}
                            theme={TextTheme.ERROR}
                            size={TextSize.S}
                        />
                    )}
                </VStack>
                <Button
                    type="submit"
                    theme={ThemeButton.ACCENT}
                    className={cls.submitBtn}
                    disabled={isLoading}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </VStack>
    );
});
