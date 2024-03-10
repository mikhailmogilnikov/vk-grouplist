import { Icon20SlidersOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';

type Props = {
  onClick?: () => void;
  activeFiltersCount?: number;
};

export const FilterButton = ({ onClick, activeFiltersCount = 0 }: Props) => {
  const [t] = useTranslation();

  const isActive = activeFiltersCount > 0;

  const currentMode = isActive ? 'primary' : 'secondary';

  return (
    <Button
      before={<Icon20SlidersOutline />}
      size='l'
      align='center'
      stretched
      mode={currentMode}
      onClick={onClick}
    >
      {t('groups.filters.title')}
      {isActive && ` (${activeFiltersCount})`}
    </Button>
  );
};
