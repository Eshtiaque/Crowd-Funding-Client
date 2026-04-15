import { useQuery } from '@tanstack/react-query'

const useNotification = () => {
    const { data: notification = [], refetch } = useQuery({
        queryFn: async () => {
            const res = await fetch(`https://crowdfunding-gamma.vercel.app/campaignsAdd`)
            return res.json()
        },
    })
    return [notification, refetch]
};

export default useNotification;


