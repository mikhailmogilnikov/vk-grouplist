import { useQuery } from '@tanstack/react-query';
import { Group, Spinner } from '@vkontakte/vkui';
import { GroupCell } from '@/entities/group';
import { getGroupsQueries } from '../api';

export const GroupList = () => {
  const { data, isLoading } = useQuery(getGroupsQueries);

  if (isLoading) return <Spinner />;

  return (
    <Group>
      {data?.map((group) => (
        <GroupCell key={group.id} data={group} />
      ))}
    </Group>
  );
};
