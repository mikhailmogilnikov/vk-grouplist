import { useTranslation } from 'react-i18next';
import { useModal } from '@/shared/lib/hooks/useModal';
import { ModalHeaderWithAction } from '@/shared/ui/modal-header-with-action';

export const GroupFiltersModal = () => {
  const [t] = useTranslation();
  const { setModal } = useModal();

  const handleCloseModalWithSave = () => {
    setModal(null);
  };

  return (
    <>
      <ModalHeaderWithAction onClick={handleCloseModalWithSave}>
        {t('groups.filters.title')}
      </ModalHeaderWithAction>
    </>
  );
};
