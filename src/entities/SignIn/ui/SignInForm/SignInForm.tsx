import { useForm, SubmitHandler } from 'react-hook-form';
import cls from './SignInForm.module.scss';
import { Text, TextSize, TextTheme } from '@/components/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/components/Stack';
import { Button, ThemeButton } from '@/components/Button';
import { useState } from 'react';
import EyeOffIcon from '@assets/icons/eye-off.svg';
import EyeOnIcon from '@assets/icons/eye-on.svg';

interface IFormInput {
    firstName: string;
    password: string;
    confirmPassword: string;
    email: string;
}

interface SignInFormProps {
    className?: string;
}

export const SignInForm = (props: SignInFormProps) => {
    const { className } = props;
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    const password = watch('password', '');

    return (
        <VStack className={classNames(cls.SignInForm, {}, [className])}>
            <Text text="Регистрация" />
            <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                <label className={cls.label}>Имя</label>
                <input
                    className={classNames(cls.input, {
                        [cls.errorInput]: errors.firstName?.message,
                    })}
                    placeholder="Артур"
                    type="text"
                    {...register('firstName', { required: 'Имя обязательно' })}
                />
                {errors.firstName && (
                    <Text
                        text={errors.firstName.message}
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
                    <Button
                        onClick={togglePasswordVisibility}
                        className={cls.passwordEye}
                        theme={ThemeButton.CLEAR}
                    >
                        {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
                    </Button>
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
                    <Button
                        onClick={togglePasswordVisibility}
                        className={cls.passwordEye}
                        theme={ThemeButton.CLEAR}
                    >
                        {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
                    </Button>
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
                >
                    Зарегистрироваться
                </Button>
            </form>
        </VStack>
    );
};
