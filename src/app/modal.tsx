import { ModalPage, ModalRoot } from '@vkontakte/vkui';
import { GroupFiltersModal } from '@/features/groups/filters-modal';
import { GroupFriendsModal } from '@/features/groups/friends-modal';
import { useModal } from '@/shared/lib/hooks/useModal';
import { EModalRoutes } from '@/shared/model/types/routes.enum';

export const Modal = () => {
  const { modal, setModal } = useModal();

  const handleCloseModal = () => {
    setModal(null);
  };

  return (
    <ModalRoot onClose={handleCloseModal} activeModal={modal}>
      <ModalPage id={EModalRoutes.GROUP_FILTERS}>
        <GroupFiltersModal />
      </ModalPage>
      <ModalPage id={EModalRoutes.GROUP_FRIENDS}>
        <GroupFriendsModal />
      </ModalPage>
    </ModalRoot>
  );
};
