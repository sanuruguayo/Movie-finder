import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes } from "react-router-native";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";
import MovieSearch from "./views/MovieSearch";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<MovieSearch />} />
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
          </Routes>
        </SafeAreaView>
      </NativeRouter>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
