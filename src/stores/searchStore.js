import { defineStore } from "pinia"
import { useMovieStore } from "./movieStore"

const url =
	"https://api.themoviedb.org/3/search/movie?api_key=d10fd3fa809e74df94bffde5c02f05a1&query="

export const useSearchStore = defineStore("searchStore", {
	state: () => ({
		movies: [],
		loader: false,
	}),
	actions: {
		async getMovies(search) {
			this.loader = true
			const res = await fetch(`${url}${search}`)
			const data = await res.json()
			this.movies = data.results
			this.loader = false
		},
		addToUserMovies(object) {
			const movieStore = useMovieStore()
			movieStore.movies.push({ ...object, isWathed: false })
			movieStore.activeTab = 1
		},
	},
})
