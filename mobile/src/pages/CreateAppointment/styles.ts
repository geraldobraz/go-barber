import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}
interface ProviderNameProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f5ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  border-radius: 28px;
  height: 56px;
  margin-left: auto;
  width: 56px;
`;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  align-items: center;
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  flex-direction: row;
  margin-right: 16px;
  padding: 8px 12px;
`;

export const ProviderAvatar = styled.Image`
  border-radius: 16px;
  height: 32px;
  width: 32px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  color: ${props => (props.selected ? '#232129' : '#f5ede8')};
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  margin-left: 8px;
`;
