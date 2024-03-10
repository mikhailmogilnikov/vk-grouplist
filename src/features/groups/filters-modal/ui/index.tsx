import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/shared/lib/hooks/use-modal';
import { ModalHeaderWithAction } from '@/shared/ui/modal-header-with-action';
import { useGroupFilters } from '../lib/use-group-filters';
import { FiltersModalForm } from './form';

export const GroupFiltersModal = () => {
  const [t] = useTranslation();
  const { setModal } = useModal();
  const {
    privateType,
    avatarColor,
    friendsInGroup,
    setPrivateType,
    setAvatarColor,
    setFriendsInGroup,
  } = useGroupFilters();

  const [privateTypeValue, setPrivateTypeValue] = useState(privateType);
  const [avatarColorValue, setAvatarColorValue] = useState(avatarColor);
  const [friendsInGroupValue, setFriendsInGroupValue] =
    useState(friendsInGroup);

  const handleCloseModalWithSave = () => {
    setPrivateType(privateTypeValue);
    setAvatarColor(avatarColorValue);
    setFriendsInGroup(friendsInGroupValue);
    setModal(null);
  };

  const filtersController = {
    privateTypeValue,
    setPrivateTypeValue,
    avatarColorValue,
    setAvatarColorValue,
    friendsInGroupValue,
    setFriendsInGroupValue,
  };

  return (
    <>
      <ModalHeaderWithAction onClick={handleCloseModalWithSave}>
        {t('groups.filters.title')}
      </ModalHeaderWithAction>
      <FiltersModalForm
        onSubmit={handleCloseModalWithSave}
        filtersController={filtersController}
      />
    </>
  );
};
