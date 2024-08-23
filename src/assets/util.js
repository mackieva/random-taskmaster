import { list } from './data';

export function getEpisode() {
	const count = list.length;
	const bingo = Math.floor(Math.random() * count);

	return list[bingo];
}
