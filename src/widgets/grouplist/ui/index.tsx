import { useQuery } from '@tanstack/react-query';
import { Div, Group, Spinner } from '@vkontakte/vkui';
import { GroupCell } from '@/entities/group';
import { useModal } from '@/shared/lib/hooks/useModal';
import { EModalRoutes } from '@/shared/model/types/routes.enum';
import { FilterButton } from '@/shared/ui/filter-button';
import { getGroupsQueries } from '../api';

export const GroupList = () => {
  const { data, isLoading } = useQuery(getGroupsQueries);
  const { setModal } = useModal();

  if (isLoading)
    return (
      <Div>
        <Spinner />
      </Div>
    );

  const handleClickFilterButton = () => {
    setModal(EModalRoutes.GROUP_FILTERS);
  };

  return (
    <Group>
      <Div>
        <FilterButton
          onClick={handleClickFilterButton}
          activeFiltersCount={0}
        />
      </Div>
      {data?.map((group) => (
        <GroupCell key={group.id} data={group} />
      ))}
    </Group>
  );
};
