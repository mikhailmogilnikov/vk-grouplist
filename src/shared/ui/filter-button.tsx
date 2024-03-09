import { Button } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';

type Props = {
  activeFiltersCount?: number;
};

export const FilterButton = ({ activeFiltersCount = 0 }: Props) => {
  const [t] = useTranslation();
  console.log(activeFiltersCount);

  const isActive = activeFiltersCount > 0;

  const currentMode = isActive ? 'primary' : 'secondary';

  return (
    <Button size='l' align='center' stretched mode={currentMode}>
      {t('filters.button_name')}
      {isActive && ` (${activeFiltersCount})`}
    </Button>
  );
};
