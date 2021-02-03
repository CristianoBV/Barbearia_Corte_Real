// INSTALAR VIA YARN ADD
import ImagePicker from 'react-native-image-picker';

// CRIAR O HOOK

const handleUpdateAvatar = useCallback(() => {
  ImagePicker.showImagePicker(
    {
      title: 'Selecione um avatar',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Usar câmera',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
    },
    (responseImage) => {
      if (responseImage.didCancel) {
        return;
      }

      if (responseImage.error) {
        Alert.alert('Erro ao atualizar seu avatar.');
        return;
      }

      const data = new FormData();

      data.append('avatar', {
        type: 'image/jpeg',
        name: `${user.id}.jpg`,
        uri: responseImage.uri,
      });

      api.patch('/users/avatar', data).then((response) => {
        updateUser(response.data);
      });
    },
  );
}, [user.id, updateUser]);

// USAR NA APLICACAO
<UserAvatarButton onPress={handleUpdateAvatar}>
  <UserAvatar
    source={{
      uri:
        user.avatar_url ||
        'https://api.adorable.io/avatars/186/abott@adorable.png',
    }}
  />
</UserAvatarButton>;
