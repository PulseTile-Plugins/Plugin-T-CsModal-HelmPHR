import React, { Component } from 'react';

import ConfirmationModal from '../../../../ui-elements/ConfirmationModal/ConfirmationModal';
import Content from './content';

export default class TermsAndConditions extends Component {

    state = {
      isOpenModal: false,
    };

    componentDidMount() {
      const decodedCookie = decodeURIComponent(document.cookie).split(';');
      if (-1 === decodedCookie.indexOf(' termsAndConditions=agree') && -1 === decodedCookie.indexOf('termsAndConditions=agree')) {
        this.setState({ isOpenModal: true })
      }
    }

    closeModal = () => {
      document.cookie = 'termsAndConditions=agree';
      this.setState({ isOpenModal: false })
    };

    reloadPage = () => {
      location.reload()
    };

    render() {
      const { isOpenModal } = this.state;
      return (
        <ConfirmationModal
          title={'Terms and Conditions'}
          onOk={this.closeModal}
          onHide={this.closeModal}
          onCancel={this.reloadPage}
          isShow={isOpenModal}
          textOkButton='I agree'
          isShowOkButton={true}
          isShowCancelButton={true}
        >
          <Content />
        </ConfirmationModal>
      );
    }
}
