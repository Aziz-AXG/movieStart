import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { typeSelectedMovie } from '~/interfaces/types';

interface MovieStore {
  selectedIDS: typeSelectedMovie[];
  toggleMovie: (movied: typeSelectedMovie) => void;
  addFrMovie: (movied: typeSelectedMovie) => void;
  dleatFrMovie: (movied: typeSelectedMovie) => void;
  setMovie: (ids: typeSelectedMovie[]) => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      selectedIDS: [],
      toggleMovie: (movied) =>
        set((state) => ({
          selectedIDS: state.selectedIDS.some((movie) => movie.imdbID === movied.imdbID)
            ? state.selectedIDS.filter((movie) => movie.imdbID !== movied.imdbID)
            : [...state.selectedIDS, movied],
        })),
      addFrMovie: (movied) =>
        set((state) => ({
          selectedIDS: state.selectedIDS.some((movie) => movie.imdbID === movied.imdbID)
            ? state.selectedIDS
            : [...state.selectedIDS, movied],
        })),
      dleatFrMovie: (movied) =>
        set((state) => ({
          selectedIDS: state.selectedIDS.some((movie) => movie.imdbID === movied.imdbID)
            ? state.selectedIDS.filter((movie) => movie.imdbID !== movied.imdbID)
            : state.selectedIDS,
        })),
      setMovie: (ids) => set({ selectedIDS: ids }),
    }),
    {
      name: 'movie-storage', // name of the item in the storage (must be unique)
    }
  )
);
