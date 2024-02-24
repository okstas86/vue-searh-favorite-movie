<template>
	<header class="header">
		<img src="/logo.svg" alt="logo" class="header-logo" />
		<h2>My Favorite Movies</h2>
	</header>
	<div class="tabs">
		<button
			@click="setTab(1)"
			:class="['btn', { btn_green: movieStore.activeTab === 1 }]"
		>
			Favorite
		</button>
		<button
			@click="setTab(2)"
			:class="['btn', { btn_green: movieStore.activeTab === 2 }]"
		>
			Search
		</button>
	</div>
	<div class="movies" v-if="movieStore.activeTab === 1">
		<div>
			<h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
			<Movie
				v-for="movie in movieStore.watchedMovies"
				:key="movie.id"
				:movie="movie"
			/>
		</div>
		<h3>All Movies (count: {{ movieStore.totalCountMovies }})</h3>
		<Movie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
	</div>
	<div v-else class="search">
		<Search />
	</div>
</template>

<script setup>
import Movie from "./components/Movie.vue"
import Search from "./components/Search.vue"
import { useMovieStore } from "./stores/movieStore"

const movieStore = useMovieStore()

function setTab(id) {
	movieStore.setActiveTab(id)
}
</script>

<style lang="css">
.header {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
}
.header-logo {
	max-width: 50px;
	margin-right: 10px;
}
.movies h3 {
	text-align: center;
	margin-bottom: 1rem;
}
.btn {
	border: none;
	width: 100px;
	height: 40px;
	font-size: 14px;
	margin: 0 10px;
	border-radius: 10px;
	cursor: pointer;
	background: #efefef;
}
.btn:hover {
	opacity: 0.7;
}
.btn_green {
	background: #37df5c;
}

.tabs {
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
}
.search {
	width: 30rem;
	margin: 0 auto;
}
</style>
