import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useParams } from "react-router-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();


  const API = "https://private.omdbapi.com/?apikey=bef9c583&i=";
  useEffect(() => {
    axios.get(API + movieId).then((res) => {
      setMovie(res.data);
    });
  }, [movieId]);

  return (
    <View>
      {!movie && <Text>Loading ...</Text>}
      {movie && (
        <View>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>
                {movie.Title} ({movie.Year})
              </Text>
            </View>
            <View style={styles.info}>
              <Image style={styles.img} source={{ uri: movie.Poster }} />
              <View style={styles.description}>
                <Text style={styles.genre}>
                  {movie.Genre} | {movie.Ratings[0].Value}
                </Text>
                {/* <FlatList
                  data={movie.Genre.split(",")}
                  renderItem={({ item }) => <Text>{item}</Text>}
                  
                /> */}
                <Text style={{ fontWeight: "200" }}>{movie.Plot}</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "500" }}>
                Director:{" "}
                <Text style={{ fontWeight: "200" }}>{movie.Director}</Text>
              </Text>

              <Text style={{ fontWeight: "500" }}>
                Actors:{" "}
                <Text style={{ fontWeight: "200" }}>{movie.Actors}</Text>
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  img: {
    width: 150,
    height: 200,
    borderRadius: 15,
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: "800",
  },
  info: {
    flexDirection: "row",
    // justifyContent: "center"
  },
  description: {
    flex: 2,
    padding: 5,
    alignItems: "center",
  },
  genre: {
    fontWeight: "500",
    paddingBottom: 10,
  },
});
