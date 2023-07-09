import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import axios from 'axios';
import Card from './Card';

const GenreTabs = () => {
  const [genres, setGenres] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [genreMusic, setGenreMusic] = useState([]);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/browse/categories',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setGenres(response.data.categories.items.slice(0, 10));
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, [accessToken]);

  useEffect(() => {
    const fetchGenreMusic = async () => {
      try {
        const genreId = genres[activeTab]?.id;
        if (genreId) {
          const response = await axios.get(
            `https://api.spotify.com/v1/browse/categories/${genreId}/playlists`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setGenreMusic(response.data.playlists.items);
        }
      } catch (error) {
        console.error('Error fetching genre music:', error);
      }
    };

    fetchGenreMusic();
  }, [accessToken, activeTab, genres]);

  const fetchSongAudio = async (songId) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/tracks/${songId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // Access the audio preview URL from the response
      const audioUrl = response.data.preview_url;
      // Do something with the audio URL (e.g., play the audio)
      console.log(audioUrl);
    } catch (error) {
      console.error('Error fetching song audio:', error);
    }
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group
        as='div'
        activeindex={activeTab}
        onSelect={handleTabChange}
      >
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {genres.map((genre) => (
            <Tab
              key={genre.id}
              className={({ selected }) =>
                `w-full rounded-lg py-4 px-8 text-sm font-medium text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              {genre.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-6">
          {genres.map((_, index) => (
            <Tab.Panel key={index}>
              {index === activeTab && (
                <div className="grid sm:grid-cols-4 grids-col-1 gap-4">
                  {genreMusic.map((music) => {
                      console.log(genreMusic)
                    return (
                      <Card
                        key={music.id}
                        title={music.name}
                        image={music.images[0].url}
                        onClick={() => fetchSongAudio(music.track.id)}
                      />
                    )
                  })}
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default GenreTabs;
