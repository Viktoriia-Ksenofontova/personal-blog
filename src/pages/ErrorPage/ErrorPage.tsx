import React from 'react';
import { Text, View } from '../../components';

type ErrorProps = { error: string | null };

const ErrorPage: React.FC<ErrorProps> = ({ error }) => {
  return (
    <View variant="container" padding="20px">
      <Text as="p" styles={{ color: 'red', textAlign: 'center' }}>
        Something went wrong
      </Text>

      <Text as="p" styles={{ textAlign: 'center' }}>
        {error}
      </Text>
    </View>
  );
};

export default ErrorPage;
