import { useState, useEffect } from 'react';
import { useGroupFilters } from '@/features/groups/filters-modal/lib/use-group-filters';
import {
  EGroupFilterFriendsInGroup,
  EGroupFilterPrivateType,
} from '@/features/groups/filters-modal/model/filters.enum';
import { EAvatarColor, Group } from '@/entities/group/model/types/group.type';

export const useFilterForGroups = (groups: Group[] | undefined) => {
  const { privateType, avatarColor, friendsInGroup } = useGroupFilters();

  const [filteredData, setFilteredData] = useState<Group[]>([]);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  useEffect(() => {
    if (!groups) return;

    const filteredData = groups.filter((group) => {
      const isPrivateFilterActive = privateType !== EGroupFilterPrivateType.ANY;
      const isPrivate = group.closed;

      const hasAvatarColorFilter = avatarColor.length > 0;
      const hasAvatarColor = group.avatar_color || EAvatarColor.UNDEFINED;

      const isFriendsInGroupFilterActive =
        friendsInGroup !== EGroupFilterFriendsInGroup.ANY;
      const hasFriends = group.friends?.length > 0;

      return (
        (!isPrivateFilterActive ||
          isPrivate === (privateType === EGroupFilterPrivateType.PRIVATE)) &&
        (!hasAvatarColorFilter || avatarColor.includes(hasAvatarColor)) &&
        (!isFriendsInGroupFilterActive ||
          hasFriends ===
            (friendsInGroup === EGroupFilterFriendsInGroup.WITH_FRIENDS))
      );
    });

    const activeFiltersCount = Object.values({
      privateType: privateType !== EGroupFilterPrivateType.ANY,
      avatarColor: avatarColor.length > 0,
      friendsInGroup: friendsInGroup !== EGroupFilterFriendsInGroup.ANY,
    }).filter(Boolean).length;

    setActiveFiltersCount(activeFiltersCount);
    setFilteredData(filteredData);
  }, [avatarColor, friendsInGroup, groups, privateType]);

  return { filteredData, activeFiltersCount };
};
