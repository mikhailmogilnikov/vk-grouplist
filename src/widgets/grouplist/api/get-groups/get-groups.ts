import { apiClient } from '@/shared/api/base';
import { GetGroupsResponse } from '../../model/types/get-groups.type';

export const getGroups = async () => {
  try {
    const response = await apiClient.get<GetGroupsResponse>('/groups');
    if (response.result === 1 && 'data' in response) {
      return response.data;
    } else {
      return [];
    }
  } catch {
    return [];
  }
};
