import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { AppLink } from '@/components/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Text } from '@/components/Text';
import { HStack, VStack } from '@/components/Stack';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <VStack
            gap="16"
            align="center"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            <Text title="Страница не найдена. Перейти на" />
            <HStack gap="32">
                <AppLink to={RoutePath.main}>Главную</AppLink>
                <AppLink to={RoutePath.sign_in}> Страницу входа</AppLink>
            </HStack>
        </VStack>
    );
};
