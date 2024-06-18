import { HStack, VStack } from '@/components/Stack';
import { Text, TextSize } from '@/components/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserDescription.module.scss';
import { AppLink } from '@/components/AppLink';
import PhoneIcon from '@assets/icons/phone.svg';
import EmailIcon from '@assets/icons/email.svg';
import { memo } from 'react';
import { User } from '@/entities/Users/model/types/user';

interface UserDescriptionProps {
    className?: string;
    user: User;
}

export const UserDescription = memo((props: UserDescriptionProps) => {
    const { className, user } = props;
    return (
        <HStack
            align="start"
            wrap
            className={classNames(cls.UserDescription, {}, [className])}
        >
            <Text
                className={cls.descriptionText}
                title={user.info}
                size={TextSize.S}
            />
            <VStack gap="25">
                <AppLink to={'#'} className={cls.link}>
                    <PhoneIcon />
                    <Text title={user.phone} size={TextSize.S} />
                </AppLink>
                <AppLink to={'#'} className={cls.link}>
                    <EmailIcon />
                    <Text title={user.email} size={TextSize.S} />
                </AppLink>
            </VStack>
        </HStack>
    );
});
