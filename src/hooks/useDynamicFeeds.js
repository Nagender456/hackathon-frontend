import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFeeds, renewFeeds } from '../features/feeds/feedsSlice';
import useAxiosPrivate from './useAxiosPrivate';

const useDynamicFeeds = (pageNum, creator, query) => {
	const [isLoading, setIsloading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState({});
	const [hasNextPage, setHasNextPage] = useState(true);
	const [zeroFeeds, setZeroFeeds] = useState(false);
	
	const axios = useAxiosPrivate();
	const dispatch = useDispatch();
	
	useEffect(() => {
		const controller = new AbortController();
		const fetchFeeds = async (pageNum, creator, query) => {
			console.log('pageNum', pageNum);
			console.log('creator', creator);
			console.log('query', query);
			setIsloading(true);
			setZeroFeeds(false);
			dispatch(renewFeeds(query))
			try {
				const response = await axios.get(`/feeds`, {
					signal: controller.signal,
					params: {pageNum, creator, query}
				});
				const newFeeds = response?.data || []
				if (newFeeds.length) {
					dispatch(addFeeds(newFeeds))
					setHasNextPage(true);
				}
				else {
					if (pageNum === 1) setZeroFeeds(true);
					setHasNextPage(false);
				}
			} catch (err) {
				if (err.name === 'CanceledError') {
					return;
				}
				setIsError(true);
				setError(err?.response?.data?.message);
				console.log(err);
			} finally {
				setIsloading(false);
			}
		}
		fetchFeeds(pageNum, creator, query);
		return () => controller.abort();
	}, [pageNum, creator, query])

	return [isLoading, isError, error, hasNextPage, zeroFeeds];
}

export default useDynamicFeeds;