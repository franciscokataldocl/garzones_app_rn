
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from "react-native-modal";
import { Button, Icon } from 'react-native-paper';
import { Colors } from '../../constants/Colors';

interface Props {
  isOpen: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode;
}
const CustomModal = ({ isOpen, setOpenModal, children }: Props) => {



  return (

    <>


      <Modal isVisible={isOpen} style={styles.modalContainer}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        useNativeDriver>
        <View style={[styles.modal]}>

          <View style={styles.closeButtonContainer}>
            <Button onPress={() => setOpenModal(false)}>
              <Icon source={'close'} size={40} color={Colors.primary} />
            </Button>
          </View>
        </View>
      </Modal>


    </>

  )
}

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.white,
    padding: '10%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '90%'
  },
  modalContainer: {
    margin: 0
  },
  closeButtonContainer: {
    position: 'absolute',
    right: '5%',
    top: '5%'

  }
})



