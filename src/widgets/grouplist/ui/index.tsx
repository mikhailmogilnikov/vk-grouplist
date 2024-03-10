import { useQuery } from '@tanstack/react-query';
import { Icon56SearchOutline } from '@vkontakte/icons';
import { Div, Group, Placeholder, Spinner } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupCell } from '@/entities/group';
import { useModal } from '@/shared/lib/hooks/use-modal';
import { EModalRoutes } from '@/shared/model/types/routes.enum';
import { FilterButton } from '@/shared/ui/filter-button';
import { getGroupsQueries } from '../api';
import { useFilterForGroups } from '../lib/use-groups-filter';

export const GroupList = () => {
  const { data, isLoading } = useQuery(getGroupsQueries);
  const { filteredData, activeFiltersCount } = useFilterForGroups(data);
  const { setModal } = useModal();
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [t] = useTranslation();

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => setShowPlaceholder(true), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  const handleClickFilterButton = () => {
    setModal(EModalRoutes.GROUP_FILTERS);
  };

  const renderFilteredData = () => {
    if (filteredData.length > 0) {
      return filteredData.map((group) => (
        <GroupCell key={group.id} data={group} />
      ));
    } else {
      return showPlaceholder ? (
        <Placeholder icon={<Icon56SearchOutline />}>
          {t('groups.placeholder')}
        </Placeholder>
      ) : null;
    }
  };

  return (
    <Group>
      <Div>
        <FilterButton
          isDisabled={isLoading}
          onClick={handleClickFilterButton}
          activeFiltersCount={activeFiltersCount}
        />
      </Div>
      {isLoading ? (
        <Div>
          <Spinner />
        </Div>
      ) : (
        renderFilteredData()
      )}
    </Group>
  );
};
