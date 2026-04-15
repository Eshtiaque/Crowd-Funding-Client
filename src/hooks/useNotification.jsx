import { useQuery } from '@tanstack/react-query'

const useNotification = () => {
    const { data: notification = [], refetch } = useQuery({
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/campaignsAdd`)
            return res.json()
        },
    })
    return [notification, refetch]
};

export default useNotification;


