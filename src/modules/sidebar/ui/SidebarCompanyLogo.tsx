import { COLORS } from '@/shared/lib/constants';
import { Avatar } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

const AvatarStyle = styled(Avatar)`
  background: ${COLORS.SECONDARY[8]};
`

interface CompanyLogoInterface {
  imageSrc: string
}

const SidebarCompanyLogo: FC<CompanyLogoInterface> = ({ imageSrc }) => {
  return (
    <AvatarStyle size={42} gap={2} src={imageSrc}>Logo</AvatarStyle>
  )
}

export default SidebarCompanyLogo
