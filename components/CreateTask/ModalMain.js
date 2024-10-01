import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Modal1 from '../CreateTask/Modal1';
import ModalCalender from '../CreateTask/ModalCalender';
import { useContext } from 'react';
import { TasksContext } from '@/Context/TasksContext';
import ModalPriority from '../CreateTask/ModalPriority'
import ModalCategory from '../CreateTask/ModalCategory'
import ModalCreateCat from '../CreateTask/ModalCreateCat'
import { Modal1Context } from '@/Context/Modal1Context';
import { TouchableWithoutFeedback } from 'react-native';
const ModalMain = ({modalVisible, setModalVisible, type, settype}) => {
    const [pri_vis, setpri_vis] = useState(false);
    const [modalVisible2,setModalVisible2]=useState(false)
    const { userTasks, setuserTasks } = useContext(TasksContext);
    const [modalVisible3,setModalVisible3]=useState(false)
    const [modalVisible4,setModalVisible4]=useState(false)
    // const {modalVisible, setModalVisible} =useContext(Modal1Context)
    // useEffect(()=>{
    //     console.log(modalVisible)
    // },[modalVisible])
    const obj = {
        "default": (<Modal1 settype={settype} type={type} modalVisible2={modalVisible2} setModalVisible2={setModalVisible2} modalVisible3={modalVisible3} setModalVisible3={setModalVisible3} modalVisible={modalVisible} setModalVisible={setModalVisible}/>),
        "priority": (<ModalPriority  modalVisible2={modalVisible2} setModalVisible2={setModalVisible2} flag={false}/>),
        "category":(<ModalCategory modalVisible3={modalVisible3} setModalVisible3={setModalVisible3} modalVisible4={modalVisible4} setModalVisible4={setModalVisible4} flag={false}></ModalCategory>),
        "Add_category":(<ModalCreateCat setModalVisible4={setModalVisible4}></ModalCreateCat>)
    };

    useEffect(() => {
        if (type === 'vis') {
            setpri_vis(true);
        } else {
            setpri_vis(false); 
        }
    }, [type]);

    return (
        <View style={styles.centeredView}>
         
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                presentationStyle="overFullScreen"
                onRequestClose={() => setModalVisible(!modalVisible)}>
                      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Modal1 settype={settype} type={type} modalVisible2={modalVisible2} setModalVisible2={setModalVisible2} modalVisible3={modalVisible3} setModalVisible3={setModalVisible3} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

           
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                presentationStyle="overFullScreen"
                onRequestClose={() => setModalVisible2(false)}> 
                   <TouchableWithoutFeedback onPress={() => setModalVisible2(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {obj["priority"]}
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                presentationStyle="overFullScreen"
                onRequestClose={() => setModalVisible3(false)}> 
                  <TouchableWithoutFeedback onPress={() => setModalVisible3(false)}>
                <View style={styles.topView}>
                    <View style={styles.modalView}>
                        {obj["category"]}
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal
                animationType="slide"
                // transparent={true}
                statusBarTranslucent={true}
                visible={modalVisible4}
                presentationStyle="fullScreen"
                onRequestClose={() => setModalVisible4(false)}> 
                  <TouchableWithoutFeedback onPress={() => setModalVisible4(false)}>
                <View style={styles.topView}>
                    <View style={styles.modalView}>
                        {obj["Add_category"]}
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            {/* </TouchableWithoutFeedback> */}
        </View>
    );
};

const styles = StyleSheet.create({
    topView:{
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 22,
        height: "100%",
    },
    centeredView: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        height: "85%",
        // opacity:0.7

    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#121212',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%"
    }
});

export default ModalMain;
