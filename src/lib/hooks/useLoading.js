import {useSelector} from "react-redux";

const useLoading = () => {
    const isLoading = useSelector(state => state.isLoading);

    return {
        isLoading,
    }
};

export default useLoading;
