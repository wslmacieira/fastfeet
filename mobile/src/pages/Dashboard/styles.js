import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 15%;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileAvatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  margin-right: 12px;
`;

export const ProfileWelcome = styled.View`
  flex-direction: column;
`;

export const TextWelcome = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const TextName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 20 },
})``;

// export const DeliveryList = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding-bottom: 10px;
// `;
export const HeaderList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextOptions = styled.View`
  flex-direction: row;
`;
export const TextLink = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #999;
  /* margin-right: 15px; */
`;

// export const DeliveryItem = styled.View`
//   /* height: 170px; */
//   border: 1px solid #707070;
//   border-radius: 4px;
// `;

// export const DeliveryHeader = styled.View`
//   margin: 14px;
//   flex-direction: row;
//   align-items: center;
// `;
// export const TextHeader = styled.Text`
//   margin-left: 10px;
//   color: #7D40E7;
//   font-size: 14;
//   font-weight: bold;
// `;
// export const DeliveyrStatus = styled.View`
// flex-direction: row;
// justify-content: space-between;
// `;
// export const TexStatus = styled.Text`
//   margin:24px 26px 0 26px;
//   color: #999;
//   font-size: 14;
// `;
// export const Detalhes = styled.View`
// justify-content: space-between;
// flex-direction: row;
// padding: 20px;
// `;
