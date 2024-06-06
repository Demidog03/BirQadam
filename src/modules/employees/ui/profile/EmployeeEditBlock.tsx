import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Card as AntCard, Button as AntButton } from 'antd';
import styled from 'styled-components';
import { COLORS, FONTS } from '@/shared/lib/constants.ts';
import { useDispatch } from 'react-redux';
import { profileSelector, updateProfileAction } from '@/modules/profile/model/profile.slice.ts';
import { useSelector } from '@/store';

interface EditedProfileValues {
  firstName: string
  lastName: string
  jobTitle: string
  email: string
}

const Container = styled.div`
    width: 100%;
`;

const Card = styled(AntCard)`
    &.ant-card {
        border: none;
        box-shadow: none;
        background: none;
    }
    .ant-card-body {
        display: flex;
        align-items: center;
        padding: 16px 0;
    }
`;

const Image = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 70px;
    object-fit: cover;
    margin-right: 16px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FullName = styled.input`
    font-family: ${FONTS.MAINFONTFAMILY};
    font-weight: bold;
    font-size: 22px;
    margin: 2px;
    color: ${COLORS.SECONDARY[9]};
    border: ${props => props.disabled ? 'none' : '1px solid #e0e0e0;'};
    border-radius: 10px;
    padding: 2px;
    background: transparent;
    outline: none;
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const AdditionalInfo = styled.input`
    font-family: ${FONTS.MAINFONTFAMILY};
    font-weight: normal;
    font-size: 16px;
    margin: 2px;
    color: ${COLORS.PRIMARY[4]};
    border: ${props => props.disabled ? 'none' : '1px solid #e0e0e0;'};
    border-radius: 10px;
    padding: 2px;
    background: transparent;
    outline: none;
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const ButtonContainer = styled.div`
    margin-left: auto;
    display: flex;
    gap: 8px;
`;

const Button = styled(AntButton)`
    background-color: #E8EDF2;
    border: none;
    border-radius: 12px;
    width: 110px;
    height: 40px;
    padding: 0 16px;
    > span {
        font-family: ${FONTS.MAINFONTFAMILY};
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.21px;
        color: ${COLORS.SECONDARY[9]};
    }
`;

const EmployeeEditBlock: FC = () => {
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState<EditedProfileValues>({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    jobTitle: profile?.jobTitle || '',
    email: profile?.email || '',
  });


  const handleEditProfileClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSaveClick = () => {
    dispatch(updateProfileAction(editedProfile));
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedProfile({
      firstName: profile?.firstName || '',
      lastName: profile?.lastName || '',
      jobTitle: profile?.jobTitle || '',
      email: profile?.email || '',
    });
    setIsEditMode(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (profile) {
      setEditedProfile({
        firstName: profile.firstName,
        lastName: profile.lastName,
        jobTitle: profile.jobTitle,
        email: profile.email,
      });
    }
  }, [profile]);

  return (
    <Container>
      <Card>
        <Image src={'https://s3-alpha-sig.figma.com/img/d5b7/782f/099a5512f6738ed39688ce19e7b62431?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZUfSvahYFOivc6yi~MyW8bpT~xETD03ZVShp7wZaWJ8cBf-QEZUryY2XAtkyoec3nEBkqtLAutbszIMYNu0VAWX9UCBadcMAThbFOuYGjIsBC18F7vMG~bkYQ2Fbi4dUftvnIwOCh-TysSkbcjmt8QNBK~4VMa~EsOOZw~AAvCrjGt2gvR~hl6VGxhrsDkdTcrLnv5uBqS8fBSAI8petHRI2X1uzRRhJ-DqAwbKx-LsspJA3e6ECrOX7JsvOGMb6PwvVUejhfKqt2EhsRRmyfSXgapKY0HYoHvdU~TKbLR6OXUL6c7gduBomUPSclOPbcL2-xUE0HP2E4fPeMN-1yQ__'} alt={'imageSrc'}/>
        <TextContainer>
          <FullName
            type="text"
            name="firstName"
            value={editedProfile.firstName}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <FullName
            type="text"
            name="lastName"
            value={editedProfile.lastName}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <AdditionalInfo
            type="text"
            name="jobTitle"
            value={editedProfile.jobTitle}
            disabled={!isEditMode}
            onChange={handleChange}
          />
          <AdditionalInfo
            type="text"
            name="email"
            value={editedProfile.email}
            disabled={!isEditMode}
            onChange={handleChange}
          />
        </TextContainer>
        <ButtonContainer>
          {isEditMode ? (
            <>
              <Button onClick={handleSaveClick}>
                Save
              </Button>
              <Button onClick={handleCancelClick}>
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={handleEditProfileClick}>Edit Profile</Button>
          )}
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default EmployeeEditBlock;
