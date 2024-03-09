import { Group } from '@/entities/group/model/types/group.type';

export interface GetGroupsResponse {
  result: 1 | 0;
  data?: Group[];
}
