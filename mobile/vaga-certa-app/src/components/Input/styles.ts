import { styled } from 'styled-components/native';

export const Container = styled.View`
  align-items: left;
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: #007bff;
`;

export const Field = styled.TextInput`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background-color: #f5f5f5;
    width: 100%;
`;