import { HStack, VStack } from '@/components/Stack';
import { Text, TextSize } from '@/components/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamMemberDescription.module.scss';
import { AppLink } from '@/components/AppLink';
import PhoneIcon from '@assets/icons/phone.svg';
import EmailIcon from '@assets/icons/email.svg';
import { memo } from 'react';

interface TeamMemberDescriptionProps {
    className?: string;
}

export const TeamMemberDescription = memo(
    (props: TeamMemberDescriptionProps) => {
        const { className } = props;
        return (
            <HStack
                align="start"
                wrap
                className={classNames(cls.TeamMemberDescription, {}, [
                    className,
                ])}
            >
                <Text
                    className={cls.descriptionText}
                    title='Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.

                В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".

                Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.'
                    size={TextSize.S}
                />
                <VStack gap="25">
                    <AppLink to={'#'} className={cls.link}>
                        <PhoneIcon />
                        <Text title="+7 (954) 333-44-55" size={TextSize.S} />
                    </AppLink>
                    <AppLink to={'#'} className={cls.link}>
                        <EmailIcon />
                        <Text title="sykfafkar@gmail.com" size={TextSize.S} />
                    </AppLink>
                </VStack>
            </HStack>
        );
    },
);
