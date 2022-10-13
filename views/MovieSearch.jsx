import axios from "axios";
import { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import MovieCard from "../components/MovieCard";

const API = "https://private.omdbapi.com/?apikey=bef9c583&s=";

export default function MovieSearch() {
  const [movies, setMovies] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  const cardWidth = 150;
  const gap = 15;
  const numColumns = Math.floor(width / (cardWidth + gap * 2));

  const handlePress = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await axios.get(API + movieTitle);

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(res.data.Error);
      }
    } catch (error) {
      setMovies(null);
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          value={movieTitle}
          onChangeText={setMovieTitle}
          style={styles.inputSearch}
          onSubmitEditing={handlePress}
        />
        <Button title="Search" onPress={handlePress} />
      </View>

      {isLoading && (
        <Text style={{ color: "white", textAlign: "center" }}>Loading...</Text>
      )}
      {!isLoading && (
        <FlatList
          data={movies}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <MovieCard item={item} gap={gap} cardWidth={cardWidth} />
          )}
          keyExtractor={(item) => item.imdbID}
          numColumns={numColumns}
          key={numColumns}
          ListEmptyComponent={
            <View>
              <Text style={{ color: "white" }}>
                No se encontraron resultados
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  inputSearch: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    borderColor: "white",
    color: "white",
  },
});
