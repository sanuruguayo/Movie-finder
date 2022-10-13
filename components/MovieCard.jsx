import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "react-router-native";

export default function MovieCard({ cardWidth, gap, item }) {
  return (
    <Link to={"/movies/" + item.imdbID}>
      <View style={{ width: cardWidth, margin: gap }}>
        <Image
          style={{ width: cardWidth, height: 200, borderRadius: 15 }}
          source={{ uri: item.Poster }}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: "white" }}>
          {item.Title}
        </Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({});
