import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: left;
  gap: 4px;
  background-color: #fff;
  border: 1px solid #C0C0C0;
  width: 100%;
  height: 100px;
  border-radius: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const Content = styled.View`
  gap: 8px;
  padding: 16px;
  justify-content: space-between;
  flex-direction: column;
  max-width: 80%;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #3D6CB9;
`;

export const Date = styled.Text`
    font-size: 14px;
    color: #666;
`;

export const Company = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  
`;

export const OpenButton = styled.View`
    border-radius: 0 16px 16px 0;
    padding: 0 16px;
    background-color: #f5f6f7;
    justify-content: center;
    height: 100%;
`;
