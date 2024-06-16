import { SignInForm } from '@/entities/SignIn';
import cls from './SignInPage.module.scss';
import { VStack } from '@/components/Stack';

const SignInPage = () => {
    return (
        <VStack justify="center" align="center" className={cls.SignInForm}>
            <SignInForm className={cls.form} />
        </VStack>
    );
};

export default SignInPage;
