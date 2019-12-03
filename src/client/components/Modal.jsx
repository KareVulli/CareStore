import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import posed, {PoseGroup} from 'react-pose';
import Button from './Button';

const ModalDiv = posed.div({
    enter: {
        x: '-50%',
        y: 0,
        opacity: 1,
        delay: 50
    },
    exit: {
        x: '-50%',
        y: 40,
        opacity: 0,
        transition: {
            y: {
                duration: 200
            }
        }
    }
});
const Shade = posed.div({
    enter: {opacity: 1},
    exit: {opacity: 0}
});

export default class Modal extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired,
        onClose: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.FadeDiv = posed.div({
            visible: {opacity: 1},
            hidden: {opacity: 0}
        });
    }

    render() {
        return (
            <PoseGroup>
                {this.props.open && [
                    <Shade key="shade" className="modal-shade" />,
                    <ModalDiv key="modal" className="modal">
                        <div className="modal-header">
                            <div className="row middle-xs">
                                <div className="col-xs">
                                    <span>{this.props.title}</span>
                                </div>
                                <div className="col-xs end-xs">
                                    <Button title={<FontAwesomeIcon icon={faTimes} />} rule="button" type="simple-primary" onClick={this.props.onClose} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </ModalDiv>
                ]}
            </PoseGroup>
        );
    }
}
