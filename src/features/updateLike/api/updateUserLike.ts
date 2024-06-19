import { rtkApi } from '@/shared/api/rtkApi';

interface LikeUserArg {
    userId: string;
    like: boolean;
}

const userLikeApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateUserLike: build.mutation<void, LikeUserArg>({
            query: ({ userId, ...like }) => ({
                url: `/profiles/${userId}`,
                method: 'PATCH',
                body: like,
            }),
        }),
    }),
});


export const useLikeUser = userLikeApi.useUpdateUserLikeMutation;
