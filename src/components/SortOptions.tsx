import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const SortOptions = ({ options, initial, onChange } : { options: { label: string; value: string }[], initial?: number | null, onChange: (value: any) => void }) => {
  let initialOption = null;

  if (initial !== undefined  && initial !== null) {
    initialOption = (initial >= 0 && initial < options.length) ? options[initial] : null;
  }

  const [userOption, setUserOption] = useState<{ label: string, value: string } | null>(initialOption);

  const updateOptionChoice = (option: React.SetStateAction<{ label: string, value: string } | null>) => {
    onChange(option);
    setUserOption(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => {
        return (
          <Pressable
            key={option.value}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#ededed" : "#ffffff",
                opacity: pressed ? 0.5 : 1
              },
              styles.option,
              option === userOption ? styles.selected_option : styles.unselected_option
            ]}
            onPress={ () => updateOptionChoice(option) }
          >
            <Text
              style={[
                styles.text,
                option === userOption ? styles.selected_text : styles.unselected_text
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    marginTop: 10,
    marginBottom: 15,
    justifyContent: "space-evenly"
  },
  option: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5
  },
  selected_option: {
    backgroundColor: '#1ea853',
    borderColor: "#1ea853"
  },
  selected_text: {
    color: "#ffffff",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    padding: 5
  },
  unselected_option: {
    borderColor: "#ededed"
  },
  unselected_text: {
    color: "#000000"
  }
});

export default SortOptions