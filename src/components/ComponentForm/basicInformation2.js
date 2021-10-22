// import React, {useState} from "react";
// import {
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     CustomInput,
//     FormFeedback,
//     ModalBody,
//     Modal,
//     ModalHeader,
//     ModalFooter, Button
// } from 'reactstrap';
// import {AvForm, AvField} from 'availity-reactstrap-validation';
// import {required} from "./valdators";
//
// class BasicInformation extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.closeModal = this.closeModal.bind(this);
//         this.state = {text: false};
//     }
//
//     closeModal() {
//         this.setState({text: false, error: false});
//     }
//
//     render() {
//         const modalError = this.state.error ? 'not' : '';
//
//
//         return (
//             <Form className={'mt-2'}>
//                 <AvForm>
//                     <FormGroup check inline>
//
//                         <Label>Заголовок:
//                             <AvField name={'text'} type="text"
//                             placeholder="Text" bsSize="lg" required/>
//                             {/*<Input invalid type="text"
//                             placeholder="Text" bsSize="lg"/>*/}
//                             {/*<FormFeedback invalid tooltip>Oh noes!
//                             that name is already taken</FormFeedback>*/}
//                         </Label>
//
//
//                     </FormGroup>
//                     <FormGroup>
//
//                         <Label for="exampleText" sm={6}>Описание:
//                             <AvField type="textarea" name={"text"}
//                             id="exampleText" placeholder="text" required/>
//                             {/*<Input valid type="textarea"
//                             name="text" id="exampleText" />*/}

//                            {/*<FormFeedback valid tooltip>Sweet! that
//                             name is available</FormFeedback>*/}
//                         </Label>
//
//                     </FormGroup>
//
//                     <FormGroup check inline>
//                         <Label check>Статус:
//                             <CustomInput type="switch"
//                             id="exampleCustomSwitch"
//                             name="customSwitch"
//                            label="Turn on this custom switch"/>
//                         </Label>
//                     </FormGroup>
//                 </AvForm>
//                 <Modal isOpen={this.state.text !== false}
//                 toggle={this.closeModal}>
//                     <ModalHeader toggle={this.closeModal}>
//                     Form is {modalError} valid!</ModalHeader>
//                     <ModalBody>
//                         You have {modalError} successfully filled
//                         out the form and submitted it.
//                         Your  ({this.state.text}) is {modalError} valid!
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary"
//                         onClick={this.closeModal}>Ok, got it!</Button>
//                     </ModalFooter>
//                 </Modal>
//             </Form>
//         )
//     }
// }
//
// export default BasicInformation
