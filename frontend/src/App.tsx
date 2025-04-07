import { useState } from 'react';
import {
  TextField,
  Button,
  View,
  Heading,
  Text,
  Provider,
  defaultTheme,
  darkTheme,
  Switch,
  Flex
} from '@adobe/react-spectrum';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const handleConvert = async () => {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 1 || num > 3999) {
      setError("Please enter a valid number between 1 and 3999");
      setResult("");
      return;
    }

    try {
      setError('');
      const apiBaseUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
      const response = await axios.get(`${apiBaseUrl}/romannumeral?query=${num}`);
      setResult(response.data.output);
    } catch (err: any) {
      setResult('');
      setError(err.response?.data || 'Something went wrong');
    }
  };

  return (
    <Provider theme={isDarkMode ? darkTheme : defaultTheme} colorScheme={isDarkMode ? 'dark' : 'light'}>
      <Flex height="100vh" alignItems="center" justifyContent="center" position="relative">
        <View
          backgroundColor="gray-50"
          borderRadius="medium"
          padding="size-400"
          width="size-4600"
        >
          <Heading level={1}>Roman numeral converter</Heading>

          <TextField
            label="Enter a number"
            type="text"
            inputMode="numeric"
            value={number}
            onChange={setNumber}
            marginTop="size-200"
          />

          <Button variant="cta" onPress={handleConvert} marginTop="size-200">
            Convert to roman numeral
          </Button>

          <View marginTop="size-200">
            {result && (
              <Text>
              <strong>Roman numeral:</strong> {result}
              </Text>
            )}
            {error && (
              <Text marginTop="size-100" UNSAFE_className="error-text">
                Error: {error}
              </Text>
            )}
          </View>
        </View>

        {/* Dark Mode Toggle - bottom right */}
        <View position="absolute" bottom="size-200" right="size-200">
          <Switch isSelected={isDarkMode} onChange={setIsDarkMode}>
            {isDarkMode ? 'Dark' : 'Light'} Mode
          </Switch>
        </View>
      </Flex>
    </Provider>
  );
}

export default App;