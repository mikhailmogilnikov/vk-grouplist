import { useQuery } from '@tanstack/react-query';
import { Div, Group, Spinner } from '@vkontakte/vkui';
import { GroupCell } from '@/entities/group';
import { FilterButton } from '@/shared/ui/filter-button';
import { getGroupsQueries } from '../api';

export const GroupList = () => {
  const { data, isLoading } = useQuery(getGroupsQueries);

  if (isLoading) return <Spinner />;

  return (
    <Group>
      <Div>
        <FilterButton activeFiltersCount={0} />
      </Div>
      {data?.map((group) => (
        <GroupCell key={group.id} data={group} />
      ))}
    </Group>
  );
};
