import { VStack } from "@/components/Stack"
import { NavbarTeamMemberPage } from "../NavbarTeamMemberPage/NavbarTeamMemberPage";
import { TeamMemberDescription } from "@/entities/Team/ui/TeamMemberDescription/TeamMemberDescription"
import cls from './TeamMemberPage.module.scss'


const TeamMemberPage = () => {
  return (
    <VStack align="center" max>
      <NavbarTeamMemberPage />
      <TeamMemberDescription className={cls.TeamMemberDescription} />
    </VStack>
  )
}

export default TeamMemberPage
