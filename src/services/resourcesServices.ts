import api from './api';
import { Resource } from '@/models/resourceModel';

export const GetFavoriteResources = async (): Promise<Resource[]> => {
    const response = await api.get('Resource/favorites');
    return response.data
};