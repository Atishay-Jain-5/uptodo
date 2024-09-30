import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Modal1 from '../CreateTask/Modal1';
import ModalCalender from '../CreateTask/ModalCalender';
import { useContext } from 'react';
import { TasksContext } from '@/Context/TasksContext';
import ModalPriority from '../CreateTask/ModalPriority'
import ModalCategory from '../CreateTask/ModalCategory'
import ModalCreateCat from '../CreateTask/ModalCreateCat'
const ModalMain = ({modalVisible, setModalVisible, type, settype}) => {
    const [pri_vis, setpri_vis] = useState(false);
    const [modalVisible2,setModalVisible2]=useState(false)
    const { userTasks, setuserTasks } = useContext(TasksContext);
    const [modalVisible3,setModalVisible3]=useState(false)
    const [modalVisible4,setModalVisible4]=useState(false)
    const obj = {
        "default": (<Modal1 settype={settype} type={type} modalVisible2={modalVisible2} setModalVisible2={setModalVisible2} modalVisible3={modalVisible3} setModalVisible3={setModalVisible3} modalVisible={modalVisible} setModalVisible={setModalVisible}/>),
        "priority": (<ModalPriority  modalVisible2={modalVisible2} setModalVisible2={setModalVisible2} />),
        "category":(<ModalCategory modalVisible3={modalVisible3} setModalVisible3={setModalVisible3} modalVisible4={modalVisible4} setModalVisible4={setModalVisible4}></ModalCategory>),
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
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {obj[type]}
                    </View>
                </View>
            </Modal>

           
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                presentationStyle="overFullScreen"
                onRequestClose={() => setModalVisible2(false)}> 
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {obj["priority"]}
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                presentationStyle="overFullScreen"
                onRequestClose={() => setModalVisible3(false)}> 
                <View style={styles.topView}>
                    <View style={styles.modalView}>
                        {obj["category"]}
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                // transparent={true}
                statusBarTranslucent={true}
                visible={modalVisible4}
                presentationStyle="fullScreen"
                onRequestClose={() => setModalVisible4(false)}> 
                <View style={styles.topView}>
                    <View style={styles.modalView}>
                        {obj["Add_category"]}
                    </View>
                </View>
            </Modal>
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
